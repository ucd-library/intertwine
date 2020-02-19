import { LitElement } from 'lit-element';
import render from "./app-moments-dropdown.tpl.js"

export default class AppMomentsDropdown extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      moments: { type: Array },
      selectedMoment: { type: String }
    }
  }

  constructor() {
    super();

    this.moments = APP_CONFIG.moments;

    this.render = render.bind(this);

    this._injectModel('AppStateModel');
  }

  _onAppStateUpdate(e) {
    this.selectedMoment = e.moment;
  }

  /**
   * @method _onSelectMomentInputChange
   * @description bound to input selector
   * @param {Object} moment
  */
  _onSelectMomentInputChange(moment) {
    // Triggers app state update event
    this.AppStateModel.setLocation('/map/' + moment);
  }
}

customElements.define('app-moments-dropdown', AppMomentsDropdown);
