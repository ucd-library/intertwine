import { LitElement } from 'lit-element';
import render from "./intert-wine.tpl.js"

// global imports
import "./styles/style-properties"
import "@ucd-lib/cork-app-utils"
import "../src"

// npm imports
import "@polymer/iron-pages"

// local imports
import "./app-header"
import "./views/map/app-view-map"

export default class IntertWine extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      view : {type: String}
    }
  }

  constructor() {
    super();

    this.view = 'map';
    this.render = render.bind(this);

    this._injectModel('AppStateModel');
  }

  _onAppStateUpdate(e) {
    this.view = e.page;
  }


}

customElements.define('intert-wine', IntertWine);
