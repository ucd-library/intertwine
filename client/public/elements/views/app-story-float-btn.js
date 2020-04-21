import { LitElement } from 'lit-element';
import render from './app-story-float-btn.tpl.js';

export default class AppStoryFloatBtn extends LitElement {
  static get properties() {
    return {
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define('app-story-float-btn', AppStoryFloatBtn);
