import { LitElement } from 'lit-element';
import render from "./app-header.tpl.js"

import "./views/map/app-map-info-panel"
import "./views/app-about"
import "./views/app-home"
import "./views/app-story"

// TODO: This is temporary and can be replaced once we have a live source for the data
let jsonData = require('../../../mock/story_json.json');

export default class AppHeader extends Mixin(LitElement)
  .with(LitCorkUtils){

  static get properties() {
    return {
      baseUrl: { type: String },
      subtitle: { type: String },
      jsonData: { type: Object },
      offline: { type: Boolean }
    }
  }

  constructor() {
    super();
    this.baseUrl = window.location.protocol + '//' + window.location.host;
    this.subtitle = '';
    this.offline = false;

    this.jsonData = jsonData;

    this.render = render.bind(this);

    this._injectModel('AppStateModel', 'MomentModel');
  }

  async _onAppStateUpdate(e) {
    let state = await this.MomentModel.get(e.moment);

    if ( state.state === 'error' ) this.offline = true;

    if ( state.state === 'error' && e.page !== 'about' && e.page !== 'home' ) {      
      this.AppStateModel.setLocation('/'); // redirect user to the home page
    }

    if ( e.page === 'home' || e.page === 'about' ) {
      this.subtitle = 'California\'s Modern Wine Network';
    } else {
      for ( let key in this.jsonData.moments ) {
        if ( e.moment === key) {
          this.subtitle = this.jsonData.moments[key].title;
        }
      }
    }
  }

  /**
   * @method _onAboutClick
   * @description send the user to the About page
   * @param {*} e
  */
  _onAboutClick() {
    this.AppStateModel.setLocation('/about/');
  }
}

customElements.define('app-header', AppHeader);
