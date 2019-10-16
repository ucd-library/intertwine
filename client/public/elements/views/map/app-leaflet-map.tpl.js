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
</style>  

<div id="map"></div>

`;}