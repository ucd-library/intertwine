import { LitElement } from 'lit-element';
import render from "./app-leaflet-map.tpl.js"


export default class AppLeafletMap extends LitElement {

  static get properties() {
    return {
      active : {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

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
    this.map = L.map(this.shadowRoot.querySelector('#map')).setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
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

    // if( xOffset ) {
    //   let cll = this.map.getCenter();
    //   let cxy = this.map.latLngToContainerPoint(cll);
    //   cxy = L.point(cxy.x+xOffset, cxy.y);
    //   cll = this.map.containerPointToLatLng(cxy);
    //   this.map.setView(cll, this.map.getZoom());
    // }

    this.map.invalidateSize({pan: false});
    
    console.log('invalidate')
  }

}

customElements.define('app-leaflet-map', AppLeafletMap);
