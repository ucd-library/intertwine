import { html } from 'lit-element';

export default function render() {
return html`
  <style>
    :host {
      display: block;
      width: 100%;
      height: 60px;
      background-color: var(--app-color-black);
      color: var(--app-color-white);
      z-index: 10000;

      -webkit-box-shadow: 0px 0px 6px 2px rgba(50, 50, 50, 0.75);
      -moz-box-shadow:    0px 0px 6px 2px rgba(50, 50, 50, 0.75);
      box-shadow:         0px 0px 6px 2px rgba(50, 50, 50, 0.75);
    }

    .layout {
      margin: 0 0 0 20px;
      display: flex;
      height: 100%;
      align-items: center;
    }

    h1 {
      flex: 1;
      margin: 0;
      padding: 0;
      font-size: 20px;
      font-weight: 400;
    }

    .title-extra {
      color: var(--app-color-pewter);
      font-weight: 200;
    }

    a {
      cursor: pointer;
      color: var(--app-color-white);
      text-decoration: none;
    }

    .about {
      padding-right: 20px;
    }

    .about:hover {
      font-weight: bold;
    }

    .about > a {
      display: inline-block;
    }

    .logo {
      display: block;
      width: 145px;
      height: 100%;
      background-image: url('/images/ucd-lib-logo-white.png');
      background-repeat: no-repeat;
      background-position: 20px 16px;
      background-color: var(--app-color-interface-blue);
      background-size: initial;
    }

    .logo:hover {
      background-color: var(--app-color-secondary-blue);
    }

    @media(max-width: 825px) {
      .title-extra {
        display: none;
      }
    }

    @media(max-width: 414px) {
      :host {
        height: 50px;
      }

      .logo {
        width: 50px;
        background-image: url('/images/ucd_lib-logo-nowords.svg');
        background-position: center;
        background-size: 37% auto;
      }
    }
  </style>

  <header class="layout">
    <h1>
      <span><a href="${this.baseUrl}">intertWINE</a></span>
      <span class="title-extra">// ${this.subtitle}</span>
    </h1>
    <div class="about">
      <a @click="${this._onAboutClick}">ABOUT</a>
    </div>
    <a class="logo" href="https://www.library.ucdavis.edu/" title="UC Davis Library Home Page" target="_blank"></a>
  </header>
`;}
