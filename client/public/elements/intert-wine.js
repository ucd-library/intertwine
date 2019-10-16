import { LitElement } from 'lit-element';
import render from "./intert-wine.tpl.js"


export default class IntertWine extends LitElement {

  static get properties() {
    return {
      
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('intert-wine', IntertWine);
