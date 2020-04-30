import { LitElement } from 'lit-element';
import render from "./app-leaflet-map.tpl.js"

import "leaflet"
import "leaflet.markercluster"
import "leaflet-polylinedecorator"

export default class AppLeafletMap extends LitElement {

  static get properties() {
    return {
      active : { type: Boolean },
      infoOpen : {
        type: Boolean,
        attribute: 'info-open'
      },
      connectionName : { type: String },
      arrow: { type: Object },
      stopZoomBounds: { type: Boolean }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.linkLayers = {};
    this.nodeLayers = {};
    this.layerLabel = '';
    this.links = {};
    this.nodes = {};
    this.updateLinksTimer = -1;
    this.firstRender = true;
    this.connectionName = '';  

    this.arrow = {};
    this.stopZoomBounds = false;

    window.addEventListener('resize', () => {
      if( !this.active ) return;
      this.redraw();
    });
    this.redrawTimer = -1;
  }

  firstUpdated() {
    this.initMap();
  }

  updated(props) {
    if( props.has('active') && this.active ) {
      this.redraw();
    }
  }

  /**
   * @method initMap
   * @description called when the element is first rendered.  Sets up the map
   * and the clister laters.  Checks if there is a pending view state and sets the
   * map to that location, otherwise renders at 0,0
  */
  initMap() {
    // create the leaflet map object
    this.map = L.map(this.shadowRoot.querySelector('#map')).setView([0,0], 3, { animate: false });

    // pending view state? use that lat/lng instead
    if( this.pendingView ) {
      this.setView(this.pendingView.latlng, this.pendingView.zoom);
      this.pendingView = null;
    } else if( this.infoOpen ) {
      this.setView([0,0], 3);
    }

    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // create the clulster layer
    this.clusters = L.markerClusterGroup({
      animate: false,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: false,
      removeOutsideVisibleBounds: false,
      maxClusterRadius : 25,
      spiderfyOnMaxZoom : false,
      iconCreateFunction: function(cluster) {
        return L.divIcon({
          html: '<div><span>' + cluster.getChildCount() + '</span></div>',
          className: 'marker-cluster marker-cluster-small',
          iconSize: L.point(40,40)
        });
      }
    });

    this.map.addLayer(this.clusters);
    this.map.zoomControl.setPosition('bottomright');
  
    // wire up layer and map events
    this.clusters.on('clusterclick', e => this.onClusterClicked(e));
    this.clusters.on('clustermouseover', e => this.onClusterMouseOver(e));
    this.clusters.on('clustermouseout', e => this.onClusterMouseOut(e));
    this.clusters.on('mouseover', e => this.onMarkerMouseOver(e));
    this.clusters.on('mouseout', e  => this.onMarkerMouseOut(e));

    console.log(this.map)

    this.map.on('zoomend', () => {
      this.repositionSelectedNode();
      this.repositionSelectedLink();
      this.updateLinks();     

      if( this.appState && this.appState.selectedNode && this.appState.selectedNode.type === 'cluster' ) {
        this.findAndRenderSelectedCluster(this.appState.selectedNode.latlng, this.appState.selectedNode.zoom);
      }
    });

    // grab the css color defined by our custom variable
    this.lineColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--app-color-interface-blue')
      .trim();
  }

  /**
   * @method renderSelectedState
   * @description called by the parent when app state updates.  render the map
   * to the current state
   *
   * @param {Object} e app-state-update event object
  */
  renderSelectedState(e) {    
    this.appState = e;

    if( !e ) {
      if( Object.keys(this.nodes).length === 0 ) {
        this.zoomToClusters = true;
      } else {
        this.map.invalidateSize({pan: false});
        this.map.fitBounds(this.clusters.getBounds()); // Zooms the map to the clusters
      }

      // reset state, remove current markers
      if( this.selectedNodeIcon ) {
        for ( let type in this.selectedNodeIcon ) {
          this.map.removeLayer(this.selectedNodeIcon[type]);
        }
        this.selectedNodeIcon = null;
      }

      this.firstRender = false;

      return;
    }

    // reset state, remove current markers
    if( this.selectedNodeIcon ) {
      for( let type in this.selectedNodeIcon ) {
        this.map.removeLayer(this.selectedNodeIcon[type]);
      }
      this.selectedNodeIcon  = null;
      this.selectedNodeLayer = null;
    }
    if( this.selectedLineIcon ) {
      this.map.removeLayer(this.selectedLineIcon);
      this.selectedLineIcon = null;
    }

    // now render based on selected type
    if( e.selectedNode.type === 'cluster' ) {
      this.selectCluster(e.selectedNode.latlng, e.selectedNode.zoom);
    } else if( e.selectedNode.type && e.selectedNode.type !== 'connection' ) {
      this.selectNode(e.selectedNode.id, undefined, this.firstRender);
    } else if( e.selectedNode.type === 'connection' ) {
      this.selectLink(e.selectedNode.id);
    }
    
    // make sure our links are rendered correctly
    this.updateLinks();
  }

  /**
   * @method selectLink
   * @description render a link based on id.  This will show two labels and
   * the center connection line label
   *
   * @param {String} id connection id
  */
  selectLink(id) {
    // get the link object
    let link = this.links[id];

    // if no link object, assume we are loading.  Set the pending attribute
    // and quit.  When a new graph is loaded, this will be check and selectLink()
    // will be called again
    if( !link ) {
      this.pendingLinkSelect = id;
      return;
    }

    // set our source and destination node labels
    this.selectNode(link.src, 'src');
    this.selectNode(link.dst, 'dst');

    // find the screen midpoint of the line
    let ll = this._getMidPoint(
      this.selectedNodeIcon.src.getLatLng(),
      this.selectedNodeIcon.dst.getLatLng()
    );
    
    //  The Trello board moments have link names that are 2 item Arrays w/the
    //  short word being stored in the second slot
    let connectionName = (Array.isArray(link.name) ? link.name[1] : link.name);
    // create the line label
    let icon = L.divIcon({
      className: `leaflet-intertwine-connection-label`,
      iconSize: [0, 0],
      html : '<div>' + connectionName + '</div>'
    });
    this.selectedLineIcon = L.marker(ll, {icon});
    this.map.addLayer(this.selectedLineIcon);
    this.selectedLineIcon.setZIndexOffset(5000);

    // Latlngs must be formatted as Arrays for the polyline in addArrowHead()
    this.latlngs = [link.coordinates.src, link.coordinates.dst];

    this.getPolylineLength();
    this.getArrowHead();
  }


  /**
   * @method getPolylineLength
   * @description Calculate the line length
   *
  */
  getPolylineLength() {
    let srcxy = this.map.latLngToContainerPoint(this.latlngs[0]);
    let dstxy = this.map.latLngToContainerPoint(this.latlngs[1]);

    let length = Math.sqrt(Math.pow((srcxy.x - dstxy.x), 2) + Math.pow((srcxy.y - dstxy.y), 2));

    this.polylineLength = length;
  }

   /**
   * @method calculateOffset
   * @description Returns the distance between two geographical coordinates according to the map's CRS.
                  By default this measures distance in meters
   *
  */
  calculateOffset() {    
    let len       = L.latLng(this.latlngs[0]).distanceTo(this.latlngs[1])
    let m_center  = this.map.latLngToContainerPoint(this.latlngs[1]);
    let m_edge    = [m_center.x + 20, m_center.y];
    let m_len     = L.latLng(this.latlngs[1]).distanceTo(this.map.containerPointToLatLng(m_edge));
    let offset    = 100 * (len - m_len) / len;
    return offset;
  }

  /**
   * @method getArrowHead
   * @description generate an arrow head for the connection lines
   *
  */
  getArrowHead() {
    // Remove any existing arrowHead
    if ( Object.keys(this.arrow).length > 0 ) {
      this.map.removeLayer(this.arrow);
    }

    //console.log(this.map.getZoom())

    // Create the polyline
    let polyline  = L.polyline(this.latlngs, { 
      stroke: true,
      weight: 2,
      color: this.lineColor,
      className: 'connection-arrow-polyline'
    });

    // Set offset to length of line - 20    
    let decorator = L.polylineDecorator(polyline, {
      patterns: [
        { 
          offset: this.calculateOffset() + '%',
          repeat: 0, 
          symbol: L.Symbol.arrowHead({ 
            polygon: false,
            pixelSize: 15,
            headAngle: 60,
            pathOptions: {
              stroke: true,
              weight: 4,
              color: this.lineColor,
              opacity: 1.0,
              className: 'connection-arrow'
            }
          })
        }
      ]
    });

    let featureGroup = L.featureGroup([polyline, decorator]);
    featureGroup.addTo(this.map);

    this.arrow = featureGroup;

    if ( !this.stopZoomBounds ) {
      // zoom the map into the polyline
      this.map.fitBounds(polyline.getBounds());

      // Set this otherwise fitBounds() will fire every time you 
      // adjust zoom levels and won't let you zoom in properly
      this.stopZoomBounds = true;
    }
  }

  getMarkerLabelIcon(id){
    return new L.divIcon({
      className: `leaflet-intertwine-node-label`,
      iconSize: [0, 0],
      html : '<div>'+this.nodes[id].name+'</div><div class="intertwine-arrow"></div>'
    });
  }

  /**
   * @method selectNode
   * @description set a node label.  The type should be either src or dst.  For single
   * node selection the type will be src.
   *
   * @param {String} id node id
   * @param {String} type either src|dst
  */
  selectNode(id, type='src', firstRender=false) {
    // If there is a layerLabel present for this item, we need to remove it
    // or it conflicts w/the marker label created down below
    if ( this.layerLabel ) {
      this.map.removeLayer(this.layerLabel);
      this.layerLabel = null;
    }

    // If there is an arrow present from a connection get rid of it
    this.map.removeLayer(this.arrow);

    // find the marker layer based on id in the cluster
    let layer = this.clusters
      .getLayers()
      .find(layer => layer.inertWineId === id);

    // if not found, assume either graph hasn't loaded or the layer hasn't rendered
    // set the pendingNodeSelect attribute which will be cheched when the graph
    // loads calling this function again
    if( !layer ) {
      if( !this.pendingNodeSelect ) {
        this.pendingNodeSelect = {};
      }
      this.pendingNodeSelect[type] = id;
      return;
    }

    // setup our look attributes for selected layer and icon
    if( !this.selectedNodeLayer ) {
      this.selectedNodeLayer = {};
    }
    if( !this.selectedNodeIcon ) {
      this.selectedNodeIcon = {};
    }
    this.selectedNodeLayer[type] = layer;

    // graph the visible marker, either the cluster marker or the layer itself
    layer = this.clusters.getVisibleParent(layer) || layer;

    // render the icon
    let icon = this.getMarkerLabelIcon(id);
    this.selectedNodeIcon[type] = L.marker(layer.getLatLng(), {
      icon: icon,
      inertWineId: id,
      zIndexOffset: 5000
    });
    this.map.addLayer(this.selectedNodeIcon[type]);

    // we need to let the marker render so we can adjust the left offset based
    // on the marker width.  We will do a little bit of additional css work as well
    requestAnimationFrame(() => {
      // should the label be set to bottom of marker?
      // check the two selected nodes and see which has a higher lat
      let bottom = false;
      for( let key in this.selectedNodeIcon ) {
        if( key === type ) continue;
        if( this.selectedNodeLayer[key].getLatLng().lat > this.selectedNodeLayer[type].getLatLng().lat ) {
          bottom = true;
        }
      }

      // grab the two div's and setup location classes
      let markerEle = this.selectedNodeIcon[type].getElement().firstChild;
      let arrow = this.selectedNodeIcon[type].getElement().children[1];
      if( bottom ) {
        markerEle.classList.add('bottom');
        arrow.classList.add('bottom');
      } else {
        markerEle.classList.add('top');
        arrow.classList.add('top');
      }

      // the point markers have inertWineIds
      // these have different label top/bottom offsets based on cluster vs point
      if( layer.inertWineId ) {
        markerEle.classList.add('point');
        arrow.classList.add('point');
      }

      // set the left to the midpoint of label width
      let w = markerEle.offsetWidth;
      if( w > 150 ) {
        markerEle.classList.add('fixed-width');
      } else {
        markerEle.style.left = (-1*(w/2))+'px';
      }

      // if there is only one selected node and it is not in view, set to center
      if( Object.keys(this.selectedNodeIcon).length === 1 ) {
        if( firstRender || !this.map.getBounds().contains(this.selectedNodeIcon.src.getLatLng()) ) {
          this.setView(this.selectedNodeIcon.src.getLatLng(), this.map.getZoom());
        }
      }
    });
  }

  /**
   * @method onMarkerMouseOver
   * @description bound to marker mouseover event
   * @param {Object} e event object
  */
  // TODO: is this the best way to accomplish this?
  // RE: https://github.com/ucd-library/intertwine/issues/23
  onMarkerMouseOver(e) {
    let latlng = e.latlng;

    // Don't show mouseover label if the node has already been selected
    // and is displaying the label
    if ( this.selectedNodeIcon ) {
      if ( this.selectedNodeIcon.src._latlng.lat === latlng.lat &&
           this.selectedNodeIcon.src._latlng.lng === latlng.lng ) return;
    };

    let id = e.sourceTarget.inertWineId;
    let icon = this.getMarkerLabelIcon(id);
    let layer = L.marker(latlng, {
      icon: icon,
      inertWineId: id,
      zIndexOffset: 5000
    });
    this.layerLabel = layer;
    this.layerLabel.inertWineId = id;
    this.map.addLayer(this.layerLabel);

    // We need to let the marker render so we can adjust the left offset based
    // on the marker width.  We will do a little bit of additional css work as well
    requestAnimationFrame(() => {
      if ( !this.layerLabel ) return;

      // TODO: Figure out how to handle a situation where a
      // pop-upped label is overlapping an already displayed marker label

      let labelEle = this.layerLabel.getElement().firstChild;
      let labelArrow = this.layerLabel.getElement().children[1];

      labelEle.classList.add('top','point');
      labelArrow.classList.add('top','point');

      let w = labelEle.offsetWidth;
      if ( w > 150 ) {
        labelEle.classList.add('fixed-width');
      } else {
        labelEle.style.left = (-1*(w/2))+'px';
      }
    });
  }

  /**
   * @method onMarkerMouseOut
   * @description bound to marker mouseout event
   * @param {Object} e event object
  */
  onMarkerMouseOut(e) {
    if ( this.layerLabel ) {
      this.map.removeLayer(this.layerLabel);
      this.layerLabel = null;
    }
  }

  resetClusterStyles() {
    // TODO: is this the best way to do this?
    // Get all the markers & clear any instances of the class selectedCluster
    this.map.eachLayer(layer => {
      if ( layer._icon !== undefined ) {
        if ( layer._icon.classList.contains('selected-cluster') ) {
          layer._icon.classList.remove('selected-cluster');
        }
        if ( layer._icon.classList.contains('hover-cluster') ) {
          layer._icon.classList.remove('hover-cluster');
        }
      }
    });
  }

  /**
   * @method _getMidPoint
   * @description get the midpoint for a line by finding the screen (x, y) midpoint
   * then converting to lat/lng.  This is how lines are rendered and we need the
   * label based on that otherwise it may look off when labels are far apart.
   *
   * @param {*} srcll
   * @param {*} dstll
   */
  _getMidPoint(srcll, dstll) {
    let srcxy = this.map.latLngToContainerPoint(srcll);
    let dstxy = this.map.latLngToContainerPoint(dstll);

    let x = (dstxy.x + srcxy.x) / 2;
    let y = (dstxy.y + srcxy.y) / 2;

    return this.map.containerPointToLatLng({x,y});
  }

  repositionSelectedLink() {
    if( !this.selectedNodeLayer || !this.selectedLineIcon ) return;
    
    this.getArrowHead(this.stopZoomBounds);

    let ll = this._getMidPoint(
      this.selectedNodeIcon.src.getLatLng(),
      this.selectedNodeIcon.dst.getLatLng()
    );
    this.selectedLineIcon.setLatLng(ll);

    this.arrow.eachLayer(layer => {
      if ( typeof layer.setLatLngs === undefined ) {
        layer.setLatLngs(ll);
      }
    });
  }

  repositionSelectedNode() {
    if( !this.selectedNodeLayer || !this.selectedNodeIcon ) return;

    for( let type in this.selectedNodeLayer ) {
      let layer = this.clusters.getVisibleParent(this.selectedNodeLayer[type]) || this.selectedNodeLayer[type];
      this.selectedNodeIcon[type].setLatLng(layer.getLatLng());  

      if( layer.inertWineId ) {
        this.selectedNodeIcon[type].getElement().firstChild.classList.add('point');
        this.selectedNodeIcon[type].getElement().children[1].classList.add('point');
      } else {
        this.selectedNodeIcon[type].getElement().firstChild.classList.remove('point');
        this.selectedNodeIcon[type].getElement().children[1].classList.remove('point');
      }
    }
  }

  selectCluster(latlng, zoom) {
    if( this.firstRender ) {
      this.setView(latlng, zoom);

      if( this.map ) {
        if( this.clusters.getLayers().length === 0 ) {
          this.pendingClusterSelect = {latlng, zoom};
          return; // this will get fired on again on firstUpdate
        }
      } else {
        this.pendingClusterSelect = {latlng, zoom};
        return; // this will get fired on again on firstUpdate
      }
    }

    let selectedCluster = this.findAndRenderSelectedCluster(latlng, zoom);
    if( !selectedCluster ) return console.warn('no clusters found to selected');

    let event = new CustomEvent('selected-cluster-ids', {
      detail: selectedCluster.getAllChildMarkers().map(l => l.inertWineId)
    })
    this.dispatchEvent(event);
  }

  findAndRenderSelectedCluster(latlng, zoom) {
    this.resetClusterStyles();
    if( this.map.getZoom() !== zoom ) return;

    let clusterMarkers = this.clusters._featureGroup.getLayers();
    let closest = Number.MAX_SAFE_INTEGER;
    let selectedCluster = null;

    for( let layer of clusterMarkers ) {
      // HACK.  Is there better type checking for this?
      if( layer.inertWineId ) continue;
      if( !layer._group ) continue;

      let ll = layer.getBounds().getCenter();
      let dist = Math.abs(ll.lat - latlng[0]) + Math.abs(ll.lng - latlng[1]);
      if( closest > dist ) {
        selectedCluster = layer;
        closest = dist;
      }
    }

    if( !selectedCluster ) return;

    selectedCluster._icon.classList.add('selected-cluster');
    return selectedCluster;
  }

  onClusterMouseOver(e) {
    e.layer._icon.classList.add('hover-cluster');
  }

  onClusterMouseOut(e) {
    e.layer._icon.classList.remove('hover-cluster');
  }

  /**
   * @method onClusterClicked
   * @description bound to cluster click event
  */
  onClusterClicked(e) {
    let center = e.layer.getBounds().getCenter();
    let event = new CustomEvent('cluster-click', {
      detail : {
        latLng : [parseFloat(center.lat.toFixed(4)), parseFloat(center.lng.toFixed(4))],
        zoom : this.map.getZoom()
      }
    });

    this.dispatchEvent(event);
  }

  /**
   * @method onNodeClicked
   * @description bound to map marker click events
   */
  onNodeClicked(e) {
    let event = new CustomEvent('node-click', {detail : {
      id : e.target.inertWineId
    }});

    this.dispatchEvent(event);
  }

  onLinkClicked(e) {
    let event = new CustomEvent('link-click', {detail : {
      id : e.layer.inertWineId
    }});
    this.dispatchEvent(event);
  }

  /**
   * @method setData
   * @description set node/link data, render map
   * @param {Object} data
  */
  setData(data) {
    this.nodes = data.nodes;
    this.nodeLayers = {};
    this.links = data.links;

    this.clusters.clearLayers();

    for( let id in this.nodes ) {
      let icon = L.divIcon({
        className: `leaflet-intertwine-icon leaflet-${this.nodes[id].type}-icon`,
        iconSize: [15, 15]
      });

      let layer = L.marker(this.nodes[id].coordinates, {icon});

      layer.on('click', e => this.onNodeClicked(e));
      layer.inertWineId = id;
      this.nodeLayers[id] = layer;
      this.clusters.addLayer(layer);
    }

    if( this.pendingClusterSelect ) {
      this.selectCluster(this.pendingClusterSelect.latlng, this.pendingClusterSelect.zoom);
      this.pendingClusterSelect = null;
    } else if( this.pendingNodeSelect ) {
      for( let type in this.pendingNodeSelect ) {
        this.selectNode(this.pendingNodeSelect[type], type, true);
      }
      this.pendingNodeSelect = null;
    } else if( this.pendingLinkSelect ) {
      this.selectLink(this.pendingLinkSelect);
      this.pendingLinkSelect = null;
    } else if( this.zoomToClusters ) {
      // Zooms the map to where the clusters are located
      this.map.fitBounds(this.clusters.getBounds());
      this.zoomToClusters = false;
    }

    this.updateLinks();
  }

  /**
   * @method updateLinks
   * @description redraw links from current cluster locations.  Should be
   * called whenever data changes or map zoom level changes
  */
  updateLinks() {
    if( this.updateLinksTimer !== -1 ) clearTimeout(this.updateLinksTimer);
    this.updateLinksTimer = setTimeout(() => {
      this.updateLinksTimer = -1;
      this._updateLinks();
    }, 100);
  }

  _updateLinks() {   
    for( let id in this.linkLayers ) {
      this.map.removeLayer(this.linkLayers[id]);
    }

    this.linkLayers = {};

    for( let id in this.links ) {
      let item = this.links[id];
      if ( item.weblink ) continue;

      let src = this.getMarkerLatLng(item.src);
      let dst = this.getMarkerLatLng(item.dst);     

      let selected = false;
      if( this.selectedNodeLayer && this.selectedNodeLayer.src && this.selectedNodeLayer.dst ) {
        if( item.src === this.selectedNodeLayer.src.inertWineId && item.dst === this.selectedNodeLayer.dst.inertWineId ) {
          selected = true;
        }
      }

      let lid = src.lat+'-'+src.lng+'-'+dst.lat+'-'+dst.lng;
      if( this.linkLayers[lid] ) {
        if( selected && !this.linkLayers[lid].selected ) {
          this.linkLayers[lid].selected = true;
          this.linkLayers[lid].setStyle({ opacity: 1, weight: 2 });
        }
        continue;
      }

      this.linkLayers[lid] = L.polyline([src, dst], {
        color: this.lineColor,
        weight: selected ? 2 : 1,
        opacity : selected ? 1 : 0.3
      }).addTo(this.map);

      this.linkLayers[lid].selected = selected;
    }
  }

  setView(latlng, zoom) {
    if( this.map ) {

      // adjust center by 500 px
      // if( this.infoOpen ) {
      //   latlng = this.map.latLngToContainerPoint(latlng);
      //   latlng.x -= 400;
      //   latlng = this.map.containerPointToLatLng(latlng);
      // }

      this.map.setView(latlng, zoom, {animate: false});
    } else {
      this.pendingView = {latlng, zoom};
    }
  }

  /**
   * @method getMarkerLatLng
   * @description given a node id, find the lat/lng for the node representation.
   * This could be the node itself or it's containing cluster
   */
  getMarkerLatLng(id) {
    let clusterLayer = this.clusters.getVisibleParent(this.nodeLayers[id]);
    if( clusterLayer ) return clusterLayer.getLatLng();
    return L.latLng(this.nodes[id].coordinates);
  }

  /**
   * @method redraw
   * @description buffered call to map.invalidateSize();
   */
  redraw() {
    if( this.redrawTimer ) clearTimeout(this.redrawTimer);    
    this.redrawTimer = setTimeout(() => {
      this.redrawTimer = -1;
      this.redrawNow();
    });
  }

  /**
   * @method redrawNow
   * @description call to map.invalidateSize();
   */
  redrawNow(xOffset) {
    if( !this.map ) return console.warn('attempting to redraw map, but map not initialized');
    this.map.invalidateSize({pan: false});
  }
}

customElements.define('app-leaflet-map', AppLeafletMap);
