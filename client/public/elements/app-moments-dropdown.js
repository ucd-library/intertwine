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

    this._injectModel('AppStateModel', 'MomentModel');
  }

  _onAppStateUpdate(e) {
    this.selectedMoment = e.moment;
    console.log('this.selectedMoment: ', this.selectedMoment);
  }

  firstUpdated() {
    this.momentSelectEle = this.shadowRoot.querySelector('#moments');
  }

  _onSelectMomentChange(moment) {
    this.AppStateModel.set({selectedMoment: moment});
  }
}

customElements.define('app-moments-dropdown', AppMomentsDropdown);
