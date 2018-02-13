import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./inter-wine-app.html"

import "../lib"
import "./map/app-map"

export default class InterWineApp extends PolymerElement {

  static get template() {
    return template;
  }

  static get properties() {
    return {
      
    }
  }

}

customElements.define('inter-wine-app', InterWineApp);