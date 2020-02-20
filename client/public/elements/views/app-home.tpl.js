import { html } from 'lit-element';

export default function render() {
  return html`
    <style>
      :host {
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow-y: auto;
        background-color: var(--app-color-smoke);
        background-image: url('./../../images/background.png');
        background-repeat: no-repeat;
        background-attachment: fixed;
      }

      header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        flex-shrink: 0;

        height: 200px;
        min-height: 200px;

        background-color: var(--app-color-interface-blue);
        background-image: url('./../../images/header-connectedicons.svg');
        background-repeat: no-repeat;
        background-size: 1500px 1500px;
        background-position: center center;
      }

      header > div {
        align-self: top;
        padding: 50px 15px 50px 15px;
        width: 50%;
        max-width: 400px;
        line-height: 25px;
        color: white;
      }

      header > .text-block {
        padding: 50px 15px 50px 15px;
      }

      header > div:first-of-type {
        text-align: right;
      }

      header > div > h1 {
        margin: 0;
        padding: 0;
        color: white;
        font-size: 30px;
        font-weight: normal;
        line-height: 35px;
      }

      .arrow-down {
        margin-bottom: 20px;
        height: 32px;
        position: relative;
        text-align: center;
      }

      .arrow-down::after {
        display: inline-block;
        width: 0;
        height: 0;
        content: '';
        border-top: 20px solid var(--app-color-interface-blue);
        border-right: 20px solid transparent;
        border-left: 20px solid transparent;
      }

      main {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 30px;
      }

      main > div {
        width: 48%;
        max-width: 600px;
        margin-bottom: 30px;
      }

      main > div:first-of-type {
        margin-right: 15px;
      }

      main > div:last-of-type {
        margin-left: 15px;
      }

      .card {
        background-color: white;
      }

      .card .feature-img {
        width: 100%;
        height: 300px;
        max-width: 600px;
        max-height: 300px;
      }

      .card .chardonnay {
        background: url('./../../images/chardonnaygrapes.jpg') no-repeat center;
        background-size: cover;
      }

      .card .jop {
        background: url('./../../images/jop.jpg') no-repeat center;
        background-size: cover;
      }

      .card .content {
        padding: 30px;
        font-size: 15px;
      }

      .card .content h4 {
        margin: 0 0 10px 0;
        font-size: 20px;
      }

      .card .content em {
        font-size: 17px;
      }

      .card .content > p {
        margin: 15px 0 0 0;
        padding: 0;
      }

      .card .footer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 0 30px 0;
        color: var(--app-color-interface-blue);
        font-weight: bold;
        font-size: 15px;
        text-transform: capitalize;
        text-align: center;
      }

      .card .footer > button {
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;
        height: 44px;
        cursor: pointer;

        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;

        color: var(--app-color-interface-blue);
        background-color: initial;
        border: initial;
      }

      .card .footer > button:hover {
        color: var(--app-color-secondary-blue);
      }

      .card .footer > button > iron-icon {
        margin: 0 8px;
      }

      .card .footer > button:first-of-type > span:first-of-type {
        order: 0;
      }

      .card .footer > button:first-of-type > iron-icon {
        top: -4px;
        order: 1;
      }

      .card .footer .separator {
        margin: 0 14px 0 10px;
        height: 30px;
        border-right: 1px solid var(--app-color-pewter);
      }

      .card .footer iron-icon {
        font-size: 30px;
      }

      @media(max-width: 800px) {
        main > div {
          width: 100%;
        }

        main > div:first-of-type {
          margin-right: 0px;
        }

        main > div:last-of-type {
          margin-left: 0px;
        }
      }

      @media (max-width: 590px) {
        header {
          background-image: initial;
        }

        main > div {
          width: 100%;
        }

        main > div:first-of-type {
          margin-right: 0px;
        }

        main > div:last-of-type {
          margin-left: 0px;
        }
      }

      @media(max-width: 414px) {
        header {
          padding: 30px 0;
          flex-wrap: wrap;
        }

        header > div {
          width: 100%;
        }

        header > div:first-of-type {
          text-align: initial;
        }

        header .text-block {
          padding-top: 20px;
        }

        .arrow-down::after {
          display: none;
        }

        .card .footer > button {
          flex-direction: column;
        }

        .card .footer > button:first-of-type > span:first-of-type {
          order: 1;
        }

        .card .footer > button:first-of-type > iron-icon {
          order: 0;
        }

        .card .footer > button > iron-icon {
          align-self: center;
          margin-bottom: 10px;
        }

        .card .footer .separator {
          height: 60px;
        }
      }
    </style>

    <header>
      <div style="float: left;">
        <h1>
          Enter a Moment in
          <br />
          California Wine History
        </h1>
      </div>
      <div class="text-block" style="float: right; font-size: 17px;">
        Get the story behind the people, places, and things connected to a particular time
        or event in wine history, then dive into an interactive map to explore the
        specific connections between them.
      </div>
    </header>
    <div class="arrow-down"></div>

    <main>
      <div id="chardonnay" class="chardonnay">
        <div class="card">
          <div class="feature-img chardonnay"></div>
          <div class="content">
            <h4>Growth of Chardonnay</h4>
            <em>1882 - 1960</em>
            <p>
              If Cabernet Sauvignon is the king of red grapes, Chardonnay is the queen of
              whites. Chardonnay is the most popular wine in the U.S. and has maintained its
              lead for the last decade. Historical references note California plantings of
              Chardonnay dating back to the late 1800s, but production was limited due to low
              yields. This is the story of California Chardonnay pre-1970s, when plantings of
              the grape boomed as the wine grew in popularity.
            </p>
          </div>
          <div class="footer">
            <button name="chardonnay" type="button" @click="${e => this._onReadStoryClick(e.currentTarget.name)}">
              <span>Read Story</span>
              <iron-icon icon="intert-wine-icons:book"></iron-icon>
            </button>
            <span class="separator"></span>
            <button name="chardonnay" type="button" @click="${e => this._onExploreMapClick(e.currentTarget.name)}">
              <iron-icon icon="intert-wine-icons:explore"></iron-icon>
              <span>Explore Map</span>
            </button>
          </div>
        </div>
      </div>

      <div id="jop" class="jop">
        <div class="card">
          <div class="feature-img jop"></div>
          <div class="content">
            <h4>Judgment of Paris</h4>
            <em>1976</em>
            <p>
              The Paris Wine Tasting of 1976 — known as the Judgment of Paris — was a wine
              competition organized in Paris on 24 May 1976 by Steven Spurrier, a British wine
              merchant, in which French judges carried out two blind tasting comparisons: one
              of top-quality Chardonnays and another of red wines.
            </p>
          </div>
          <div class="footer">
            <button name="jop" type="button" @click="${e => this._onReadStoryClick(e.currentTarget.name)}">
              <span>Read Story</span>
              <iron-icon icon="intert-wine-icons:book"></iron-icon>
            </button>
            <span class="separator"></span>
            <button name="jop" type="button" @click="${e => this._onExploreMapClick(e.currentTarget.name)}">
              <iron-icon icon="intert-wine-icons:explore"></iron-icon>
              <span>Explore Map</span>
            </button>
          </div>
        </div>
      </div>
    </main>
`;}
