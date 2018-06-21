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
    let line = new Line(style, this);
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

  render() {
    let clusters = {};
    this.lines.forEach(line => {
      let id = this._createId(line);
      if( !clusters[id] ) clusters[id] = [];
      clusters[id].push(line);
    });

    for( let id in clusters ) {
      clusters[id].forEach((line, i) => {
        line.render(i);
      });
    }
  }

  _createId(line) {
    if( line.orgSrc.x < line.orgDst.x ) {
      return this._createIdPart(line.orgSrc)+':'+this._createIdPart(line.orgDst);
    }
    return this._createIdPart(line.orgDst)+':'+this._createIdPart(line.orgSrc);
  }

  _createIdPart(pt) {
    return pt.x.toFixed(4)+','+pt.y.toFixed(4);
  }

}

class Line {

  constructor(style = {}, layer) {
    this.ARROW_SIZE = 10;
    this.layer = layer;

    // this.ele = document.createElementNS(SVG_NS,'line');
    this.ele = document.createElementNS(SVG_NS,'path');
    this.ele.classList.add('line');

    this.arrow = document.createElementNS(SVG_NS,'path');
    this.arrow.classList.add('arrow');

    this.label = document.createElement('div');
    this.label.style.position = 'absolute';
    this.label.style.display = 'none';

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

  /**
   * @method setPoints
   * @description 
   * 
   * @param {*} src 
   * @param {*} dst 
   */
  setPoints(src, dst) {
    this.orgSrc = src;
    this.orgDst = dst;

    // shorten lines based on node radius
    this.arrowDst = this.shorten(dst, src, this.getPtRadiusDistance(dst.radius));
    this.dst = this.shorten(dst, src, this.getPtRadiusDistance(dst.radius)+2);
    this.src = this.shorten(src, dst, this.getPtRadiusDistance(src.radius)+2);

    this.m = this._calcSlope();
    this.b = this.src.y - (this.m * this.src.x);    
  }

  /**
   * @method render
   * @description should be called by layer function
   * 
   * @param {*} offset 
   */
  render(offset) {
    if( offset === 0 ) {
      this.ele.setAttribute('d', this._createLinePath());
      let half = this.half();
      this.label.style.top = half.y+'px';
      this.label.style.left = half.x+'px';
    } else {
      let distance = (Math.ceil(offset / 2) * 30);
      if( offset % 2 === 0 ) distance = distance * -1;

      this.ele.setAttribute('d', this._createCurvePath(distance));
      this.label.style.top = this.curveCenter.y+'px';
      this.label.style.left = this.curveCenter.x+'px';
    }

    this.arrow.setAttribute('d', this._createArrowPath());

    this.arrow.setAttribute('visibility', 'hidden');
    this.ele.setAttribute('visibility', this._isEqual() ? 'hidden' : '');
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

  // Bezier Curve
  // shifted(pt1, pt2, distance) {
  //   let lx = pt2.x - pt1.x;
  //   let ly = pt2.y - pt1.y;
  //   let length = Math.sqrt(Math.pow(lx,2)+Math.pow(ly, 2));

  //   let angle = Math.atan(length);
  //   let x = pt1.x + distance * Math.cos(angle);
  //   let y = pt1.y + distance * Math.sin(angle);
  //   let pt1p = {x, y};

  //   x = pt2.x + distance * Math.cos(angle);
  //   y = pt2.y + distance * Math.sin(angle);
  //   let pt2p = {x, y};

  //   return {pt1: pt1p, pt2: pt2p};
  // }

  shifted(distance) {
    let pth = this.half();

    let lx = this.src.x - pth.x;
    let ly = this.src.y - pth.y;
    let length = Math.sqrt(Math.pow(lx,2)+Math.pow(ly, 2));

    let angle = Math.atan(length);

    if( Math.abs(this.m) > 1 ) {
      let y = pth.y + distance * Math.cos(angle);
      let x = pth.x + distance * Math.sin(angle);
      return {x, y, 
        half: pth, 
        yOffset: distance * Math.cos(angle), 
        xOffset: distance * Math.sin(angle)
      };
    }

    let x = pth.x + distance * Math.cos(angle);
    let y = pth.y + distance * Math.sin(angle);

    return {x, y, 
      half: pth, 
      yOffset: distance * Math.sin(angle), 
      xOffset: distance * Math.cos(angle)
    };
  }

  setFirst(ele) {
    
      this.layer.$.svg.removeChild(ele);
      this.layer.$.svg.appendChild(ele);
    
  }

  select(select) {
    if( select ) {
      this.setFirst(this.ele);
      this.setFirst(this.arrow);

      this.label.classList.add('selected');
      this.label.style.display = 'block';
      this.arrow.setAttribute('visibility', '');
      this.ele.classList.add('selected');
    } else {
      this.label.classList.remove('selected');
      this.label.style.display = 'none';
      this.arrow.setAttribute('visibility', 'hidden');
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

  _createLinePath() {
    let path = `M ${this.src.x} ${this.src.y} `;
    path += `L ${this.dst.x} ${this.dst.y} `;
    return path;
  }

  _createCurvePath(distance) {
    // Bezier Curve
    // let shift = this.shifted(this.src, this.dst, distance);

    // let path = `M${this.src.x} ${this.src.y} `;
    // path += 'C '+shift.pt1.x+' '+shift.pt1.y+', '
    // path += ' '+shift.pt2.x+' '+shift.pt2.y+', '

    // path += ` ${this.dst.x} ${this.dst.y} `;

    let curve = this.shifted(distance);

    // let curveCenter = {
    //   x: Math.log2(Math.abs(curve.xOffset)),
    //   y: Math.log2(Math.abs(curve.yOffset))
    // };
    // if( curve.xOffset < 0 ) curveCenter.x = curveCenter.x*-1;
    // if( curve.yOffset < 0 ) curveCenter.y = curveCenter.y*-1;
    // curveCenter.x = curveCenter.x + curve.half.x;
    // curveCenter.y = curveCenter.y + curve.half.y;
    // this.curveCenter = curveCenter;
    // console.log(curveCenter);
    this.curveCenter = {
      x : curve.half.x + (curve.xOffset * 0.44),
      y : curve.half.y + (curve.yOffset * 0.44)
    }

    let path = `M${this.src.x} ${this.src.y} `;
    path += 'S '+curve.x+' '+curve.y+', '
    path += ` ${this.dst.x} ${this.dst.y} `;

    return path;
  }

  _calcSlope() {
    if( this.dst.x === this.src.x ) return 0;
    return (this.dst.y - this.src.y) / (this.dst.x - this.src.x);
  }
}

customElements.define('app-svg-layer', AppSvgLayer);