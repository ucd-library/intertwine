import nodeManager from "./NodeManager"

export default class MapLink {

  constructor(data, layer, clusterLayer) {
    this.layer = layer;
    this.data = data;
    this.attached = false;

    // this.arrowHeadSymbol = L.Symbol.arrowHead({
    //   pixelSize: 8, 
    //   pathOptions: {
    //     fillOpacity: 1, 
    //     weight: 0
    //   }
    // })


    this.feature = this.layer.addLine({x:0,y:0}, {x:0,y:0});

    this.rendered = null;

    nodeManager.addLink(this);

    clusterLayer.on('animationend', () => this.render());
  }

  destroy()  {
    // if( this.arrowHead ) {
    //   this.map.removeLayer(this.arrowHead);
    // }
    this.layer.removeLine(this.feature);
    nodeManager.removeLink(this);
  }

  render() {
    let src = nodeManager.getMap(this.data.src);
    let dst = nodeManager.getMap(this.data.dst);

    this.feature.setPoints(
      src.getPoint(),
      dst.getPoint()
    );
  }

  renderArrow(line) {
    if( this.arrowHead ) this.map.removeLayer(this.arrowHead);

    this.arrowHead = L.polylineDecorator(line, {
      patterns: [{
        offset: '100%', 
        repeat: 0, 
        symbol: this.arrowHeadSymbol
      }]
    }).addTo(this.map);
    this.arrowHead.bringToFront();
  }
}