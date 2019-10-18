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

  .content-padding {
    padding: 20px;
  }

  h2 {
    font-size: 16px;
    margin: 0 0 5px 0;
  }

  .image {
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image iron-icon {
    background-color: white !important;
    --iron-icon-height: 128px;
    --iron-icon-width: 128px;
  }

  .location, .date {
    font-style: italic;
  }

  .sub-title {
    font-weight: bold;
  }

  .type-label {
    padding-bottom: 15px;
    text-transform: uppercase;
    font-weight: bold;
  }

  .color-break {
    height: 5px;
    position: relative;
  }

  iron-icon[type] {
    color: var(--app-color-white);
    border-radius: 24px;
    padding: 2px;
  }

  .color-break iron-icon {
    position: absolute;
    --iron-icon-height: 32px;
    --iron-icon-width: 32px;
    top: -18px;
    right: 32px;
    color: var(--app-color-white);
    padding: 5px;
    border-radius: 32px;
  }

  .dot {
    display: inline-block;
    height: 8px;
    width: 8px;
    margin: 8px 16px 8px 8px;
    vertical-align: middle;
    border-radius: 8px;
  }

  .subject-label {
    margin-top: 15px;
  }
  .subject-label span {
    margin-left: 3px;
    vertical-align: bottom;
  }

  a {
    color: var(--app-color-black);
    font-size: 13px;
  }

  .type-color[type="cluster"], .type-color[type="connection"] {
    color: var(--app-color-interface-blue); 
  }
  .color-break[type="cluster"], iron-icon[type="cluster"],
  .color-break[type="connection"], iron-icon[type="connection"] {
    background-color: var(--app-color-interface-blue); 
  }
  .image[type="cluster"] {
    height: 200px
  }

  .type-color[type="person"] {
    color: var(--app-color-scarlet); 
  }
  .color-break[type="person"], iron-icon[type="person"], .dot[type="person"] {
    background-color: var(--app-color-scarlet); 
  }

  .type-color[type="place"] {
    color: var(--app-color-vine); 
  }
  .color-break[type="place"], iron-icon[type="place"], .dot[type="place"] {
    background-color: var(--app-color-vine); 
  }

  .type-color[type="event"] {
    color: var(--app-color-rose); 
  }
  .color-break[type="event"], iron-icon[type="event"], .dot[type="event"] {
    background-color: var(--app-color-rose); 
  }

  .type-color[type="object"] {
    color: var(--app-color-grape); 
  }
  .color-break[type="object"], iron-icon[type="object"], .dot[type="object"] {
    background-color: var(--app-color-grape); 
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

  <div class="image" type="${this.type}">
    <iron-icon class="type-color" type="${this.type}" icon="intert-wine-icons:${this.type}"></iron-icon>
  </div>

  <div class="color-break" type="${this.type}">
    <iron-icon icon="intert-wine-icons:${this.type}" type="${this.type}"></iron-icon>
  </div>

  <div class="content-padding">
    <iron-pages selected="${this.view}" attr-for-selected="id">
      <!-- START EMPTY -->
      <div id="empty">

      </div>
      <!-- END EMPTY -->

      <!-- START CLUSTER -->
      <div id="cluster">
        <div class="sub-title">Select a Subject</div>

        ${this.clusterSubjectTypes.map(type => html`
          <div ?hidden="${!this.clusterSubjects[type].enabled}">
            <div class="subject-label">
              <iron-icon icon="intert-wine-icons:${type}" type="${type}"></iron-icon>
              <span class="type-label type-color" type="${type}">${this.clusterSubjects[type].label}</span>
            </div>
            ${this.clusterSubjects[type].nodes.map(node => html`
              <div>
                <div class="dot" type="${type}"></div>
                <span><a href="/map/${type}/${node.id}">${node.title}</a></span>
              </div>
            `)}
          </div>
        `)}
      </div>
      <!-- END CLUSTER -->

      <!-- START ITEM -->
      <div id="item">
        <div class="type-label type-color" type="${this.type}">${this.type}</div>

        <div ?hidden="${!this.isLink}">
          <div class="sub-title">About the Connection</div>
          <div class="location">${this.title}</div>
        </div>

        <div ?hidden="${!this.isNode}">
          <h2>${this.title}</h2>
          <div class="location">${this.location}</div>
          <div class="date">${this.date}</div>
        </div>

        <div id="description"></div>

        <div ?hidden="${!this.isNode}">
          <div class="sub-title" style="margin-bottom: 5px">Explore Connections</div>
          <div>
            ${this.connections.map(item => html`
              <div>
                <div class="dot" type="${item.node.type}"></div>
                <span><a href="/map/connection/${item.link.id}">${item.node.title}</a></span>
              </div>
            `)}
          </div>
        </div>
        <div ?hidden="${!this.isLink}">
          <div class="sub-title" style="margin-bottom: 5px">Connections Subjects</div>
          ${this.connectionSubjects.map(node => html`
            <div>
              <div class="dot" type="${node.type}"></div>
              <span><a href="/map/${node.type}/${node.id}">${node.title}</a></span>
            </div>
          `)}
        </div>
      </div>
      <!-- END ITEM -->
    </iron-pages>
  </div>

</div>

<div class="toggle" ?open="${this.open}" tabindex="0" @click="${this._fireToggleEvent}" @key-up="${this._onToggleKeyUp}">
  <iron-icon icon="chevron-right" ?hidden="${this.open}"></iron-icon>
  <iron-icon icon="chevron-left" ?hidden="${!this.open}"></iron-icon>
</div>

`;}