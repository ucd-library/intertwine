import { LitElement } from 'lit-element';
import render from './app-moment.tpl.js'

import './moments/app-moment-chardonnay';
import './moments/app-moment-jop';

export default class AppMoment extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      active: { type: Boolean },
      selectedMoment: { type: String }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;

    this._injectModel('AppStateModel');
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update events
   *
   * @param {Object} e
   */
  _onAppStateUpdate(e) {
    this.selectedMoment = e.moment;
  }
}

customElements.define('app-moment', AppMoment);
