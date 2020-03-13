import { LitElement } from 'lit-element';
import render from "./app-view-map.tpl.js"

import "./app-leaflet-map"
import "./app-map-info-panel"

export default class AppViewMap extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      visible: {
        type: Boolean
      },
      infoPanelOpen: {
        type: Boolean
      }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.infoPanelOpen = true;

    this._injectModel('AppStateModel', 'MomentModel');
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
  async _onAppStateUpdate(e) {
    if ( e.page !== 'map' ) return;

    this.moment   = e.moment;
    this.selected = e.selectedNode;

    let state = await this.MomentModel.get(this.moment);

    this.mapEle.setData(state.payload.graph);

    if( e.selectedNode ) this.mapEle.renderSelectedState(e);
    else this.mapEle.renderSelectedState();
  }

  /**
   * @method _onMomentGraphUpdate
   * @description bound to moment-graph-update events from the MomentModel
   *
   * @param {*} e
   */
  _onMomentGraphUpdate(e) {
    if( e.state !== 'loaded' ) return;
    this.data = e.payload.graph;
    this.mapEle.setData(e.payload.graph);
  }

  /**
   * @method _onNodeClick
   * @description bound to app-leaflet-map node-click events
   *
   * @param {Object} e
   */
  _onNodeClick(e) {
    let node = this.data.nodes[e.detail.id];
    this.AppStateModel.setLocation('/map/'+this.moment+'/'+node.type+'/'+node['@id']);
  }

  /**
   * @method _onClusterClick
   * @description bound to app-leaflet-map cluster-click events
   *
   * @param {Object} e
   */
  _onClusterClick(e) {
    this.AppStateModel.setLocation('/map/'+this.moment+'/cluster/'+
      encodeURI(e.detail.latLng.join(','))+'/'+e.detail.zoom
    );
  }

  /**
   * @method _onSelectedClusterIds
   * @description bound to app-leaflet-map selected-cluster-ids event.  This is fired
   * when a cluster zoom/latlng is set.  After which the map makes sure it is rendered
   * then looks up the closest rendered cluster to the latlng at the zoom level.  Finally
   * the map fires the selected-cluster-ids containing the ids inside the cluster
   */
  _onSelectedClusterIds(e) {
    this.AppStateModel.setSelectedClusterIds(e.detail);
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
