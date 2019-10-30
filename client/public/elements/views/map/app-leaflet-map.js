import { LitElement } from 'lit-element';
import render from "./app-leaflet-map.tpl.js"

import "leaflet"
import "leaflet.markercluster"


export default class AppLeafletMap extends LitElement {

  static get properties() {
    return {
      active : {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.linkLayers = {};
    this.nodeLayers = {};
    this.links = {};
    this.nodes = {};
    this.updateLinksTimer = -1;
    this.firstRender = true;

    window.addEventListener('resize', () => {
      if( !this.active ) return;
      this.redraw();
    });
    this.redrawTimer = -1;
  }

  firstUpdated() {
    this.initMap();
  }

  initMap() {
    let latlng = [0, 0], zoom = 3;
    if( this.pendingView ) {
      latlng = this.pendingView.latlng;
      zoom = this.pendingView.zoom;
      this.pendingView = null;
    }

    this.map = L.map(this.shadowRoot.querySelector('#map')).setView(latlng, zoom, {animate: false});
    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    
    this.clusters = L.markerClusterGroup({
      animate: false,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: false,
      removeOutsideVisibleBounds: false,
      maxClusterRadius : 40
    });
    this.clusters.on('clusterclick', e => this.onClusterClicked(e));

    this.map.addLayer(this.clusters);
    this.map.on('zoomend', () => {
      this.repositionSelectedNode();
      this.updateLinks()
    });

    this.lineColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--app-color-interface-blue')
      .trim();
  }

  renderSelectedState(e) {
    // reset state
    if( this.selectedNodeIcon ) {
      for( let type in this.selectedNodeIcon ) {
        this.map.removeLayer(this.selectedNodeIcon[type]);
      }
      this.selectedNodeIcon = null;
      this.selectedNodeLayer = null;
    }

    // now render
    if( e.selected.type === 'cluster' ) {
      this.selectCluster(e.selected.latlng, e.selected.zoom);
    } else if( e.selected.type && e.selected.type !== 'connection' ) {
      this.selectNode(e.selected.id);
    } else if( e.selected.type === 'connection' ) {
      this.selectLink(e.selected.id);
    }
  }

  selectLink(id) {
    let link = this.links[id];

    if( !link ) {
      this.pendingLinkSelect = id;
      return;
    } 

    this.selectNode(link.src, 'src');
    this.selectNode(link.dst, 'dst');
  }

  selectNode(id, type='src') {
    let layer = this.clusters
      .getLayers()
      .find(layer => layer.inertWineId === id);

    if( !layer ) {
      if( !this.pendingNodeSelect ) {
        this.pendingNodeSelect = {};
      }
      this.pendingNodeSelect[type] = id;
      return;
    }

    if( !this.selectedNodeLayer ) {
      this.selectedNodeLayer = {};
    }
    if( !this.selectedNodeIcon ) {
      this.selectedNodeIcon = {};
    }

    this.selectedNodeLayer[type] = layer;
    layer = this.clusters.getVisibleParent(layer) || layer;

    let icon = L.divIcon({
      className: `leaflet-intertwine-node-label`,
      iconSize: [0, 0],
      html : '<div>'+this.nodes[id].title+'</div>'
    });

    this.selectedNodeIcon[type] = L.marker(layer.getBounds ? layer.getBounds().getCenter() : layer.getLatLng(), {icon});
    this.map.addLayer(this.selectedNodeIcon[type]);
    this.selectedNodeIcon[type].setZIndexOffset(5000);

    requestAnimationFrame(() => {
      let markerEle = this.selectedNodeIcon[type].getElement().firstChild;
      let w = markerEle.offsetWidth;
      let h = markerEle.offsetHeight;
      markerEle.style.top = (-1*h - 25)+'px';
      markerEle.style.left = (-1*(w/2))+'px';
    });
  }

  repositionSelectedNode() {
    if( !this.selectedNodeLayer || !this.selectedNodeIcon ) return;
    for( let type in this.selectedNodeLayer ) {
      let layer = this.clusters.getVisibleParent(this.selectedNodeLayer[type]) || this.selectedNodeLayer[type];
      this.selectedNodeIcon[type].setLatLng(layer.getBounds ? layer.getBounds().getCenter() : layer.getLatLng());
    }
  }

  selectCluster(latlng, zoom) {
    if( this.firstRender ) {
      this.firstRender = false;
      if( this.map ) {
        this.map.setView(latlng, zoom, {animate: false});

        if( this.clusters.getLayers().length === 0 ) {
          this.pendingClusterSelect = {latlng, zoom};
          return; // this will get fired on again on firstUpdate
        }

      } else {
        this.pendingView = {latlng, zoom};
        this.pendingClusterSelect = {latlng, zoom};
        return; // this will get fired on again on firstUpdate
      }
    }

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

    if( !selectedCluster ) return console.warn('no clusters found to selected');
  
    let event = new CustomEvent('selected-cluster-ids', {
      detail: selectedCluster.getAllChildMarkers().map(l => l.inertWineId)
    })
    this.dispatchEvent(event);
  }

  /**
   * @method onClusterClicked
   * @description bound to cluster click event
   */
  onClusterClicked(e) {
    let center = e.layer.getBounds().getCenter();
    let event = new CustomEvent('cluster-click', {detail : {
      latLng : [parseFloat(center.lat.toFixed(4)), parseFloat(center.lng.toFixed(4))],
      zoom : this.map.getZoom()
    }});
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
   */
  setData(data) {
    this.nodes = data.nodes;
    this.nodeLayers = {};
    this.links = data.links;

    this.clusters.clearLayers();

    for( let id in data.nodes ) {
      let icon = L.divIcon({
        className: `leaflet-intertwine-icon leaflet-${data.nodes[id].type}-icon`,
        iconSize: [15, 15]
      });
      let layer = L.marker(data.nodes[id].coordinates, {icon});

      layer.on('click', e => this.onNodeClicked(e));
      layer.inertWineId = id;
      this.nodeLayers[id] = layer;
      this.clusters.addLayer(layer);
    }

    this.updateLinks();

    if( this.pendingClusterSelect ) {
      this.selectCluster(this.pendingClusterSelect.latlng, this.pendingClusterSelect.zoom);
      this.pendingClusterSelect = null;
    } else if( this.pendingNodeSelect ) {
      for( let type in this.pendingNodeSelect ) {
        this.selectNode(this.pendingNodeSelect[type], type);
      }
      this.pendingNodeSelect = null;
    } else if( this.pendingLinkSelect ) {
      this.selectLink(this.pendingLinkSelect);
      this.pendingLinkSelect = null;
    }
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
      let src = this.getMarkerLatLng(item.src);
      let dst = this.getMarkerLatLng(item.dst);

      let lid = src.lat+'-'+src.lng+'-'+dst.lat+'-'+dst.lng;
      if( this.linkLayers[lid] ) continue;
      this.linkLayers[lid] = L.polyline([src, dst], {
        color: this.lineColor,
      }).addTo(this.map);
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


  updated(props) {
    if( props.has('active') && this.active ) {
      this.redraw();
    }
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
