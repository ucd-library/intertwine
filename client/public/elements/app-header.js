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
      jsonData: { type: Object }
    }
  }

  constructor() {
    super();
    this.baseUrl = window.location.protocol + '//' + window.location.host;
    this.subtitle = '';

    this.jsonData = jsonData;

    this.render = render.bind(this);

    this._injectModel('AppStateModel', 'MomentModel');
  }

  _onMomentGraphUpdate(e) {
    if ( e.state !== 'loaded' ) return;
    let payload = e.payload;
    this._setSubtitle(payload.graph.story);
  }

  _onAppStateUpdate(e) {  
    if ( e.page === 'home' || e.page === 'about' ) {
      this.subtitle = 'California\'s Modern Wine Network';
    } else {
      this.moment = e.moment;
      this._setSubtitle();
    }
  }

  _setSubtitle(data) {
    if ( !data && this.jsonData.moments[this.moment] ) { // temp while using mock data
      this.subtitle = this.jsonData.moments[this.moment].title;
      return;
    }

    if ( data !== undefined && Object.keys(data).length > 0 ) {
      this.subtitle = data.entrypoint.headline;
    };
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
