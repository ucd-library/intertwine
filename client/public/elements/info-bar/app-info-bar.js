import {PolymerElement, html} from "@polymer/polymer"
import template from "./app-info-bar.html"

export default class AppInfoBar extends PolymerElement {

  static get template() {
    return html([template]);
  }

  static get properties() {
    return {
      
    }
  }

}

customElements.define('app-info-bar', AppInfoBar);