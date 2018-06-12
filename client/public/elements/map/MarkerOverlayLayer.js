var count = 0;
L.MarkerOverlayLayer = L.Layer.extend({


  // include events
  includes: [L.Evented],


  // initialize layer
  initialize: function (options) {
    this.showing = true;
    this.markers = [];
    this.pending = [];

    // set options
    options = options || {};
    L.Util.setOptions(this, options);
  },

  hide : function() {
    this._container.style.display = 'none';
    this.showing = false;
  },

  show : function() {
    this._container.style.display = 'block';
    this.showing = true;
    this.redraw();
  },

  onAdd: function (map) {
    this._map = map;

    // add container with the canvas to the tile pane
    // the container is moved in the oposite direction of the
    // map pane to keep the canvas always in (0, 0)
    //var tilePane = this._map._panes.tilePane;
    // var tilePane = this._map._panes.markerPane;
    var tilePane = this._map._panes.overlayPane;

    this._container = L.DomUtil.create('div', 'leaflet-marker-overlay-layer-'+count);
    count++;

    this._container.style.position = 'absolute';
    this._container.style.zIndex = 100;

    tilePane.appendChild(this._container);

    map.on({
      'move' : this._redraw,
      'resize'    : this._redraw,
      'zoomstart' : this._redraw,
      'zoomend'   : this._redraw,
      'movestart' : this._redraw,
      'moveend'   : this._redraw
    }, this);

    this._reset();

    if( this.zIndex !== undefined ) {
      this.setZIndex(this.zIndex);
    }

    this.pending.forEach(marker => this._appendMarker(marker));
    this.pending = [];
  },

  setZIndex : function(index) {
    this.zIndex = index;
    if( this._container ) {
      this._container.style.zIndex = index;
    }
  },

  _startZoom: function() {
    this._canvas.style.visibility = 'hidden';
    this.zooming = true;
  },

  _endZoom: function () {
    this._canvas.style.visibility = 'visible';
    this.zooming = false;
    setTimeout(this.render.bind(this), 50);
  },

  draw: function() {
    this.redraw();
  },

  onRemove: function (map) {
    this._container.parentNode.removeChild(this._container);
    map.off({
      'viewreset' : this.redraw,
      'resize'    : this.redraw,
      'movestart' : this.redraw,
      'moveend'   : this.redraw,
      'zoomstart' : this.redraw,
      'zoomend'   : this.redraw
    }, this);
  },

  addTo: function (map) {
    map.addLayer(this);
    return this;
  },

  _reset: function () {
    this._redraw({type: 'reset'});
  },

  addMarker: function(marker) {
    this.markers.push(marker);
    this._appendMarker(marker);
  },

  _appendMarker: function(marker) {
    if( this._container ) {
      this._container.appendChild(marker);
      this._redrawMarker(marker);
      return;
    }

    if( this.pending.indexOf(marker) === -1 ) {
      this.pending.push(marker);
    }
  },


  removeMarker: function(marker) {
    let index = this.markers.findIndex(marker);
    if( index > -1 ) this.markers.splice(index, 1);
    this._container.removeChild(marker._container);
  },

  _redraw: function(e) {
    var topLeft = this._map.containerPointToLayerPoint([0, 0]);
    // L.DomUtil.setPosition(this._canvas, topLeft);

    // var size = this._map.getSize();
    // this._canvas.width = size.x;
    // this._canvas.height = size.y;

    // this.redraw(this._canvas, this._ctx, e);

    this.markers.forEach(marker => this._redrawMarker(marker));
  },

  _redrawMarker: function(marker) {
    let ll = marker.fakeData;

    if( !ll || marker.visible ) {
      marker.style.display = 'none';
      return;
    }
    marker.style.display = 'block';

    let pt = this._map.latLngToLayerPoint(ll);

    marker.style.position = 'absolute';
    marker.style.left = (pt.x-37)+'px';
    marker.style.top = (pt.y-37)+'px';
  }

  // redraw all features.  This does not handle clearing the canvas or setting
  // the canvas correct position.  That is handled by render
  // redraw: function(canvas, ctx, event) {
    
  // }

});
