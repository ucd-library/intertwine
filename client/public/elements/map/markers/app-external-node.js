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

  constructor(data, layer, map) {
    super();
    this.layer = layer;
    this.data = data;
    this.label = data.properties.name;
    this.rendered = false;
    this.latLng = [data.geometry.coordinates[1], data.geometry.coordinates[0]];
    this.map = map;
    this.labels = {
      mouseover : [],
      linkselected : [],
      selected : []
    }

    // register external node
    nodeStore.addExternal(data.properties.id, this);

    this.setSize('small');

    this.addEventListener('click',() => this._zoomTo());
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
    nodeStore.removeExternal(this.data.properties.id);
  }

  addNode(node) {
    if( this.nodes.indexOf(node) > -1 ) return;
    this.nodes.push(node);
    this.renderChildNodes();
  }

  removeNode(node) {
    let index = this.nodes.indexOf(node);
    if( index === -1 ) return;
    this.nodes.splice(index, 1);
    this.renderChildNodes();
  }

  addLabel(node, type) {
    this.removeLabel(node);
    this.labels[type].unshift(node);
    this.renderLabel();
  }

  removeLabel(node, type, norender = false) {
    if( type ) {
      this._removeLabel(node, type);
    } else {
      for( var type in this.labels ) {
        this._removeLabel(node, type);
      }
    }

    if( !norender ) this.renderLabel();
  }

  _removeLabel(node, type) {
    let index = this.labels[type].indexOf(node);
    if( index > -1 ) {
      this.labels[type].splice(index, 1);
      this._removeLabel(node, type);
    }
  }

  _zoomTo() {
    let zoom = this.map.map.getZoom();    
    let max = this.nodes[0].latLng;
    let min = max.slice(0);

    // console.log(JSON.stringify(min), JSON.stringify(max));
    for( let i = 1; i < this.nodes.length; i++ ) {
      let ll = this.nodes[i].latLng;
      // console.log(ll);
      if( ll[0] < min[0] ) min[0] = ll[0];
      if( ll[1] < min[1] ) min[1] = ll[1];
      if( ll[0] > max[0] ) max[0] = ll[0];
      if( ll[1] > max[1] ) max[1] = ll[1];
    }
    // console.log(JSON.stringify(min), JSON.stringify(max));
    let x = this.map.maskArea.x - this.map.maskArea.r;
    let y = this.map.maskArea.y - this.map.maskArea.r;

    // console.log(x,y);
    this.map.map.fitBounds(
      [min, max], 
      {
        maxZoom: zoom,
        padding: [x, y]
      }
    );
  }

  renderLabel() {
    if( !this.$ ) return;

    // this._debugLabels();

    if( this.labels.mouseover.length > 0 ) {
      this.$.selectedLabel.classList.add('mouseover');
      return this.$.selectedLabel.innerHTML = this.labels.mouseover[0].data.properties.title;
    }

    this.$.selectedLabel.classList.remove('mouseover');
    if( this.labels.linkselected.length > 0 ) {
      return this.$.selectedLabel.innerHTML = this.labels.linkselected[0].data.properties.title;
    }
    if( this.labels.selected.length > 0 ) {
      return this.$.selectedLabel.innerHTML = this.labels.selected[0].data.properties.title;
    }
    this.$.selectedLabel.innerHTML = '';
  }

  _debugLabels() {
    if( this.label !== 'California' ) return;
    let t = {};
    for( let key in this.labels ) {
      t[key] = this.labels[key].map(i => i.data.properties.title);
    }
    console.log(this.label, JSON.stringify(t, '  ', '  '));
  }

  renderChildNodes() {
    if( !this.$ ) {
      this.pendingRender = true;
      return;
    }

    if( this.nodes.length > 6 ) {
      this.clusterMode = true;
      this.$.nodes.innerHTML = '';
      this.$.cluster.innerHTML = this.nodes.length;
      this.$.clusterRoot.style.display = 'inline-block';
      return;
    }

    this.clusterMode = false;
    this.$.clusterRoot.style.display = 'none';
    this.$.nodes.innerHTML = this.nodes.map((node, index) => {
      let color = APP_STYLE.COLOR_BY_TYPE[node.data.properties.type.toLowerCase()];
      return `<div class="node" index="${index}" style="background-color:${color}"></div>`;
    }).join('');
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

    if( this.clusterMode ) {
      return {
        x: this.offsetLeft+this.$.clusterRoot.offsetLeft+20, 
        y: this.offsetTop+this.$.clusterRoot.offsetTop+20,
        radius: 20
      };
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