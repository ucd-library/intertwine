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
  }

  _onSelectedNodeUpdate(e) {
    this.selected = e;
    let props = e.data.properties;

    this.title = props.title || '';
    this.place = props.location || '';
    this.description = props.description || '';
    this.category = props.type || '';
    this.$.category.style.color = APP_STYLE.COLOR_BY_TYPE[props.type.toLowerCase()];
  }


}

customElements.define('app-info-bar', AppInfoBar);