import {PolymerElement, html} from "@polymer/polymer"
import template from "./app-svg-layer.html"

const SVG_NS = 'http://www.w3.org/2000/svg';

export default class AppSvgLayer extends PolymerElement {

  static get template() {
    return html([template]);
  }

  static get properties() {
    return {
      
    }
  }

  constructor() {
    super();
    this.lines = [];
  }

  addLine(srcPt, dstPt, style = {}) {
    let line = {
      ele : document.createElementNS(SVG_NS,'line'),
      arrow : document.createElementNS(SVG_NS,'path'),
      setPoints : function(src, dst) {
        this.src = src;
        this.dst = dst;

        this.ele.setAttribute('x1', src.x);
        this.ele.setAttribute('y1', src.y);
        this.ele.setAttribute('x2', dst.x);
        this.ele.setAttribute('y2', dst.y);

        this.arrow.setAttribute('d', this._createArrowPath(this));

        this.arrow.setAttribute('visibility', this._isEqual() ? 'hidden' : '');
        this.ele.setAttribute('visibility', this._isEqual() ? 'hidden' : '');
      },
      _isEqual() {
        return ( this.src.x === this.dst.x && this.src.y === this.dst.y );
      },
      _createArrowPath(line) {
        var headlen = 10;
        var angle = Math.atan2(line.dst.y - line.src.y, line.dst.x - line.src.x);
    
        let path = `M ${line.dst.x} ${line.dst.y} `;
        path += 'L '+
          (line.dst.x-headlen*Math.cos(angle-Math.PI/6))+' '+
          (line.dst.y-headlen*Math.sin(angle-Math.PI/6))+' ';
    
        path += 'L '+
          (line.dst.x-headlen*Math.cos(angle+Math.PI/6))+' '+
          (line.dst.y-headlen*Math.sin(angle+Math.PI/6))+' ';

        path += `L ${line.dst.x} ${line.dst.y} `;
    
        return path;
      }
    }

    line.setPoints(srcPt, dstPt);

    line.ele.setAttribute('pointer-events', 'auto');
    line.arrow.setAttribute('pointer-events', 'auto');
    for( let key in style ) {
      line.ele.style[key] = style[key];
      line.arrow.style[key] = style[key];
    }

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

customElements.define('app-svg-layer', AppSvgLayer);