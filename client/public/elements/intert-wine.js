import { LitElement } from 'lit-element';
import render from "./intert-wine.tpl.js"

// global imports
import "./styles/style-properties"
import "@ucd-lib/cork-app-utils"
import models from "../src"

// Uncomment out for debugging
window.APP_MODELS = models;

// npm imports
import "@polymer/iron-pages"

// local imports
import "./intert-wine-icons"
import "./app-header"
import "./views/map/app-view-map"
import "./views/app-home"
import "./views/app-story"

export default class IntertWine extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      view : { type: String },
      appRoutes : { type: Array },
      offline : { type: Boolean }
    }
  }

  constructor() {
    super();

    this.offline = false;
    this.view = '';
    this.appRoutes = APP_CONFIG.appRoutes;

    this.render = render.bind(this);
    
    this._injectModel('AppStateModel');
  }

  _onAppStateUpdate(e) {
    this.view = e.page;
  }

}

customElements.define('intert-wine', IntertWine);
