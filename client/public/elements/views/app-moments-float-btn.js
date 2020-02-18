import { LitElement } from 'lit-element';
import render from './app-moments-float-btn.tpl.js';

export default class AppMomentsFloatBtn extends Mixin(LitElement)
  .with(LitCorkUtils) {
    static get properties() {
      return {

      }
    }

    constructor() {
      super();
      this.render = render.bind(this);
    }
  }

  customElements.define('app-moments-float-btn', AppMomentsFloatBtn);
