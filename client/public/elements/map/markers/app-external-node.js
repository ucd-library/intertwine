import {PolymerElement, html} from "@polymer/polymer"
import template from "./app-external-node.html"
import nodeStore from "../../../lib/stores/NodeStore"

const SIZES = {
  small : 80
}

for( var key in SIZES ) {
  SIZES[key] = {
    size : SIZES[key],
    offset : SIZES[key]/2
  }
}


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
    nodeStore.addExternal(data.id, this);

    this.setSize('small');

    this.addEventListener('click', e => console.log('click'));
  }

  connectedCallback() {
    super.connectedCallback();
    if( this.pendingRender ) {
      this.pendingRender = false;
      this.renderChildNodes();
    }
  }

  setSize(size) {
    size = SIZES[size];
    this.style.top = (-1 * size.offset-4)+'px';
    this.style.left = (-1 * size.offset-4)+'px';
    this.style.width = (size.size-4)+'px';
    this.style.left = (size.size-4)+'px';
    this.style.borderRadius = size.size+'px';
  }

  destroy() {
    nodeStore.removeExternal(this.data.id);
  }

  addNode(node) {
    this.nodes.push(node);
    this.renderChildNodes();
  }

  removeNode(node) {
    let index = this.nodes.indexOf(node);
    if( index === -1 ) return;
    this.nodes.splice(index, 1);
    this.renderChildNodes();
  }

  renderChildNodes() {
    if( !this.$ ) {
      this.pendingRender = true;
      return;
    }
    this.$.nodes.innerHTML = this.nodes.map((node, index) => {
      return `<div class="node" index="${index}"></div>`;
    });
  }

  setPosition(top, left) {
    this.top = top;
    this.left = left;

    this.style.position = 'absolute';
    this.style.top = (top-37)+'px';
    this.style.left = (left-37)+'px';
  }


  getNodePoint(node) {
    if( this.left === undefined || this.top === undefined ) {
      return {x:0,y:0};
    }

    let index = this.nodes.indexOf(node);
    if( index === -1 ) return {x: this.left, y: this.top};
    let ele = this.shadowRoot.querySelector(`.node[index="${index}"]`);
    if( !ele ) return {x: this.left, y: this.top};

    return {
      x: this.left+ele.offsetLeft-37+7, 
      y: this.top+ele.offsetTop-37+7
    };
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