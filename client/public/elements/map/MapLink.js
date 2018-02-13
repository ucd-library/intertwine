class MapNode {

  constructor(data, map, lookup) {
    this.map = map;
    this.data = data;
    this.lookup = lookup;
    this.visible = false;

    this.normalFeature = L.polyline([
      this.lookup[this.data.src].data, 
      this.lookup[this.data.dst].data
    ]);

    this.fakedFeature = L.polyline([
      this.lookup[this.data.src].data, 
      this.lookup[this.data.dst].data
    ]);

    this.rendered = null;
  }

  render() {
    let src = this.lookup[this.data.src];
    let dst = this.lookup[this.data.dst];

    if( src.visible && dst.visible ) {
      if( this.render === 'normal' ) return;

      this.map.removeLayer(this.fakedFeature);
      this.normalFeature.addTo(this.map);

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
    }
  }
}

module.exports = MapNode;