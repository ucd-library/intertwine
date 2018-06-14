import nodeManager from "./NodeManager"

export default class MapNode {

  /**
   * Create the map node wrapper
   * 
   * @param {Object} data node json data
   * @param {Object} layer leaflet cluster layer
   */
  constructor(data, layer) {
    this.data = data;
    this.layer = layer;
    this.latLng = [data.lat, data.lng];

    // are we visible inside the map, so this flag
    // is false if the node is inside an external marker
    this.visible = null;

    this.feature = L.circleMarker(this.latLng, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 20
    });

    // rendered state means are we rendered in the main map
    // so rendered = false means node is part of a cluster layer
    this.rendered = null;

    nodeManager.addMap(data.id, this);
  }

  destroy() {
    this.layer.removeLayer(this.feature);
    nodeManager.removeMap(this.data.id);
  }

  /**
   * @method render
   * @description register node with either the cluster layer or the 
   * external node for this node.
   */
  render() {
    // if node is visible, this means node should be
    // part of clustered layer 
    if( this.visible === true ) {
      if( this.rendered === true ) return;

      // add feature to cluster layer
      this.layer.addLayer(this.feature);
      nodeManager.getExternal(this.data.externalId).removeNode(this);
      this.rendered = true;
      return;
    }

    // node is part of external node, if rendered in cluster layer
    // now is the time to remove from cluster layer and register with
    // external node.
    // NOTE: getLatLng() below will not be correct until render() is called
    if( this.rendered !== false ) {
      this.layer.removeLayer(this.feature);
      nodeManager.getExternal(this.data.externalId).addNode(this);
      this.rendered = false;
    }
  }

  /**
   * @method getLatLng
   * @description return the lat/lng for this node.  lat/lng will
   * represent one of the following:
   * - node lat/lng
   * - nodes cluster lat/lng (if in cluster)
   * - external nodes lat/lng (including specific offset within external node)
   * 
   * Note: this method will not return correct location until render() is called.
   * That's when then node registers itself with either the cluster layer or the
   * external node.
   * 
   * @returns {Object} latlng
   */
  getPoint() {
    // if node is visible on the map
    if( this.visible ) {
      if( !this.layer._map ) return [0,0];

      // ask the cluster layer to return node location
      // this will either be node lat/lng or cluster lat/lng (if part of cluster)
      let clusterFeature = this.layer.getVisibleParent(this.feature);
      if( clusterFeature ) return this.layer._map.latLngToContainerPoint(clusterFeature.getLatLng());
      return this.layer._map.latLngToContainerPoint(this.feature.getLatLng());
    }

    // node is attached to external node, ask for lat/lng from
    // external node.  this lat/lng will be relative to main map but
    // will include offset for node
    let externalNode = nodeManager.getExternal(this.data.externalId);
    return externalNode.getNodePoint(this)
  }
}