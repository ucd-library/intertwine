import { LitElement } from 'lit-element';
import render from "./app-map-info-panel.tpl.js"
import {markdown} from "markdown"

import "@polymer/iron-icons"

export default class AppMapInfoPanel extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      open : {
        type: Boolean,
        reflect: true
      },
      data : {type : Object},
      date : {type : String},
      connections : {type: Array}
    }
  }

  constructor() {
    super();
    
    this.open = true;
    this.data = {};
    this.date = '';
    this.connections = [];

    this.render = render.bind(this);

    this._injectModel('AppStateModel');
  }

  _onAppStateUpdate(e) {
    console.log(e);
  }

  firstUpdated() {
    this.descriptionEle = this.shadowRoot.querySelector('#description');
  }

  renderData(data) {
    if( data ) this.data = data;

    this.descriptionEle.innerHTML = markdown.toHTML(this.data.description || '');
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
