import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import sharedStyles from './../../styles/shared-styles'

export default function render() {
return html`
  ${sharedStyles}
  <style>
    :host {
      display: block;
      background: var(--app-color-white);
      box-shadow: 0 0 5px rgba(0, 0, 0, .5);
    }

    a.internal {
      display: inline-block;
    }

    .toggle {
      background-color: var(--app-primary-color);
      color: var(--app-color-white);
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

    .content {
      overflow: auto;
      height: 100%;
      position: relative;
    }

    .content[moment-view] {
      color: var(--app-color-white);
      background-color: var(--app-color-interface-blue);
    }

    .content-padding {
      padding: 30px 25px;
    }

    .moment-break {
      margin-top: 50px;
      border-bottom: 1px solid var(--app-color-white);
      margin-bottom: 18px;
    }

    #momentDescription {
      padding-bottom: 18px;
    }
    #momentDescription p {
      color: var(--app-color-white);
    }

    h3 {
      margin-bottom: 5px;
    }

    .image {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 300px;

      background-color: var(--app-color-smoke);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .image iron-icon {
      background-color: var(--app-color-smoke) !important;
      --iron-icon-height: 150px;
      --iron-icon-width: 150px;
    }

    .cluster-icon {
      width: 100px;
      height: 100px;
    }

    .dot-list {
      padding: 5px 0;
      display: flex;
      flex-direction: row;
    }

    .dot-list > .dot-wrapper > .dot {
      margin: 8px;
      height: 8px;
      width: 8px;
      vertical-align: middle;
      border-radius: 8px;
    }

    .dot-list-padding {
      margin-left: 12px;
    }

    #explore-connections.dot-list > div > a {
      margin-left: 5px;
    }

    .related-links > .link-wrapper {
      display: flex;
      flex-direction: row;
      padding: 2px 0;
    }

    #description > p {
      padding: 0;
    }

    .location, .date {
      font-style: italic;
    }

    .sub-title {
      font-weight: bold;
    }

    .imageCredit {
      padding: 20px 0 0 0;
    }
    .imageCredit,
    .imageCredit > a {
      color: var(--app-color-stone);
      font-size: 12px;
      font-style: italic;
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

    .color-break > iron-icon {
      position: absolute;
      --iron-icon-height: 38px;
      --iron-icon-width: 38px;
      border-radius: 50px;
      padding: 6px;
      top: -21px;
      right: 32px;
      color: var(--app-color-white);
    }

    .type-color[type="connection"] {
      color: var(--app-color-interface-blue);
    }

    .color-break[type="cluster"],
    iron-icon[type="cluster"],
    .color-break[type="connection"],
    iron-icon[type="connection"] {
      background-color: var(--app-color-interface-blue);
    }

    iron-icon.external-link[type="cluster"],
    iron-icon.external-link[type="connection"] {
      background-color: transparent;
      fill: var(--app-color-interface-blue);
    }

    .image[type="cluster"] {
      height: 150px;
    }
    .type-color[type="breed"],
    .type-color[type="person"] {
      color: var(--app-color-scarlet);
    }
    .color-break[type="breed"],
    .color-break[type="person"],
    iron-icon[type="breed"],
    iron-icon[type="person"],
    .dot[type="breed"],
    .dot[type="person"] {
      background-color: var(--app-color-scarlet);
    }
    .type-color[type="breed"],
    iron-icon.external-link[type="person"] {
      background-color: transparent;
      fill: var(--app-color-scarlet);
    }

    .type-color[type="place"] {
      color: var(--app-color-vine);
    }
    .color-break[type="place"],
    iron-icon[type="place"],
    .dot[type="place"] {
      background-color: var(--app-color-vine);
    }
    iron-icon.external-link[type="place"] {
      background-color: transparent;
      fill: var(--app-color-vine);
    }

    .type-color[type="event"] {
      color: var(--app-color-rose);
    }
    .color-break[type="event"],
    iron-icon[type="event"],
    .dot[type="event"] {
      background-color: var(--app-color-rose);
    }
    iron-icon.external-link[type="event"] {
      background-color: transparent;
      fill: var(--app-color-rose);
    }

    .type-color[type="object"] {
      color: var(--app-color-grape);
    }
    .color-break[type="object"],
    iron-icon[type="object"],
    .dot[type="object"] {
      background-color: var(--app-color-grape);
    }
    iron-icon.external-link[type="object"] {
      background-color: transparent;
      fill: var(--app-color-grape);
    }

    .type-color[type="organization"] {
      color: var(--app-color-gold);
    }
    .color-break[type="organization"],
    iron-icon[type="organization"],
    .dot[type="organization"] {
      background-color: var(--app-color-gold);
    }
    iron-icon.external-link[type="organization"] {
      background-color: transparent;
      fill: var(--app-color-gold);
    }

    .connection-image-layout {
      display: flex;
    }
    .connection-image-layout > div {
      flex: 1;
    }
    .connection-image-layout > div:first-child {
      border-right: 2px solid var(--app-color-white);
    }
    .connection-image-layout > div:nth-child(2) {
      border-left: 2px solid var(--app-color-white);
    }

    .subject-wrapper .subject-type {
      margin-bottom: 10px;
    }
    .subject-wrapper .subject-label {
      margin-top: 15px;
    }
    .subject-wrapper .subject-label > span {
      margin-left: 3px;
      vertical-align: middle;
    }

    @media(max-width: 600px) {
      .toggle {
        width: 50px;
        height: 35px;
        position: absolute;
        right: initial;
        top: -35px;
        left: 35px;
      }
      .toggle iron-icon {
        transform: rotate(-90deg);
      }

      .toggle-sm {
        display: block;
      }
    }
  </style>

  <div class="content" ?moment-view="${this.isMoment}">
    <div ?hidden="${this.isMoment}">
      <div ?hidden="${this.isLink}">
        <div id="singleImage" class="image" type="${this.type}">
          ${(this.type === 'cluster') ?
            html`<iron-icon ?hidden="${this.thumbnail}" class="cluster-icon" type="${this.type}" icon="intert-wine-icons:cluster-colored"></iron-icon>`
              :
            html`<iron-icon ?hidden="${this.thumbnail}" class="type-color" type="${this.type}" icon="intert-wine-icons:${this.type}"></iron-icon>`
          }
        </div>
      </div>

      <div ?hidden="${!this.isLink}">
        <div class="connection-image-layout">
          <div id="connection-src-image" class="image" type="${this.srctype}">
            <iron-icon ?hidden="${this.srcthumb}" class="type-color" type="${this.srctype}" icon="intert-wine-icons:${this.srctype}"></iron-icon>
          </div>
          <div id="connection-dst-image" class="image" type="${this.dsttype}">
            <iron-icon ?hidden="${this.dstthumb}" class="type-color" type="${this.dsttype}" icon="intert-wine-icons:${this.dsttype}"></iron-icon>
          </div>
        </div>
      </div>

      <div class="color-break" type="${this.type}">
        <iron-icon icon="intert-wine-icons:${this.type}" type="${this.type}"></iron-icon>
      </div>
    </div>

    <div class="content-padding">
      <iron-pages selected="${this.view}" attr-for-selected="id">
        <!-- START EMPTY -->
        <div id="moment">
          <div class="subject-type">
            Explore
          </div>

          <h1 style="margin-bottom: 3px" class="inverse">${this.momentEntryPoint.name}</h1>
          <h2 style="margin: 0 0 14px 0" class="inverse">${this.momentEntryPoint.temporal}</h2>
          <div>
            Select a subject on the map to learn about their
            connections to California wine history.
          </div>

          <div class="moment-break"></div>
          <div ?hidden="${!this.momentEntryPoint}">
            <h3 class="inverse">Connections in Context</h3>
            <div id="momentDescription"></div>
            <a class="btn inverse" href="/story/${this.moment}">
              Read Story
            </a>
          </div>
        </div>
        <!-- END EMPTY -->


        <!-- START CLUSTER -->
        <div id="cluster">
          <h1 style="margin-top: 0px;">Select a Subject</h1>
          ${this.clusterSubjectTypes.map(type => html`
            <div class="subject-wrapper" ?hidden="${!this.clusterSubjects[type].enabled}">
              <div class="subject-label">
                <iron-icon icon="intert-wine-icons:${type}" type="${type}"></iron-icon>
                <span class="subject-type type-color" type="${type}">${this.clusterSubjects[type].label}</span>
              </div>
              ${this.clusterSubjects[type].nodes.map(node => html`
                <div class="dot-list">
                  <div class="dot-wrapper">
                    <div class="dot" type="${type}"></div>
                  </div>
                  <div class="dot-list-padding">
                    <a class="internal" href="/map/${this.moment}/${type}/${node['@id']}">
                      ${node.name}
                    </a>
                  </div>
                </div>
              `)}
            </div>
          `)}
        </div>
        <!-- END CLUSTER -->

        <!-- START ITEM -->
        <div id="item">
          <div class="subject-type type-color" type="${this.type}">${this.type}</div>

          <div ?hidden="${!this.isLink}">
            <h3>About the Connection</h3>
            <h2>${this.title}</h2>
          </div>

          <div ?hidden="${!this.isNode}">
            <h1 style="margin-bottom: 3px;">${this.title}</h1>
            <h2 style="margin: 0;">${this.location}</h2>
            <h2 style="margin: 0 0 14px 0;">${this.date}</h2>
          </div>

          <!-- Filled from inside the parent js file -->
          <div id="description"></div>

          <div ?hidden="${!this.isNode}">
            ${this.hasConnections? html`
              <h3 style="margin: 0 0 5px 0;">
                Explore Connections
              </h3>` : html``}
              ${this.connections.map(connection => html`
                <div id="explore-connections" 
                  class="dot-list" 
                  @mouseover="${this._onLinkMouseOver}" 
                  @mouseout="${this._onLinkMouseOut}" 
                  cid="${connection.id}">
                  <div class="dot-wrapper">
                    <div class="dot" type="${connection.type}"></div>
                  </div>
                  <div>
                    <a class="internal" href="/map/${this.moment}/connection/${connection.id}">
                      <strong><em>${connection.connection}</em></strong>&nbsp;${connection.name}
                    </a>
                  </div>
                </div>
              `)}
          </div>
          <div ?hidden="${!this.isLink}">
            <h3>Connection Subjects</h3>
            ${this.connectionSubjects.map(node => html`
              <div class="dot-list">
                <div class="dot-wrapper">
                  <div class="dot" type="${node.type}"></div>
                </div>
                <div>
                  <a class="internal" href="/map/${this.moment}/${node.type}/${node['@id']}">
                    ${node.name}
                  </a>
                </div>
              </div>
            `)}
          </div>

          <div ?hidden="${!this.relatedLinks.length}">
            <h3>Learn More</h3>
            <div class="related-links">
            ${this.relatedLinks.map(link => html`
              <div class="link-wrapper">
                <div class="icon-wrapper">
                  <iron-icon class="external-link" icon="intert-wine-icons:link" type="${this.type}"></iron-icon>
                </div>
                <div>
                  <a class="external type-color" type="${this.type}" href="${link.fullLink}" target="_blank">
                    ${link.shortLink}
                  </a>
                  <span>&quot;${link.title}&quot;</span>
                </div>
              </div>
            `)}
            </div>
          </div>

          ${this.imageCreditTitle ? html`<div class="imageCredit">
            Image Credit: <a href="${this.imageCreditLink}" target="_blank">${this.imageCreditTitle}</a>
          </div>` : html``}
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
