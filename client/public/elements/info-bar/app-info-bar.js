import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-info-bar.html"

export default class AppInfoBar extends PolymerElement {

  static get template() {
    return template;
  }

  static get properties() {
    return {
      
    }
  }

}

customElements.define('app-info-bar', AppInfoBar);