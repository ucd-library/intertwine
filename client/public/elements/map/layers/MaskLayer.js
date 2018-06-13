/**
  A Feature should have the following:

  feature = {
    visible : Boolean,
    size : Number, // points only, used for mouse interactions
    geojson : {}
    render : function(context, coordinatesInXY, map) {} // called in feature scope
  }

  geoXY and leaflet will be assigned
**/
var count = 0;
L.MaskLayer = L.Layer.extend({


  // include events
  includes: [L.Evented],


  // initialize layer
  initialize: function (options) {
    this.showing = true;

    // set options
    options = options || {};
    L.Util.setOptions(this, options);

    // set canvas and canvas context shortcuts
    this._canvas = this._createCanvas();
    this._ctx = this._canvas.getContext('2d');
  },

  hide : function() {
    this._canvas.style.display = 'none';
    this.showing = false;
  },

  show : function() {
    this._canvas.style.display = 'block';
    this.showing = true;
    this.redraw();
  },

  _createCanvas: function() {
    var canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = this.options.zIndex || 0;
    var className = 'leaflet-tile-container leaflet-zoom-animated';
    canvas.setAttribute('class', className);
    return canvas;
  },

  onAdd: function (map) {
    this._map = map;

    // add container with the canvas to the tile pane
    // the container is moved in the oposite direction of the
    // map pane to keep the canvas always in (0, 0)
    //var tilePane = this._map._panes.tilePane;
    // var tilePane = this._map._panes.markerPane;
    var tilePane = this._map._panes.overlayPane;
    var _container = L.DomUtil.create('div', 'leaflet-mask-layer-'+count);
    count++;

    _container.appendChild(this._canvas);
    tilePane.appendChild(_container);

    this._container = _container;


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

  getCanvas: function() {
    return this._canvas;
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
    // reset actual canvas size
    var size = this._map.getSize();
    this._canvas.width = size.x;
    this._canvas.height = size.y;

    this._redraw({type: 'reset'});
  },


  _redraw(e) {
    var topLeft = this._map.containerPointToLayerPoint([0, 0]);
    L.DomUtil.setPosition(this._canvas, topLeft);

    var size = this._map.getSize();
    this._canvas.width = size.x;
    this._canvas.height = size.y;

    this.redraw(this._canvas, this._ctx, e);
  },

  // redraw all features.  This does not handle clearing the canvas or setting
  // the canvas correct position.  That is handled by render
  redraw: function(canvas, ctx, event) {
    
  }



});
