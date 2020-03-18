import { LitElement } from 'lit-element';
import render from "./app-view-map.tpl.js"

import "./app-leaflet-map"
import "./app-map-info-panel"

/**
 * Update the css class of the cluster icon
 * 1. When node is clicked
 * https://github.com/ucd-library/intertwine/blob/dev/client/public/elements/views/map/app-leaflet-map.js#L501
 * 2. Icon creation
 * https://github.com/ucd-library/intertwine/blob/dev/client/public/elements/views/map/app-leaflet-map.js#L529
 * Custom event on node click has a reference to the marker
 * Toggle the class on/off when a user clicks elsewhere
 * Set a window click-listener
 * 
 * "so you have to wire up to the window and toggle class off.  To do this correctly, 
 * you must prevent the initial event from bubbling up to the window when a node is clicked on.  
 * otherwise you will turn the node on, the click event will bubble to the window, then your window handler 
 * will toggle the node off."
 * the final issue you may face, I think the event object you get from leaflet is a wrapper.  
 * you may need to look at that object to find the actual browser click event, so you can cancel propagation
 * ttps://leafletjs.com/reference-1.6.0.html#mouseevent-originalevent
 * e.originalEvent.stopPropagation()
*/

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
    this.appState = e;

    this.moment   = e.moment;
    this.selected = e.selectedNode;

    let state = await this.MomentModel.get(this.moment);

    if ( state.state === 'error' ) return;

    this.data = state.payload.graph;
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

    if( this.appState.selectedNode ) this.mapEle.renderSelectedState(this.appState);
    else this.mapEle.renderSelectedState();
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
