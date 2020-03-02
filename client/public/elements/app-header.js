import { LitElement } from 'lit-element';
import render from "./app-header.tpl.js"

import "./views/map/app-map-info-panel"
import "./views/app-about"
import "./views/app-home"
import "./views/app-story"

export default class AppHeader extends Mixin(LitElement)
  .with(LitCorkUtils){

  static get properties() {
    return {
      baseUrl: { type: String },
      currentTopic: { type: String },
      subtitle: { type: String },
      momentTitle: { type: String }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.baseUrl = window.location.protocol + '//' + window.location.host;
    this.subtitle = '';
    this.momentTitle = '';
    
    this._injectModel('AppStateModel');
  }

  async firstUpdated() {
    let _topic = await this.AppStateModel.get();
    this.currentTopic = _topic.moment;
    this.subtitle = 'California\'s Modern Wine Network';
  }

  _onAppStateUpdate(e) {
    if ( e.location.query.name ) {
      this.subtitle = e.location.query.name;
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
