import {PolymerElement, html} from "@polymer/polymer"
import template from "./app-info-bar.html"

export default class AppInfoBar extends Mixin(PolymerElement)
  .with(EventInterface) {

  static get template() {
    return html([template]);
  }

  static get properties() {
    return {
      selected : {
        type : Object,
        value : null
      },
      title : {
        type : String,
        value : ''
      },
      place : {
        type : String,
        value : ''
      },
      date : {
        type : String,
        value : ''
      }
    }
  }

  constructor() {
    super();
    this._injectModel('GraphModel');
  }

  _onUnselectNode(e) {
    this.selected = null;
    this.title = '';
    this.place = '';
    this.description = '';
    this.category = '';
    this.date = 'unknown';
  }

  _onSelectedNodeUpdate(e) {
    this.selected = e;
    let props = e.data.properties ? e.data.properties : e.data;

    this.title = props.title || '';
    this.place = props.location || '';
    this.description = props.description || '';
    this.category = props.type || '';
    this.$.category.style.color = APP_STYLE.COLOR_BY_TYPE[props.type.toLowerCase()];
    this.date = props.date || 'unknown';
  }


}

customElements.define('app-info-bar', AppInfoBar);