import { LitElement } from 'lit-element';
import render from './app-moments.tpl.js';

export default class AppMoments extends LitElement {
  static get properties() {
    return {
      active: { type: Boolean },
      moments: { type: Array }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;
  }
}

customElements.define('app-moments', AppMoments);
