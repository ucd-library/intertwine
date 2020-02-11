import { LitElement } from 'lit-element';
import render from "./app-moments-dropdown.tpl.js"

export default class AppMomentsDropdown extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      mocks: { type: Array }
    }
  }

  constructor() {
    super();

    this.mocks = APP_CONFIG.mocks;

    this.render = render.bind(this);

    this._injectModel('AppStateModel', 'MomentModel');
  }

  _onAppStateUpdate(e) {
    //console.log(e)
  }

  async firstUpdated() {
    this.momentSelectEle = this.shadowRoot.querySelector('#moments');

    let topic = await this.AppStateModel.get();

    for ( let i = 0; i < this.momentSelectEle.options.length; i++ ) {
      if ( this.momentSelectEle.options[i].value === topic.moment ) {
        this.momentSelectEle.selectedIndex = i;
      };
    }
  }

  async updated(changedProperties) {
    if ( changedProperties.type === 'change' ) {
      // Clear the store BEFORE reloading it or it loads them both in at the same time
      this.MomentModel.store.data = new Object();

      // Get the new moment (string)
      this.selectedIndex = changedProperties.path[0].options.selectedIndex;
      this.selected = this.momentSelectEle.options[this.selectedIndex].value;

      // Pass it to the MomentModel
      let topic = await this.MomentModel.get(this.selected);
      //console.log(topic)
      this.AppStateModel.set(topic);
    }
  }
}

customElements.define('app-moments-dropdown', AppMomentsDropdown);
