import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-map.html"

import "leaflet/dist/leaflet"
import leafletCss from "leaflet/dist/leaflet.css"
// import "leaflet-canvas-geojson/src/layer"
import "./MaskLayer"
import AppMapNode from "./app-map-node"
import MapLink from "./MapLink"
import NodeForceLayout from "./NodeForceLayout"

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

    this.map = L.map(this.$.map).setView([38.57, -121.49], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);


    this._createGeoJson();

    this.maskLayer = new L.MaskLayer({});
    this.maskLayer.redraw = (canvas, ctx, e) => this._renderMap(canvas, ctx, e);
    this.maskLayer.addTo(this.map);

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
      this.lookup[node.label] = new AppMapNode(node, this.map);
      this.$.nodes.appendChild(this.lookup[node.label]);
      return this.lookup[node.label];
    });

    this.graphData.links = this.graphData.links.map(link => {
      return new MapLink(link, this.map, this.lookup);
    });
  }

  /**
   * @method _renderMap
   * @description redraw the canvas layer and update all links/nodes
   *
   *
   * @param {Element} canvas canvas element
   * @param {Object} ctx canvas 2d context
   * @param {Object} e Leafet map event that cause render
   */
  _renderMap(canvas, ctx, e) {
    this._renderMask(canvas, ctx);

    NodeForceLayout.setCanvasSize(canvas.width, canvas.height);
    NodeForceLayout.setMaskSize(this.maskArea.r);

    // did a node go from visible to not or vise versa
    // if so we need to re-run our force layout
    let forceLayoutRequired = false;

    for( let i = 0; i < this.graphData.nodes.length; i++ ) {
      let node = this.graphData.nodes[i];

      node.pxPt = this.map.latLngToContainerPoint(node.data);
      let d = Math.sqrt(
        Math.pow( node.pxPt.x - this.maskArea.x, 2) +
        Math.pow( node.pxPt.y - this.maskArea.y, 2)
      )

      if( d < this.maskArea.r ) {
        if( !node.visible ) {
          forceLayoutRequired = true;
          node.visible = true;
        }
      } else {
        if( node.visible ) {
          forceLayoutRequired = true;
          node.visible = false;
        }
      }
    }

    // render all visible nodes
    this.graphData.nodes.forEach(node => {
      if( node.visible ) return node.render();
    });

    // if required, recalc the force layout
    // this is expensive, so only do when required
    if( forceLayoutRequired || e.type === 'reset' || e.type === 'moveend' || e.type === 'zoomend' ) {
      this._calcForceLayout();
    }

    // redraw all force layout nodes/links
    this._redrawForceLayout();
  }

  /**
   * @method _renderMask
   * @description mask the non-circle part of the map
   *
   * @param {Element} canvas canvas element
   * @param {Object} ctx canvas 2d context
   */
  _renderMask(canvas, ctx) {
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
  }

  /**
   * @method _redrawForceLayout
   * @description redraw the nodes that are set via force layout
   */
  _redrawForceLayout() {
    // for all node that have a fake (force layout), calc the
    // the lat/lng
    this.graphData.nodes.forEach(node => {
      if( node.visible ) return;

      let ll = this.map.containerPointToLatLng({
        x: Math.floor(node.fake.x),
        y: Math.floor(node.fake.y)
      });

      node.render(ll, node.fake);
    });

    this.graphData.links.forEach(link => {
      link.render();
    });
  }

  /**
   * @method _calcForceLayout
   * @description rerun the D3 force layout calculation for all nodes outside visible
   * radius of the map mask
   */
  _calcForceLayout() {
    this.graphData.nodes.forEach(node => {
      if( node.visible ) return; // inside radius, ignore

				let c=this.maskArea;
      // first we calculate the point where a line between the center of
      // the map and the node intersects to mask radius (circle).  This
      // point will be the fake node we tether our actual node for the force
				// layout
				let lx = node.pxPt.x - c.x;
				let ly = node.pxPt.y - c.y;
				let dr = Math.sqrt(lx**2+ly**2)-c.r;
				let angle = Math.atan2(ly, lx);
				let cx = c.x + c.r * Math.cos(angle);
				let cy = c.y + c.r * Math.sin(angle);
				let x = c.x + (c.r + (dr/1000) ) * Math.cos(angle);
				let y = c.y + (c.r + (dr/1000) ) * Math.sin(angle);
				let vx=0,vy=0;
      // TODO: set the real radius
				node.fake = {id: node.data.label, circle: {cx, cy }, r: 0 ,x,y,vx,vy};
    });

    // now that we have set all our fake node positions, lets run the D3
    // force simulation
    NodeForceLayout.layout(this.graphData.nodes);
  }

}

customElements.define('app-map', AppMap);
