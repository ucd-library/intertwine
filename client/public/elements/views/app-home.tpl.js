import { html } from 'lit-element';
import sharedStyles from './../styles/shared-styles'

export default function render() {
  return html`
    ${sharedStyles}
    <style>
      :host {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow-y: auto;
        background-color: var(--app-color-smoke);
        background: no-repeat url('./../../images/background.png');
      }

      header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        margin-bottom: 50px;
        padding: 50px 0;
        background-color: var(--app-color-interface-blue);
        background-image: url('./../../images/header-connectedicons.svg');
      }

      header > div {
        max-width: 400px;
        color: white;
      }

      header > div > h1 {
        color: white;
        font-size: 30px;
        font-weight: normal;
        line-height: 35px;
        background-color: var(--app-color-interface-blue);
      }

      header .text-block {
        background-color: var(--app-color-interface-blue);
      }

      main {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }

      main > div {
        width: 600px;
        margin-bottom: 30px;
      }

      main > div:first-of-type {
        margin-right: 30px;
      }

      .card {
        background-color: white;
      }

      .card .feature-img {
        width: 600px;
        height: 300px;
      }

      .card .chardonnay {
        background-image: url('./../../images/chardonnaygrapes.jpg');
        background-repeat: no-repeat;
        background-size: cover;
      }

      .card .jop {
        background-image: url('./../../images/jop.jpg');
        background-repeat: no-repeat;
        background-size: cover;
      }

      .card .content {
        padding: 30px;
        font-size: 15px;
      }

      .card .content h4 {
        margin: 0;
        font-size: 20px;
      }

      .card .content em {
        font-size: 17px;
      }

      .card .footer {
        padding: 0 0 30px 0;
        color: var(--app-color-interface-blue);
        font-weight: bold;
        font-size: 15px;
        text-transform: capitalize;
        text-align: center;
      }

      .card .footer .separator {
        margin: 0 14px 0 10px;
        border-right: 1px solid #D4DADC;
      }

      .card .footer iron-icon {
        font-size: 30px;
      }

      @media(max-width: 1220px) {
        main > div:first-of-type {
          margin-right: 0px;
        }
      }
    </style>

    <header>
      <div style="text-align: right; margin-right: 30px;">
        <h1>
          Enter a Moment in
          <br />
          California Wine History
        </h1>
      </div>
      <div class="text-block" style="font-size: 17px;">
        Get the story behind the people, places, and things connected to a particular time
        or event in wine history, then dive into an interactive map to explore the
        specific connections between them.
      </div>
    </header>

    <main>
      <div>
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
            Read Story <iron-icon icon="intert-wine-icons:book"></iron-icon>
            <span class="separator"></span>
            <iron-icon icon="intert-wine-icons:explore"></iron-icon> Explore Map
          </div>
        </div>
      </div>

      <div>
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
            Read Story <iron-icon icon="intert-wine-icons:book"></iron-icon>
            <span class="separator"></span>
            <iron-icon icon="intert-wine-icons:explore"></iron-icon> Explore Map
          </div>
        </div>
      </div>
    </main>
`;}
