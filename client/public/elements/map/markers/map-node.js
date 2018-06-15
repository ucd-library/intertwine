import nodeStore from "../../../lib/stores/NodeStore"

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

    nodeStore.addMap(data.id, this);
  }

  destroy() {
    this.layer.removeLayer(this.feature);
    nodeStore.removeMap(this.data.id);
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
      nodeStore.getExternal(this.data.externalId).removeNode(this);
      this.rendered = true;
      return;
    }

    // node is part of external node, if rendered in cluster layer
    // now is the time to remove from cluster layer and register with
    // external node.
    // NOTE: getLatLng() below will not be correct until render() is called
    if( this.rendered !== false ) {
      this.layer.removeLayer(this.feature);
      nodeStore.getExternal(this.data.externalId).addNode(this);
      this.rendered = false;
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
      if( !this.layer._map ) return {x:0,y:0,type:'unknown'};

      // ask the cluster layer to return node location
      // this will either be node lat/lng or cluster lat/lng (if part of cluster)
      let clusterFeature = this.layer.getVisibleParent(this.feature);

      let pt;
      if( clusterFeature ) {
        pt = this.layer._map.latLngToContainerPoint(clusterFeature.getLatLng());
        pt.type = 'cluster'
      } else {
        pt = this.layer._map.latLngToContainerPoint(this.feature.getLatLng());
        pt.type = 'node';
      }
      return pt;
    }

    // node is attached to external node, ask for lat/lng from
    // external node.  this lat/lng will be relative to main map but
    // will include offset for node
    let externalNode = nodeStore.getExternal(this.data.externalId);
    let pt = externalNode.getNodePoint(this);
    pt.type = 'external';

    return pt;
  }
}