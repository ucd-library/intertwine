import { html } from 'lit-element'
import sharedStyles from './styles/shared-styles'

export default function render() {
return html`
  ${sharedStyles}
  <style>
    :host {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      
      background-color: var(--app-color-smoke);
      background-image: url('/images/background.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }

    #offline {
      padding-top: 50px;
      text-align: center;
    }

    #offline iron-icon {
      color: var(--app-color-scarlet);
      --iron-icon-height: 40px;
      --iron-icon-width: 40px;
    }

    #offline h1 {
      margin-top: 25px;
      font-size: 30px;
      color: var(--app-color-charcoal);
    }

    #offline p {
      color: var(--app-color-charcoal);
    }

    .layout {
      /* min-height: 100vh; */
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    iron-pages {
      flex: 1;
      align-self: stretch;
      position: relative;
    }
  </style>

  <app-route .appRoutes="${this.appRoutes}"></app-route> 

  <div class="layout">
    <app-header></app-header>

    <section id="offline" ?hidden="${!this.offline}">
      <iron-icon class="error" icon="error"></iron-icon>      
      <h1>
        IntertWINE is currently offline
      </h1>
      <p>
        It seems we're experiencing some technical difficulties. Sorry for the inconvenience!
      </p>
    </section>

    <iron-pages ?hidden="${this.offline}" selected="${this.view}" attr-for-selected="id" selected-attribute="visible">
      <app-home id="home"></app-home>
      <app-about id="about"></app-about>
      <app-story id="story"></app-story>
      <app-view-map id="map"></app-view-map>
    </iron-pages>
  </div>
`;}
