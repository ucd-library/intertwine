import { html } from 'lit-element';

export default function render() {
return html`
  <style>
    :host {
      display: block;
      width: 100%;
      height: 60px;
      background-color: black;
      color: white;
      z-index: 10000;
    }

    .layout {
      margin: 0 0 0 20px;
      display: flex;
      height: 100%;
      align-items: center;
      -webkit-box-shadow: -2px 0px 6px 0px rgba(50, 50, 50, 0.75);
      -moz-box-shadow:    -2px 0px 6px 0px rgba(50, 50, 50, 0.75);
      box-shadow:         -2px 0px 6px 0px rgba(50, 50, 50, 0.75);
    }

    h1 {
      font-weight: 400;
      margin: 0;
      padding: 0;
      flex: 1;
    }

    .title-extra {
      font-weight: 200;
    }

    a {
      display: inline-block;
      cursor: pointer;
      color: white;
      text-decoration: none;
    }

    .about:hover {
      font-weight: bold;
    }

    .image {
      padding: 15px 20px;
      background-color: var(--app-color-interface-blue );
    }

    .image:hover {
      background-color: var(--app-color-secondary-blue);
    }

    img {
      vertical-align: middle;
    }

    @media(max-width: 825px) {
      .title-extra {
        display: none;
      }
    }
  </style>

  <header class="layout">
    <h1>
      <span><a href="${this.baseUrl}">intertWINE</a></span>
      <span class="title-extra">// California's Modern Wine Network<span>
    </h1>
    <div class="about" style="padding-right: 20px;">
      <a @click="${this._onAboutClick}">ABOUT</a>
    </div>
    <div class="image">
      <a href="https://www.library.ucdavis.edu/" target="_blank">
        <img src="/images/ucd-lib-logo-white.png" />
      </a>
    </div>
  </header>
`;}
