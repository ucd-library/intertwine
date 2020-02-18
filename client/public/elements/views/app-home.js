import { LitElement } from 'lit-element';
import render from './app-home.tpl.js';

export default class AppHome extends LitElement {
  static get properties() {
    return {
      active: { type: Boolean }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;
  }
}

customElements.define('app-home', AppHome);
