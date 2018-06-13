import {PolymerElement, html} from "@polymer/polymer"
import template from "./app-external-node.html"
import nodeManager from "./NodeManager"

export default class AppExternalNode extends PolymerElement {

  static get template() {
    return html([template]);
  }

  static get properties() {
    return {
      label : {
        type : String,
        value : ''
      },
      nodes : {
        type : Array,
        value : () => []
      }
    }
  }

  constructor(data, layer) {
    super();

    this.layer = layer;
    this.data = data;
    this.label = data.label;
    this.rendered = false;
    this.latLng = [data.lat, data.lng];

    // register external node
    nodeManager.addExternal(data.id, this);

    this.addEventListener('click', e => console.log('click'));
  }

  destroy() {
    nodeManager.removeExternal(this.data.id);
  }

  addNode(node) {
    this.nodes.push(node);
  }

  removeNode(node) {
    let index = this.nodes.indexOf(node);
    if( index === -1 ) return;
    this.nodes.splice(index, 1);
  }

  setPosition(top, left) {
    this.top = top;
    this.left = left;
    this.style.top = top+'px';
    this.style.left = left+'px';

    if( !this.layer._map ) return;
    this.latLng = this.layer._map.containerPointToLatLng([left, top]);
  }

  getNodeLatLng(node) {
    // TODO: Add diff 
    return this.latLng;
  }

  get visible() {
    return (this.nodes.length > 0);
  }

  render() {
    if( !this.visible ) {
      if( this.rendered === false ) return;
      this.layer.removeMarker(this);
      this.rendered = false;
      return;
    }

    // this.style.top = (fake.y-37)+'px';
    // this.style.left = (fake.x-37)+'px';

    if( this.rendered !== true ) {
      this.layer.addMarker(this);
      this.rendered = true;
    }
  }

}

customElements.define('app-external-node', AppExternalNode);