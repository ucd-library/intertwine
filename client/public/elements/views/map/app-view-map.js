import { LitElement } from 'lit-element';
import render from "./app-view-map.tpl.js"

import "./app-leaflet-map"
import "./app-map-info-panel"

export default class AppViewMap extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      visible : {type: Boolean},
      infoPanelOpen : {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.infoPanelOpen = true;
    this.firstAppStateUpdate = true;

    this._injectModel('MomentModel', 'AppStateModel');
  }

  firstUpdated() {
    this.mapEle = this.shadowRoot.querySelector('#map');
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update events
   * 
   * @param {Object} e 
   */
  _onAppStateUpdate(e) {
    if( this.firstAppStateUpdate ) {
      this.firstAppStateUpdate = false;

      if( e.selected && e.selected.type === 'cluster' ) {
        this.mapEle.map.setView(e.selected.latlng, e.selected.zoom);
      }
    }
  }

  /**
   * @method _onGraphUpdate
   * @description bound to graph-update events from the MomentModel
   * 
   * @param {*} e 
   */
  _onGraphUpdate(e) {
    if( e.state !== 'loaded' ) return;
    this.data = e.payload;
    this.mapEle.setData(e.payload);
  }

  /**
   * @method _onNodeClick
   * @description bound to app-leaflet-map node-click events
   * 
   * @param {Object} e 
   */
  _onNodeClick(e) {
    let node = this.data.nodes[e.detail.id];
    this.AppStateModel.setLocation('/map/'+node.type+'/'+node.id);
  }

  /**
   * @method _onClusterClick
   * @description bound to app-leaflet-map cluster-click events
   * 
   * @param {Object} e 
   */
  _onClusterClick(e) {
    this.AppStateModel.setLocation('/map/cluster/'+
      encodeURI(e.detail.latLng.join(','))+'/'+
      e.detail.zoom+'/'+
      encodeURI(e.detail.ids.join(','))
    );
  }

  toggleInfoPanel() {
    this.infoPanelOpen = !this.infoPanelOpen;
    this.redrawMapAfterAnimation();
  }

  openInfoPanel() {
    this.infoPanelOpen = true;
    this.redrawMapAfterAnimation();
  }

  closeInfoPanel() {
    this.infoPanelOpen = false;
    this.redrawMapAfterAnimation();
  }

  redrawMapAfterAnimation() {
    let offset = this.infoPanelOpen ? 350 : -350;
    setTimeout(() => {
      this.mapEle.redrawNow(offset);
    }, 200);
  }

}

customElements.define('app-view-map', AppViewMap);
