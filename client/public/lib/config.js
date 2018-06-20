module.exports = {
  map : {
    basemap : 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    //basemap : 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    init : {
      center : [38.57, -121.49],
      zoom : 13,
    },
    options : {
      zoomAnimation : false
    },
    clusterOptions : {
      animate: false,
      showCoverageOnHover : false,
      disableClusteringAtZoom : 11,
      maxClusterRadius : 15
    }
  }
}