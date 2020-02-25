import { LitElement } from 'lit-element';
import render from './app-story-float-btn.tpl.js';

export default class AppStoryFloatBtn extends LitElement {
  static get properties() {
    return {
      active: {
        type: Boolean
      }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;
  }
}

customElements.define('app-story-float-btn', AppStoryFloatBtn);
