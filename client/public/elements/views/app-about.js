import { LitElement } from 'lit-element';
import render from "./app-about.tpl.js"

export default class AppAbout extends LitElement {
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

  customElements.define('app-about', AppAbout);
