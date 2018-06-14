import {PolymerElement, html} from "@polymer/polymer"
import template from "./app-map.html"

// leaflet packages
import "leaflet/dist/leaflet"
import leafletCss from "leaflet/dist/leaflet.css"
import "leaflet-polylinedecorator"
import "leaflet.markercluster"
import leafletClusterCss from "leaflet.markercluster/dist/MarkerCluster.css"
import leafletClusterDefaultCss from "leaflet.markercluster/dist/MarkerCluster.Default.css"

// custom layers and markers
import "./layers/MaskLayer"
// import "./layers/MarkerOverlayLayer"
import "./layers/app-svg-layer"
import ExternalNode from "./markers/app-external-node"
import MapLink from "./markers/MapLink"
import MapNode from "./markers/MapNode"
import NodeForceLayout from "./NodeForceLayout"

import config from "../../lib/config"
import GraphInterface from "../interfaces/GraphInterface"
import nodeManager from "./markers/NodeManager";

export default class AppMap extends Mixin(PolymerElement)
  .with(EventInterface, GraphInterface) {

  static get template() {
    return html([`
      <style>${leafletCss}</style>
      <style>${leafletClusterCss}</style>
      <style>${leafletClusterDefaultCss}</style>
      ${template}
    `]);
  }

    static get properties() {
      return {

      }
    }

  constructor() {
    super();
    this.maskLayer = new L.MaskLayer({});
    // this.markerOverlayLayer = new L.MarkerOverlayLayer({});
    this.clusterLayer = L.markerClusterGroup({});
  }

  ready() {
    super.ready();

    this.map = L.map(this.$.map).setView(config.map.init.center, config.map.init.zoom);
    L.tileLayer(config.map.basemap, {
      attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution/" target="_blank">CARTO</a>'
    }).addTo(this.map);

    this._createGeoJson();
    
    this.maskLayer.redraw = (canvas, ctx, e) => this._renderMap(canvas, ctx, e);
    this.maskLayer.addTo(this.map);

    this.clusterLayer.addTo(this.map);
    // this.markerOverlayLayer.addTo(this.map);

    window.addEventListener('resize', () => this.resize());
    this.resize();

    setTimeout(() => {
      this.maskLayer._reset();
    }, 100);
  }

  resize() {
    if( !this.map ) return;

    this.$.svgLayer.setSize(this.$.map.offsetWidth, this.$.map.offsetHeight);
    setTimeout(() => this.map.invalidateSize(), 0);
  }

  // TODO: this becomes main render method when map node/links change
  // Do not call when viewport changes
  _createGeoJson() {
    nodeManager.reset();

    let graphData = this._getGraph();

    let external = {};
    graphData.nodes.forEach(node => {
      if( !external[node.externalId] ) {
        new ExternalNode(node, this.$.externalNodeLayer);
        external[node.externalId] = true;
      }
      new MapNode(node, this.clusterLayer);
    });

    graphData.links.forEach(link => {
      new MapLink(link, this.$.svgLayer);
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

    for( let id in nodeManager.mapNodes ) {
      let node = nodeManager.mapNodes[id];

      node.pxPt = this.map.latLngToContainerPoint(node.data);
      let d = Math.sqrt(
        Math.pow( node.pxPt.x - this.maskArea.x, 2) + 
        Math.pow( node.pxPt.y - this.maskArea.y, 2)
      )

      if( d < this.maskArea.r ) {
        if( node.visible !== true ) {
          forceLayoutRequired = true;
          node.visible = true;
        }
      } else {
        if( node.visible !== false ) {
          forceLayoutRequired = true;
          node.visible = false;
        }
      }

      node.render();
    }

    // always needs to be called after map nodes render (above)
    for( let id in nodeManager.externalNodes ) {
      let node = nodeManager.externalNodes[id];
      node.pxPt = this.map.latLngToContainerPoint(node.data);
      node.render();
    }

    // if required, recalc the force layout
    // this is expensive, so only do when required
    if( forceLayoutRequired || e.type === 'reset' || e.type === 'moveend' || e.type === 'zoomend' ) {
      // JM: Quinn, toggle this to switch to your layout.
      // this._qcalcForceLayout();
      this._calcForceLayout();
    }

    nodeManager.links.forEach(link => link.render());
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
    maskCtx.fillStyle = "#4E4E4E";
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
   * @method _calcForceLayout
   * @description rerun the D3 force layout calculation for all nodes outside visible
   * radius of the map mask
   */
  _qcalcForceLayout() {
    let nodes = [];
    for( let id in nodeManager.externalNodes ) {
      let node = nodeManager.externalNodes[id];
      if( !node.visible ) continue; // no attached children

      let c = this.maskArea;
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
      let vx = 0, vy = 0;

      // TODO: set the real radius
      node.data.forceLayout = {
        circle: {cx, cy}, 
        r: 0,
        x, y, vx, vy
      }

      nodes.push(node);
    }

    // now that we have set all our external node positions, lets run the D3 
    // force simulation
    NodeForceLayout.qlayout(nodes);

    nodes.forEach(node => {
      node.setPosition(node.data.forceLayout.y, node.data.forceLayout.x);
    });
  }

  /**
   * @method _calcForceLayout
   * @description rerun the D3 force layout calculation for all nodes outside visible
   * radius of the map mask
   */
  _calcForceLayout() {
    let nodes = [];
    for( let id in nodeManager.externalNodes ) {
      let node = nodeManager.externalNodes[id];
      if( !node.visible ) continue; // inside radius, ignore

      // first we calculate the point where a line between the center of
      // the map and the node intersects to mask radius (circle).  This
      // point will be the fake node we tether our actual node for the force
      // layout
      let lx = node.pxPt.x - this.maskArea.x;
      let ly = node.pxPt.y - this.maskArea.y;
      let angle = Math.atan2(ly, lx);
      let x = this.maskArea.x + (this.maskArea.r + 20) * Math.cos(angle);
      let y = this.maskArea.y + (this.maskArea.r + 20) * Math.sin(angle);

      // TODO: set the real radius
      node.data.forceLayout = {x, y, r: 40};

      nodes.push(node);
    }

    // now that we have set all our fake node positions, lets run the D3 
    // force simulation
    NodeForceLayout.layout(nodes);

    nodes.forEach(node => {
      node.setPosition(node.data.forceLayout.y, node.data.forceLayout.x);
    });
  }

}


customElements.define('app-map', AppMap);
