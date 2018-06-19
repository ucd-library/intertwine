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
    this.$.labels.appendChild(line.label);

    this.lines.push(line);
    return line;
  }

  removeLine(line) {
    let index = this.lines.indexOf(line);
    if( index === -1 ) return;

    this.$.svg.removeChild(line.ele);
    this.$.svg.removeChild(line.arrow);
    this.$.labels.removeChild(line.label);
    
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
    this.label = document.createElement('div');
    this.label.style.position = 'absolute';

    this.ele.setAttribute('pointer-events', 'auto');
    this.arrow.setAttribute('pointer-events', 'auto');

    for( let key in style ) {
      this.ele.style[key] = style[key];
      this.arrow.style[key] = style[key];
    }
  }

  setLabel(label) {
    this.label.innerHTML = label;
  }

  setPoints(src, dst) {
    // shorten lines based on node radius
    this.arrowDst = this.shorten(dst, src, this.getPtRadiusDistance(dst.radius));
    this.dst = this.shorten(dst, src, this.getPtRadiusDistance(dst.radius)+2);
    this.src = this.shorten(src, dst, this.getPtRadiusDistance(src.radius)+2);

    

    this.m = this._calcSlope();
    this.b = this.src.y - (this.m * this.src.x);

    this.ele.setAttribute('x1', this.src.x);
    this.ele.setAttribute('y1', this.src.y);
    this.ele.setAttribute('x2', this.dst.x);
    this.ele.setAttribute('y2', this.dst.y);

    this.arrow.setAttribute('d', this._createArrowPath());

    this.arrow.setAttribute('visibility', this._isEqual() ? 'hidden' : '');
    this.ele.setAttribute('visibility', this._isEqual() ? 'hidden' : '');

    let half = this.half();
    this.label.style.display = this._isEqual() ? 'none' : 'block';
    this.label.style.top = half.y+'px';
    this.label.style.left = half.x+'px';
  }

  getPtRadiusDistance(radius) {
    if( radius !== undefined) return radius;
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

  select(select) {
    if( select ) {
      this.label.classList.add('selected');
      this.ele.classList.add('selected');
    } else {
      this.label.classList.remove('selected');
      this.ele.classList.remove('selected');
    }
  }

  half() {
    let lx = this.dst.x - this.src.x;
    let ly = this.dst.y - this.src.y;
    let distance = Math.sqrt(Math.pow(lx,2)+Math.pow(ly, 2));
    distance = distance / 2;

    let angle = Math.atan2(ly, lx);
    let x = this.src.x + distance * Math.cos(angle);
    let y = this.src.y + distance * Math.sin(angle);
    return {x, y};
  }

  _isEqual() {
    return ( this.src.x === this.dst.x && this.src.y === this.dst.y );
  }

  _createArrowPath() {
    var angle = Math.atan2(this.arrowDst.y - this.src.y, this.arrowDst.x - this.src.x);

    let path = `M ${this.arrowDst.x} ${this.arrowDst.y} `;
    path += 'L '+
      (this.arrowDst.x-this.ARROW_SIZE*Math.cos(angle-Math.PI/6))+' '+
      (this.arrowDst.y-this.ARROW_SIZE*Math.sin(angle-Math.PI/6))+' ';

    path += 'L '+
      (this.arrowDst.x-this.ARROW_SIZE*Math.cos(angle+Math.PI/6))+' '+
      (this.arrowDst.y-this.ARROW_SIZE*Math.sin(angle+Math.PI/6))+' ';

    path += `L ${this.arrowDst.x} ${this.arrowDst.y} `;

    return path;
  }

  _calcSlope() {
    if( this.dst.x === this.src.x ) return 0;
    return (this.dst.y - this.src.y) / (this.dst.x - this.src.x);
  }
}

customElements.define('app-svg-layer', AppSvgLayer);