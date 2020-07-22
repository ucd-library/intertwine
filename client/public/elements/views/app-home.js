import { LitElement } from 'lit-element';
import render from './app-home.tpl.js';

export default class AppHome extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      moments: { type: Array },
      moment: { type: String }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.moments  = [];
    this.moment   = '';

    this.loadMoments();

    this._injectModel('AppStateModel', 'MomentModel');
  } 

  loadMoments(data) {
    if ( !data ) {
      this.moment = APP_CONFIG.moments[0];
    } else {
      this.moments.push(data);
      this.requestUpdate();
    }
  }

  async firstUpdated(e) {
    let state, data;

    for (let i=0; i < APP_CONFIG.moments.length; i++) {
      state = await this.MomentModel.get(APP_CONFIG.moments[i]); 
      
      if ( state.error ) continue;

      data = state.payload.graph.story;

      if ( !data.entrypoint.thumbnail ) {
        data.entrypoint.thumbnail = APP_CONFIG.endpoint + '/' + APP_CONFIG.moments[i] + '/thumbnail.jpg';
      } else {
        data.entrypoint.thumbnail = APP_CONFIG.endpoint + '/' + APP_CONFIG.moments[i] + '/' + data.entrypoint.thumbnail
      }

      this.loadMoments(state.payload.graph.story);
    }
  }

  /**
   * @method _onReadStoryClick
   * @description send the user to the correct moment overview page
   * @param {String} moment moment name
   */
  _onReadStoryClick(moment) {
    this.AppStateModel.setLocation('/story/' + moment);
  }

  /**
   * @method _onExploreMapClick
   * @description send the user to the map page to view their selected moment on the map
   * @param {String} moment moment name
   */
  _onExploreMapClick(moment) {
    this.AppStateModel.setLocation('/map/' + moment);
  }

}

customElements.define('app-home', AppHome);
