import { html } from 'lit-element'
import sharedStyles from './styles/shared-styles'

export default function render() { 
return html`

${sharedStyles}
<style>
  :host {
    display: block;
    min-height: 100vh;
  }

  /* app-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  } */

  iron-pages {
    align-self: stretch;
    flex: 1;
    position: relative;
  }

  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>

<div class="layout">
  <app-header></app-header>

  <iron-pages selected="${this.view}" attr-for-selected="id" selected-attribute="visible">
    <app-view-map id="map"></app-view-map>
  </iron-pages>

</div>

`;}