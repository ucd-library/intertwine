import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  app-map-info-panel {
    position: absolute;
    z-index: 5000;
    width: 400px;
    left: 0;
    top: 0;
    bottom: 0;
    transform: translateX(-400px);
    transition: transform 200ms ease-out;
  }
  app-map-info-panel[open] {
    transform: translateX(0);
  }

  app-leaflet-map {
    position: absolute;
    left: 0;
    bottom : 0;
    top: 0;
    right: 0;
    transition: left 200ms ease-out;
  }
  app-leaflet-map[info-open] {
    left: 400px;
  }

  @media(max-width: 600px) {
    app-map-info-panel {
      width: 100vw;
      left: 0;
      top: 0;
      bottom: 0;
      transform: translateX(-100vw);
    }
    app-map-info-panel[open] {
      transform: translateX(0);
    }

    app-leaflet-map {
      position: absolute;
      left: 0;
      bottom : 0;
      top: 0;
      right: 0;
    }
    app-leaflet-map[info-open] {
      left: 0px;
    }
  }
</style>  

<app-map-info-panel ?open="${this.infoPanelOpen}" @toggle="${this.toggleInfoPanel}"></app-map-info-panel>
<app-leaflet-map 
  ?info-open="${this.infoPanelOpen}" 
  ?active="${this.visible}" 
  id="map"
  @node-click="${this._onNodeClick}"
  @cluster-click="${this._onClusterClick}"
  @selected-cluster-ids="${this._onSelectedClusterIds}">
</app-leaflet-map>


`;}