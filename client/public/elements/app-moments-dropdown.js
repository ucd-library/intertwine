import { LitElement } from 'lit-element';
import render from "./app-moments-dropdown.tpl.js"

export default class AppMomentsDropdown extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      moments: { type: Array },
      topic: { type: String }
    }
  }

  constructor() {
    super();

    this.moments = APP_CONFIG.moments;

    this.render = render.bind(this);

    this._injectModel('AppStateModel', 'MomentModel');
  }

  _onAppStateUpdate(e) {
    //console.log(e)
  }

  async firstUpdated() {
    this.momentSelectEle = this.shadowRoot.querySelector('#moments');  

    //let topic = await this.AppStateModel.get();

    for ( let i = 0; i < this.momentSelectEle.options.length; i++ ) {
      if ( this.momentSelectEle.selectedIndex === this.momentSelectEle.options[i].index ) {
        this.topic = this.momentSelectEle.options[i].value;       
        this.AppStateModel.set({selectedMoment:this.topic});
      }

      /*
      if ( this.momentSelectEle.selectedIndex = this.momentSelectEle.options[i] ) {
        console.log(this.momentSelectEle.options[i].value);
      }
      if ( this.momentSelectEle.options[i].value === topic.moment ) {
        this.momentSelectEle.selectedIndex = i;
      };
      */
    }
  }

  _onSelectMomentChange(topic) {
    this.AppStateModel.set({selectedMoment: topic});
  }
}

customElements.define('app-moments-dropdown', AppMomentsDropdown);
