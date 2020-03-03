import { LitElement } from 'lit-element';
import render from './app-home.tpl.js';

// TODO: This is temporary and can be replaced once we have a live source for the data
let jsonData = require('../../../../mock/story_json.json');

export default class AppHome extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      active: { type: Boolean },
      moments: { type: Array }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;
    this.moments = [];

    this.loadMoments();

    this._injectModel('AppStateModel', 'MomentModel');
  }

  loadMoments() {
    for ( let key in jsonData.moments ) {
      this.moments.push(jsonData.moments[key]);
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
