

class MapNode {

  constructor(data, map) {
    this.map = map;
    this.data = data;
    this.visible = false;

    this.normalFeature = L.circleMarker(data, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 20
    });

    this.fakedFeature = L.circleMarker(data, {
      color: '#C3C9CB',
      weight: 3,
      fillColor: '#F3F2F0',
      radius: 80
    });

    this.rendered = null;
  }

  render(ll) {
    if( this.visible ) {
      if( this.rendered === 'normal' ) return;

      this.map.removeLayer(this.fakedFeature);
      this.normalFeature.addTo(this.map);
      this.rendered = 'normal';
      return;
    }

    this.fakeData = ll;
    this.fakedFeature.setLatLng(ll);

    if( this.rendered !== 'faked' ) {
      this.map.removeLayer(this.normalFeature);
      this.fakedFeature.addTo(this.map);
      this.rendered = 'faked';
    }
  }
}

module.exports = MapNode;