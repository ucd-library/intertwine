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
    this.map = L.map(this.shadowRoot.querySelector('#map')).setView([51.505, -0.09], 4);
    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    
    this.clusters = L.markerClusterGroup({
      animate: false,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: false,
      removeOutsideVisibleBounds: false
    });
    this.clusters.on('clusterclick', e => this.onClusterClicked(e));

    this.map.addLayer(this.clusters);
    this.map.on('zoomend', () => this.updateLinks());
  }

  onClusterClicked(e) {
    let event = new CustomEvent('cluster-click', {detail : {
      ids : e.layer.getAllChildMarkers().map(l => l.inertWineId)
    }});
    this.dispatchEvent(event);
  }

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
      let layer = L.circle(data.nodes[id].coordinates, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
      });
      layer.on('click', e => this.onNodeClicked(e));
      layer.inertWineId = id;
      this.nodeLayers[id] = layer;
      this.clusters.addLayer(layer);
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
      let src = this.getMarkerLatLng(item.src);
      let dst = this.getMarkerLatLng(item.dst);

      let lid = src.lat+'-'+src.lng+'-'+dst.lat+'-'+dst.lng;
      if( this.linkLayers[lid] ) continue;
      this.linkLayers[lid] = L.polyline([src, dst], {
            color: 'red',
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
