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
      top: -1px;
      right: 0;
      left: 0;
      z-index: 1000;
      height: 1px;
    }

    .marker-cluster-small, .marker-cluster-medium, .marker-cluster-large  {
      background-color: var(--app-color-cluster-blue-alpha);
    }
    .marker-cluster-small div, .marker-cluster-medium div, .marker-cluster-large div {
      background-color: var(--app-color-cluster-blue);
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

    .intertwine-arrow {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 5px 25px 5px;
      border-color: transparent transparent var(--app-color-charcoal) transparent;
      top: 12px;
      position: absolute;
      z-index: 10001;
      left: -5px;
    }
    .intertwine-arrow.top {
      transform: rotate(180deg);
      bottom: 12px;
      top: initial;
    }
    .intertwine-arrow.top.point {
      bottom: 6px;
    }
    .intertwine-arrow.bottom.point {
      top: 6px;
    }

    .leaflet-intertwine-node-label > div:first-child {
      color: var(--app-color-white);
      background: var(--app-color-charcoal);
      padding: 4px 8px;
      position: absolute;
      white-space: nowrap;
      font-size: 13px;
    }

    .leaflet-intertwine-node-label > div.fixed-width:first-child {
      white-space: initial;
      width: 150px;
      left: -83px;
      text-align: center;
    }

    .leaflet-intertwine-node-label > div.top:first-child {
      bottom: 34px;
    }
    .leaflet-intertwine-node-label > div.top.point:first-child {
      bottom: 28px;
    }

    .leaflet-intertwine-node-label > div.bottom:first-child {
      top : 32px;
    }
    .leaflet-intertwine-node-label > div.bottom.point:first-child {
      top : 26px;
    }

    .leaflet-intertwine-connection-label > div:first-child {
      color: var(--app-color-white);
      background: var(--app-color-interface-blue);
      padding: 4px 8px;
      position: absolute;
      white-space: nowrap;
      left: -42px;
      top: -16px;
      font-size: 13px;
      font-style: italic;
    }
  </style>

  <div class="border-top"></div>
  <div id="map"></div>

`;}
