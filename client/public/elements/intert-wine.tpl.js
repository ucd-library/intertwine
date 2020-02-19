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

  iron-pages {
    flex: 1;
    align-self: stretch;
    position: relative;
  }

  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>

<app-route .appRoutes="${this.appRoutes}"></app-route>

<div class="layout">
  <app-header></app-header>

  <iron-pages selected="${this.view}" attr-for-selected="id" selected-attribute="visible">
    <app-home id="home"></app-home>
    <app-about id="about"></app-about>
    <app-moment id="moment"></app-moment>
    <app-view-map id="map"></app-view-map>
  </iron-pages>
</div>
`;}
