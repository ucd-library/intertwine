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

    this.style.position = 'absolute';
    this.style.top = (top-37)+'px';
    this.style.left = (left-37)+'px';

    // if( !this.layer._map ) return;
    
    // this.initMapPos = this.layer._map._mapPane._leaflet_pos;
    // this.latLng = this.layer._map.containerPointToLatLng([left, top]);
  }

  updateLayerPoint() {
    // if( this.top === undefined || this.left === undefined ) return;
    // if( !this.initMapPos ) return;

    // let pt = this.layer._map._mapPane._leaflet_pos;
    // let diffX = this.initMapPos.x - pt.x;
    // let diffY = this.initMapPos.y - pt.y;

    // this.style.position = 'absolute';
    // this.style.left = (this.left+diffX-37)+'px';
    // this.style.top = (this.top+diffY-37)+'px';

    // this.latLng = this.layer._map.containerPointToLatLng([this.left+diffX,this.top+diffY]);
  }

  getNodePoint(node) {
    // TODO: Add diff 
    return {x:this.left, y:this.top};
  }

  get visible() {
    return (this.nodes.length > 0);
  }

  render() {
    if( !this.visible ) {
      if( this.rendered === false ) return;
      this.layer.removeChild(this);
      this.rendered = false;
      return;
    }

    // this.style.top = (fake.y-37)+'px';
    // this.style.left = (fake.x-37)+'px';

    if( this.rendered !== true ) {
      this.layer.appendChild(this);
      this.rendered = true;
    }
  }

}

customElements.define('app-external-node', AppExternalNode);