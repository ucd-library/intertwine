import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-header.html"

export default class AppHeader extends PolymerElement {

  static get template() {
    return template;
  }

  static get properties() {
    return {
      
    }
  }

}

customElements.define('app-header', AppHeader);