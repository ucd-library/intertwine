import {PolymerElement, html} from "@polymer/polymer"
import template from "./app-svg-layer.html"

const SVG_NS = 'http://www.w3.org/2000/svg';

export default class AppSvgLayer extends PolymerElement {

  static get template() {
    return html([template]);
  }

  constructor() {
    super();
    this.lines = [];
  }

  addLine(srcPt, dstPt, style = {}) {
    let line = new Line(style);
    line.setPoints(srcPt, dstPt);

    this.$.svg.appendChild(line.ele);
    this.$.svg.appendChild(line.arrow);

    this.lines.push(line);
    return line;
  }

  removeLine(line) {
    let index = this.lines.indexOf(line);
    if( index === -1 ) return;
    this.$.svg.removeChild(line.ele);
    this.$.svg.removeChild(line.arrow);
    this.lines.splice(index, 1);
  }

  setSize(width, height) {
    this.$.svg.setAttribute('width', width);
    this.$.svg.setAttribute('height', height);
  }

}

class Line {

  constructor(style = {}) {
    this.ARROW_SIZE = 10;

    this.ele = document.createElementNS(SVG_NS,'line');
    this.arrow = document.createElementNS(SVG_NS,'path');

    this.ele.setAttribute('pointer-events', 'auto');
    this.arrow.setAttribute('pointer-events', 'auto');

    for( let key in style ) {
      this.ele.style[key] = style[key];
      this.arrow.style[key] = style[key];
    }
  }

  setPoints(src, dst) {
    // shorten lines based on node type
    this.dst = this.shorten(dst, src, this.getShortenDistance(dst.type));
    this.src = this.shorten(src, dst, this.getShortenDistance(src.type));

    this.m = this._calcSlope();
    this.b = this.src.y - (this.m * this.src.x);

    this.ele.setAttribute('x1', this.src.x);
    this.ele.setAttribute('y1', this.src.y);
    this.ele.setAttribute('x2', this.dst.x);
    this.ele.setAttribute('y2', this.dst.y);

    this.arrow.setAttribute('d', this._createArrowPath());

    this.arrow.setAttribute('visibility', this._isEqual() ? 'hidden' : '');
    this.ele.setAttribute('visibility', this._isEqual() ? 'hidden' : '');
  }

  getShortenDistance(type) {
    if( type === 'cluster' ) return 15;
    if( type === 'node' ) return 20;
    return 5;
  }

  shorten(pt1, pt2, distance) {
    let lx = pt2.x - pt1.x;
    let ly = pt2.y - pt1.y;
    let angle = Math.atan2(ly, lx);
    let x = pt1.x + distance * Math.cos(angle);
    let y = pt1.y + distance * Math.sin(angle);
    return {x, y};
  }

  _isEqual() {
    return ( this.src.x === this.dst.x && this.src.y === this.dst.y );
  }

  _createArrowPath() {
    var angle = Math.atan2(this.dst.y - this.src.y, this.dst.x - this.src.x);

    let path = `M ${this.dst.x} ${this.dst.y} `;
    path += 'L '+
      (this.dst.x-this.ARROW_SIZE*Math.cos(angle-Math.PI/6))+' '+
      (this.dst.y-this.ARROW_SIZE*Math.sin(angle-Math.PI/6))+' ';

    path += 'L '+
      (this.dst.x-this.ARROW_SIZE*Math.cos(angle+Math.PI/6))+' '+
      (this.dst.y-this.ARROW_SIZE*Math.sin(angle+Math.PI/6))+' ';

    path += `L ${this.dst.x} ${this.dst.y} `;

    return path;
  }

  _calcSlope() {
    if( this.dst.x === this.src.x ) return 0;
    return (this.dst.y - this.src.y) / (this.dst.x - this.src.x);
  }
}

customElements.define('app-svg-layer', AppSvgLayer);