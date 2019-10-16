import { LitElement } from 'lit-element';
import render from "./app-map-info-panel.tpl.js"

import "@polymer/iron-icons"

export default class AppMapInfoPanel extends LitElement {

  static get properties() {
    return {
      open : {
        type: Boolean,
        reflect: true
      }
    }
  }

  constructor() {
    super();
    this.open = true;
    this.render = render.bind(this);
  }


  /**
   * @method _onToggleKeyUp
   * @description bound to toggle button key-up event
   */
  _onToggleKeyUp(e) {
    if( e.which !== 13 ) return;
    this._fireToggleEvent();
  }

  /**
   * @method _fireToggleEvent
   * @description fire the toggle event.  This is called from
   * _onToggleKeyUp and bound to click event on toggle button
   */
  _fireToggleEvent() {
    this.dispatchEvent(new CustomEvent('toggle'));
  }

}

customElements.define('app-map-info-panel', AppMapInfoPanel);
