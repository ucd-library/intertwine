import {PolymerElement, html} from "@polymer/polymer"
import template from "./inter-wine-app.html"

import "../lib"

// styles
import "./styles/shared-styles"
import "./styles/style-properties"

import "./map/app-map"
import "./header/app-header"
import "./info-bar/app-info-bar"

export default class InterWineApp extends PolymerElement {

  static get template() {
    return html([template]);
  }

  static get properties() {
    return {
      
    }
  }

}

customElements.define('inter-wine-app', InterWineApp);