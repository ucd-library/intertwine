import { LitElement } from 'lit-element';
import render from "./app-header.tpl.js"

import "./views/map/app-map-info-panel"
import "./views/app-about"
import "./views/app-home"
import "./views/app-moment"

export default class AppHeader extends Mixin(LitElement)
  .with(LitCorkUtils){

  static get properties() {
    return {
      baseUrl: { type: String },
      currentTopic: { type: String }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.baseUrl = window.location.protocol + '//' + window.location.host;

    this._injectModel('MomentModel', 'AppStateModel');
  }

  async firstUpdated() {
    let _topic = await this.AppStateModel.get();
    this.currentTopic = _topic.moment;
  }

  /**
   * @method _onAboutClick
   * @description ...
   * @param {Object} e
  */
  _onAboutClick() {
    this.AppStateModel.setLocation('/about/');
  }
}

customElements.define('app-header', AppHeader);
