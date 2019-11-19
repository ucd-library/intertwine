import { LitElement } from 'lit-element';
import render from "./app-header.tpl.js"

import "./views/map/app-map-info-panel"
import { isArray } from 'util';

export default class AppHeader extends Mixin(LitElement)
  .with(LitCorkUtils){

  static get properties() {
    return {
      currentTopic: { type: String }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this._injectModel('MomentModel', 'AppStateModel');
  }

  async firstUpdated() {
    let _topic = await this.AppStateModel.get();
    this.currentTopic = _topic.moment;
  }

  /**
   * @method _onMomentClick
   * @description ...
   * @param {Object} e
  */
  _onMomentsClick() {
    this.AppStateModel.setLocation('/map/' + this.currentTopic);
  }

  /**
   * @method _onAboutClick
   * @description ...
   * @param {Object} e
  */
 _onAboutClick() {
  console.log("_onAboutClick");
}
}

customElements.define('app-header', AppHeader);
