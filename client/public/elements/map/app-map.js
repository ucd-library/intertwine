import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-map.html"

import "leaflet/dist/leaflet"
import leafletCss from "leaflet/dist/leaflet.css"
// import "leaflet-canvas-geojson/src/layer"
import "./MaskLayer"
import MapNode from "./MapNode"
import MapLink from "./MapLink"

import GraphInterface from "../interfaces/GraphInterface"

export default class AppMap extends Mixin(PolymerElement)
  .with(EventInterface, GraphInterface) {

  static get template() {
    return template+`<style>${leafletCss}</style>`;
  }

  static get properties() {
    return {
      
    }
  }

  ready() {
    super.ready();

    this.graphData = this._getGraph();
    
    this.map = L.map(this.$.map).setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);


    this._createGeoJson();
    
    this.maskLayer = new L.MaskLayer({});
    this.maskLayer.redraw = (canvas, ctx) => this.renderMask(canvas, ctx);
    this.maskLayer.addTo(this.map);


    this.maskLayer._redraw();

    // this.graphData.nodes.forEach(node => this.canvasLayer.addCanvasFeature(node.canvasFeature));
    // this.graphData.links.forEach(link => this.canvasLayer.addCanvasFeature(link.canvasFeature));
    // this.canvasLayer.render();

    window.addEventListener('resize', () => this.resize());
    this.resize();
  }

  resize() {
    if( !this.map ) return;
    setTimeout(() => this.map.invalidateSize(), 0);
  }

  _createGeoJson() {
    this.lookup = {};

    this.graphData.nodes = this.graphData.nodes.map(node => {
      this.lookup[node.label] = new MapNode(node, this.map);
      return this.lookup[node.label];
    });

    this.graphData.links = this.graphData.links.map(link => {
      return new MapLink(link, this.map, this.lookup);
    });
  }

  renderMask(canvas, ctx) {
    ctx.imageSmoothingEnabled = true;
    let maskCanvas = document.createElement('canvas');
    maskCanvas.imageSmoothingEnabled = true;

    let w = canvas.width;
    let h = canvas.height;

    maskCanvas.width = w;
    maskCanvas.height = h;
    let maskCtx = maskCanvas.getContext('2d');
    
    // This color is the one of the filled shape
    maskCtx.fillStyle = "#888888";
    // Fill the mask
    maskCtx.fillRect(0, 0, w, h);
    // Set xor operation
    maskCtx.globalCompositeOperation = 'xor';    

    let p = 0.8;
    let d = (w > h) ? h * p : w * p; 

    this.maskArea = {
      x : w/2,
      y : h/2,
      r : d/2
    }
    let centerLL = this.map.containerPointToLatLng({x: this.maskArea.x, y: this.maskArea.y});


    // Draw the shape you want to take out
    maskCtx.arc(this.maskArea.x, this.maskArea.y, this.maskArea.r, 0, 2 * Math.PI);
    maskCtx.fill();
    
    // Draw mask on the image, and done !
    ctx.drawImage(maskCanvas, 0, 0);

    for( let i = 0; i < this.graphData.nodes.length; i++ ) {
      let node = this.graphData.nodes[i];

      node.pxPt = this.map.latLngToContainerPoint(node.data);
      let d = Math.sqrt(
        Math.pow( node.pxPt.x - this.maskArea.x, 2) + 
        Math.pow( node.pxPt.y - this.maskArea.y, 2)
      )

      if( d < this.maskArea.r ) {
        node.visible = true;
      } else {
        node.visible = false;
      }
    }

    this.graphData.nodes.forEach(node => {
      if( node.visible ) {
        return node.render();
      }

      let lx = node.pxPt.x - this.maskArea.x;
      let ly = node.pxPt.y - this.maskArea.y;
      let angle = Math.atan2(ly, lx);
      let x =  this.maskArea.x + (this.maskArea.r + 20) * Math.cos(angle);
      let y =  this.maskArea.y + (this.maskArea.r + 20) * Math.sin(angle);

      let ll = this.map.containerPointToLatLng({x: Math.floor(x), y: Math.floor(y)});
      node.render(ll);
    });

    this.graphData.links.forEach(link => {
      link.render();
    });
  }

}

customElements.define('app-map', AppMap);