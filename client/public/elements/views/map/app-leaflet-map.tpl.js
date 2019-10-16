import { html } from 'lit-element';

import "leaflet"
import leafletCss from "leaflet/dist/leaflet.css"

export default function render() { 
return html`

<style>
${leafletCss}
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
</style>

<div class="border-top"></div>
<div id="map"></div>

`;}