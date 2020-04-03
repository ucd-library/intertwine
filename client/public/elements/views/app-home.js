import { LitElement } from 'lit-element';
import render from './app-home.tpl.js';

// TODO: This is temporary and can be replaced once we have a live source for the data
let jsonData = require('../../../../mock/story_json.json');

export default class AppHome extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      active: { type: Boolean },
      moments: { type: Array },
      moment: { type: String }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;

    this.moments  = [];
    this.moment   = '';

    this.loadMoments();

    this._injectModel('AppStateModel', 'MomentModel');
  } 

  /**
   * A lot of this functionality can be streamlined/removed once the chardonnay/jop stories are completed
  */
  loadMoments(data) {
    if ( !data ) {
      for (let key in APP_CONFIG.moments ) {
        if ( jsonData.moments[APP_CONFIG.moments[key]] === undefined ) {
          this.moment = APP_CONFIG.moments[key];
        } else {
          this.moments.push(jsonData.moments[APP_CONFIG.moments[key]]);
        }
      }  
    } else {
      data.entrypoint.thumbnail = APP_CONFIG.endpoint + '/' + this.moment + '/' + data.entrypoint.thumbnail;
      this.moments.push(data);
      this.requestUpdate();
    }
  }

  async _onAppStateUpdate(e) {
    let state = await this.MomentModel.get(this.moment);
    this.loadMoments(state.payload.graph.story);
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
