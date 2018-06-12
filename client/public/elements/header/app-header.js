import {PolymerElement, html} from "@polymer/polymer"
import template from "./app-header.html"

export default class AppHeader extends PolymerElement {

  static get template() {
    return html([template]);
  }

  static get properties() {
    return {
      
    }
  }

}

customElements.define('app-header', AppHeader);