import { LitElement } from 'lit-element';
import render from './app-home.tpl.js';

export default class AppHome extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      active: { type: Boolean }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;

    this._injectModel('AppStateModel');
  }

  /**
   * @method _onReadStoryClick
   * @description send the user to the correct moment overview page
   * @param {String} moment moment name
   */
  _onReadStoryClick(moment) {
    this.AppStateModel.setLocation('/moment/' + moment);
  }

  /**
   * @method _onExploreMapClick
   * @description send the user to the map page to view their selected moment
   * @param {String} moment moment name
   */
  _onExploreMapClick(moment) {
    this.AppStateModel.setLocation('/map/' + moment);
  }

}

customElements.define('app-home', AppHome);
