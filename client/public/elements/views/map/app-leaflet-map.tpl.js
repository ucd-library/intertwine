import { html } from 'lit-element';
import leafletCss from "leaflet/dist/leaflet.css"
import markerClusterCss from "leaflet.markercluster/dist/MarkerCluster.css"
import markerClusterDefaultCss from "leaflet.markercluster/dist/MarkerCluster.Default.css"

export default function render() { 
return html`

<style>
${leafletCss}
${markerClusterCss}
${markerClusterDefaultCss}
</style>
<style>
  :host {
    display: block;
  }

  #map {
    height: 100%;
  }

  .border-top {
    position: absolute;
    box-shadow: 0 0 5px rgba(0, 0, 0, .8);
    top: -1px;
    right: 0;
    left: 0;
    z-index: 1000;
    height: 1px;
  }

  .marker-cluster-small, .marker-cluster-medium, .marker-cluster-large  {
    background-color: var(--app-color-interface-blue-alpha);
  }
  .marker-cluster-small div, .marker-cluster-medium div, .marker-cluster-large div {
    background-color: var(--app-color-interface-blue);
    color: var(--app-color-white)
  }

  .leaflet-intertwine-icon {
    border-radius: 10px;
  }

  .leaflet-person-icon {
    background-color: var(--app-color-scarlet); 
  }
  .leaflet-place-icon {
    background-color: var(--app-color-vine); 
  }
  .leaflet-event-icon {
    background-color: var(--app-color-rose); 
  }
  .leaflet-object-icon {
    background-color: var(--app-color-grape); 
  }

  .leaflet-intertwine-node-label div {
    color: var(--app-color-white);
    background: var(--app-color-charcoal);
    padding: 10px;
    position: absolute;
    white-space: nowrap;
  }
</style>

<div class="border-top"></div>
<div id="map"></div>

`;}