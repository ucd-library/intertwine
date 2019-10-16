import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    background: white;
    display: block;
    border-right: 1px solid #333;
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  }

  .toggle {
    background-color: var(--app-primary-color);
    color: white;
    width: 35px;
    height: 50px;
    position: absolute;
    right: -35px;
    bottom: 35px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .toggle-sm {
    display: none;
  }

  .content {
    overflow: auto;
    height: 100%;
    position: relative;
  }

  .image {

  }

  @media(max-width: 600px) {
    .toggle[open] {
      display: none;
    }
    .toggle-sm {
      display: block;
    }
    :host {
      background: white;
      display: block;
      border-right: none;
      box-shadow: none;
    }
  }
</style>  

<div class="content">
  <div class="toggle-sm" tabindex="0" @click="${this._fireToggleEvent}" @key-up="${this._onToggleKeyUp}">
    <iron-icon icon="close"></iron-icon>
  </div>

  <div class="image">
  
  </div>

  <div class="color-break"></div>

  <h2>${this.data.title}</h2>
  <div class="location">${this.data.location}</div>
  <div>${this.date}</div>

  <div id="description"></div>

  <div>Explore Connections</div>
  <div>
    ${this.connections.map(item => html`<app-connection-label .data="${item}"></app-connection-label>`)}
  </div>

</div>

<div class="toggle" ?open="${this.open}" tabindex="0" @click="${this._fireToggleEvent}" @key-up="${this._onToggleKeyUp}">
  <iron-icon icon="chevron-right" ?hidden="${this.open}"></iron-icon>
  <iron-icon icon="chevron-left" ?hidden="${!this.open}"></iron-icon>
</div>

`;}