import { LitElement } from 'lit-element';
import render from "./app-about.tpl.js"

export default class AppAbout extends LitElement {
    static get properties() {
      return { }
    }

    constructor() {
      super();
      this.render = render.bind(this);
    }
  }

  customElements.define('app-about', AppAbout);
