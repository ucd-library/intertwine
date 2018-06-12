class MapNode {

  constructor(data, map, lookup) {
    this.map = map;
    this.data = data;
    this.lookup = lookup;
    this.visible = false;

    // this.arrowHeadSymbol = L.Symbol.arrowHead({
    //   pixelSize: 15, 
    //   polygon: false, 
    //   pathOptions: {stroke: true}
    // });

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

    this.normalFeature = L.polyline([
      this.lookup[this.data.src].data, 
      this.lookup[this.data.dst].data
    ], options);

    this.fakedFeature = L.polyline([
      this.lookup[this.data.src].data, 
      this.lookup[this.data.dst].data
    ], options);

    this.rendered = null;
  }

  render() {
    let src = this.lookup[this.data.src];
    let dst = this.lookup[this.data.dst];

    if( src.visible && dst.visible ) {
      if( this.render === 'normal' ) return;

      this.map.removeLayer(this.fakedFeature);
      this.normalFeature.addTo(this.map);
      this.normalFeature.bringToFront();
      this.renderArrow(this.normalFeature);

      this.rendered = 'normal';
      return;
    }

    this.fakedFeature.setLatLngs([
      src.visible ? src.data : src.fakeData,
      dst.visible ? dst.data : dst.fakeData
    ]);

    if( this.rendered !== 'faked' ) {
      this.map.removeLayer(this.normalFeature);
      this.fakedFeature.addTo(this.map);
      this.rendered = 'faked';
      this.fakedFeature.bringToFront();
    }

    this.renderArrow(this.fakedFeature);
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

module.exports = MapNode;