import nodeManager from "./NodeManager"

export default class MapLink {

  constructor(data, map) {
    this.map = map;
    this.data = data;
    this.attached = false;

    this.arrowHeadSymbol = L.Symbol.arrowHead({
      pixelSize: 8, 
      pathOptions: {
        fillOpacity: 1, 
        weight: 0
      }
    })

    let options = {
      weight: 1,
      opacity: 0.7,
      color: '#6697B2'
    };

    this.feature = L.polyline([0, 0], options);

    this.rendered = null;

    nodeManager.addLink(this);
  }

  destroy()  {
    if( this.arrowHead ) {
      this.map.removeLayer(this.arrowHead);
    }
    this.layer.removeLayer(this.feature);
    nodeManager.removeLink(this);
  }

  render() {
    let src = nodeManager.getMap(this.data.src);
    let dst = nodeManager.getMap(this.data.dst);

    // TODO: check if things have changed, if not quit
    
    this.feature.setLatLngs([
      src.getLatLng(),
      dst.getLatLng()
    ]);

    if( !this.attached ) {
      this.attached = true;
      this.feature.addTo(this.map); 
    }
    
    this.feature.bringToFront();
    this.renderArrow(this.feature);
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