import nodeStore from "../../../lib/stores/NodeStore"

const SIZES = {
  selected : 10,
  unselected : 5
}

let ID = 0;

export default class MapNode extends Mixin(BaseMixin)
  .with(EventInterface) {

  /**
   * Create the map node wrapper
   * 
   * @param {Object} data node json data
   * @param {Object} layer leaflet cluster layer
   */
  constructor(data, layer) {
    super();

    this.id = ID;
    ID++;

    this.type = 'node';
    this.data = data;
    this.layer = layer;
    this.latLng = [data.geometry.coordinates[1], data.geometry.coordinates[0]];

    // keep track of rendered state
    this.rendered = {
      node : '',
      label : ''
    }

    // are we visible inside the map, so this flag
    // is false if the node is inside an external marker
    this.visible = null;

    this.feature = L.circleMarker(this.latLng, {
      fillColor: APP_STYLE.COLOR_BY_TYPE[data.properties.type.toLowerCase()],
      fillOpacity: 1,
      weight: 0,
      radius: SIZES.unselected
    });


    this.labelIcon = L.divIcon({
      html : `<div class="node-label" id="node-label-${this.id}">${data.properties.title}</div>`
    });  
    this.label = L.marker(this.latLng, {icon: this.labelIcon});

    this.feature.on('click', () => {
      if( this.state === 'selected' ) this.GraphModel.unselect(this);
      else this.GraphModel.select(this);
    });

    nodeStore.addMap(data.properties.id, this);


    this._injectModel('GraphModel');

    // bind to model events
    this.ready();
  }

  destroy() {
    this.clearState();
    this.layer.removeLayer(this.feature);
    nodeStore.removeMap(this.data.properties.id);
  }

  _onUnselectNode(e) {
    if( e !== this ) return;
    this.clearState();
  }

  _onSelectedNodeUpdate(e) {
    if( e !== this ) return;
    this.setSelected();
  }

  clearState(force) {
    if( force ) {
      this.state = '';
    } else if( this.state === 'mouseover' && this._lastState ) {
      this.state = this._lastState;
      this._lastState = '';
    } else {
      this.state = '';
    }
  }

  setSelected() {
    this.state = 'selected';
  }

  setMouseover() {
    this.state = 'mouseover';
  }

  setLinkSelected() {
    this.state = 'linkselected';
  }

  set state(value) {
    if( this._state === value ) return;

    this._lastState = this._state;
    this._state = value;

    if( value !== 'selected' ) {
      this.feature.setRadius(SIZES.unselected);
    } else {
      this.feature.setRadius(SIZES.selected);
    }

    this.render(true); 
  }

  get state() {
    return this._state;
  }

  /**
   * @method render
   * @description register node with either the cluster layer or the 
   * external node for this node.
   */
  render(force=false) {
    if( this.visible === true ) {
      // if node is visible, this means node should be
      // part of clustered layer 
      this._renderOnMap(force);
    } else {
      // node is part of external node, if rendered in cluster layer
      // now is the time to remove from cluster layer and register with
      // external node.
      // NOTE: getLatLng() below will not be correct until render() is called
      this._renderOnExternal(force);
    }
  }

  _renderOnMap(force) {
    let external = nodeStore.getExternal(this.data.properties.externalId);

    if( this.rendered.node !== 'map' || force) {

      // add feature to cluster layer
      this.layer.addLayer(this.feature);
      external.removeNode(this);
      
      this.rendered.node = 'map';
    }

    if( this.rendered.label !== 'map' || force) {
      if( this.state ) {
        this.layer._map.addLayer(this.label);
      } else {
        this.layer._map.removeLayer(this.label);
      }

      external.removeLabel(this);
      this.rendered.label = 'map';
    }

    requestAnimationFrame(() => {
      this._labelEle = this.layer._map._container.querySelector('#node-label-'+this.id);
      
      if( this._labelEle ) {
        if( this.state === 'mouseover' ) {
          this._labelEle.classList.add('mouseover');
        } else {
          this._labelEle.classList.remove('mouseover');
        }
      }
    }, 50);
    
  }

  _renderOnExternal(force) {
    let external = nodeStore.getExternal(this.data.properties.externalId);

    if( this.rendered.node !== 'external' || force ) {
      this.layer.removeLayer(this.feature);
      external.addNode(this);
     
      this.rendered.node = 'external';
    }

    if( this.rendered.label !== 'external' || force ) {
      this.layer._map.removeLayer(this.label);

      if( this.state ) {
        external.addLabel(this, this.state);
      } else {
        external.removeLabel(this);
      }
     
      this.rendered.label = 'external';
    }
  }

  /**
   * @method getPoint
   * @description return the map view x/y for this node.  x/y will
   * represent one of the following:
   * - node lat/lng on map projected to x/y
   * - nodes cluster lat/lng (if in cluster) projected to x/y
   * - external nodes x/y (including specific offset within external node)
   * 
   * Note: this method will not return correct location until render() is called.
   * That's when then node registers itself with either the cluster layer or the
   * external node.
   * 
   * @returns {Object} 
   */
  getPoint() {
    // if node is visible on the map
    if( this.visible ) {
      if( !this.layer._map ) return {x:0,y:0};

      // ask the cluster layer to return node location
      // this will either be node lat/lng or cluster lat/lng (if part of cluster)
      let clusterFeature = this.layer.getVisibleParent(this.feature);

      let pt;
      if( clusterFeature ) {
        pt = this.layer._map.latLngToContainerPoint(clusterFeature.getLatLng());
        pt.radius = 20;
      } else {
        pt = this.layer._map.latLngToContainerPoint(this.feature.getLatLng());
        pt.radius = this.state === 'selected' ? 10 : 5;
      }
      return pt;
    }

    // node is attached to external node, ask for lat/lng from
    // external node.  this lat/lng will be relative to main map but
    // will include offset for node
    let externalNode = nodeStore.getExternal(this.data.properties.externalId);
    return externalNode.getNodePoint(this);
  }

  _isClustered() {
    if( this.visible ) {
      if( !this.layer._map ) return false;
      if( this.layer.getVisibleParent(this.feature) ) return true;
    }
    return false;
  }
}