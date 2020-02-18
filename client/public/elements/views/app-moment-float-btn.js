import { LitElement } from 'lit-element';
import render from './app-moment-float-btn.tpl.js';

export default class AppMomentFloatBtn extends LitElement {
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

  customElements.define('app-moment-float-btn', AppMomentFloatBtn);
