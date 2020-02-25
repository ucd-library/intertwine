import { html } from 'lit-element';
import sharedStyles from './../styles/shared-styles'

import '@polymer/iron-icon';
import '@polymer/iron-icons';

import "./app-moment-float-btn";

export default function render() {
  return html`
    ${sharedStyles}
    <style>
      :host {
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      #container {
        height: 100%;
        overflow-y: auto;
      }

      h1, h2, h3, h4, h5, h6 {
        margin: 0px;
        padding: 0px;
        font-style: normal;
      }

      h1 {
        font-size: 20px;
      }

      h2 {
        font-size: 30px;
        line-height: 1.0em;
      }

      h4 {
        font-size: 15px;
        font-weight: bold;
        text-transform: uppercase;
      }

      h6 {
        font-size: 13px;
        text-transform: uppercase;
      }

      .secondary-blue-bg {
        background-color: var(--app-color-secondary-blue);
      }

      .bg-white {
        background-color: white;
      }

      .bg-tan {
        background-color: #F3F2F0;
      }

      .d-flex {
        display: flex;
      }

      .w-50 {
        width: 50%;
      }

      .w-100 {
        width: 100%;
      }

      .container {
        position: relative;
      }

      .container header {
        margin: 0 auto;
        width: 100%;
        background-color: var(--app-color-interface-blue);
      }

      .container header .header-image {
        width: 100%;
        height: 790px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        /* sets reference point to scale from */
      }

      .container header .moment-header {
        padding: 50px 0;
        color: white;
        overflow-x: hidden;
      }

      .container header .moment-header ul {
        display: flex;
        justify-content: center;
        list-style: none;
        flex-wrap: wrap;
      }

      .container header .moment-header ul li {
        margin: 0 10px;
      }

      .container header .moment-header ul li h2 {
        margin-top: 15px;
        margin-bottom: 15px;
        font-size: 30px;
        font-weight: normal;
        white-space: nowrap;
      }

      .container header .moment-header ul li h4 {
        font-size: 15px;
        font-weight: bold;
        white-space: nowrap;
      }

      .container header .moment-header ul li .quote {
        min-width: 250px;
        max-width: 300px;
        font-style: italic;
        font-size: 17px;
      }

      .container header .moment-header ul li .quote ul.credit {
        margin: 0;
        padding: 0;
        font-size: 1.0rem;
        list-style-type: '-';
        list-style-position: outside;
      }

      .container header .moment-header ul li .quote ul.credit li {
        padding: 20px 0 0 10px;
      }

      .container .text-blocks {
        margin: 0 auto;
        padding: 75px 0;
        max-width: 750px;
        color: #333333;
        font-size: 15px;
        font-weight: regular;
      }

      .container .text-blocks p,
      .container .text-blocks h1 {
        margin: 0 auto;
        padding: 10px 75px;
      }

      .container .text-blocks h1 {
        padding-bottom: 14px;
      }

      .container .text-blocks p {
        padding-top: 0px;
      }

      .container .text-image-pairing {
        display: flex;
        flex-direction: row;
      }

      .container .text-image-pairing>div {
        width: 50%;
      }

      .container .text-image-pairing .image {
        margin: 0 auto;
        display: flex;
        align-items: flex-end;
        min-height: 750px;
        background-size: cover;
        background-repeat: no-repeat;
      }

      .container .text-image-pairing .image span {
        padding: 10px 20px;
        color: white;
        background: rgba(0, 0, 0, 0.5);
      }

      .container .text-image-pairing .wentechardonnay {
        min-height: 700px;
        background-size: cover;
        background-position-y: bottom;
        background-position-x: center;
        background-repeat: no-repeat;
      }

      .container .triptych {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: flex-end;
        flex-direction: row;
      }

      .container .triptych div {
        display: flex;
        align-items: flex-end;
        width: 33%;
        height: 200px;
        color: white;
        background-color: var(--app-color-charcoal);
        background-size: cover;
        text-align: bottom;
      }

      .container .triptych div:nth-of-type(2),
      .container .triptych div:nth-of-type(3) {
        margin: 0 0 0 10px;
      }

      .container .triptych div span {
        padding: 10px 20px;
        color: white;
        background: rgba(0, 0, 0, 0.5);
      }

      .container footer .map-wrapper .map {
        padding: 75px;
        background-image: url("../../images/worldmap.jpg");
        background-position-y: center;
        background-position-x: center;
      }

      .container footer .map-wrapper .explore-map {
        padding: 75px;
        color: white;
        background-color: var(--app-color-interface-blue);
      }

      .container footer .map-wrapper .explore-map iron-icon.explore-map-icon {
        margin-right: 10px;
        display: inline-block;
        vertical-align: top;
        width: 55px;
        height: 55px;
      }

      .container footer .bottom-content {
        padding: 30px 30px 50px 30px;
        background-color: black;
        color: #F3F2F0;
      }

      .container footer .bottom-content h6 {
        margin-bottom: 15px;
        font-size: 15px;
        font-weight: bold;
      }

      .container footer .bottom-content a {
        color: #F3F2F0;
        font-size: 13px;
      }

      .container footer .bottom-content ol {
        list-style: none;
        counter-reset: my-awesome-counter;
        margin: 0;
        padding: 0;
      }

      .container footer .bottom-content ol li {
        counter-increment: my-awesome-counter;
        padding-bottom: 15px;
        font-size: 13px;
        color: #F3F2F0;
      }

      .container footer .bottom-content ol li::before {
        content: counter(my-awesome-counter);
        font-weight: bold;
        font-size: 13px;
        margin-left: 0;
        margin-right: 1.0rem;
      }

      @media screen and (min-width: 700px) and (max-width: 999px) {
        .container .text-blocks p,
        .container .text-blocks h1 {
          padding: 10px 50px;
        }
        .container .map-wrapper .explore-map {
          padding: 50px;
        }
      }

      @media screen and (max-width: 699px) {
        .container .text-image-pairing {
          flex-direction: column;
        }
        .container .text-image-pairing>div {
          width: 100%;
        }
        .container .text-blocks p,
        .container .text-blocks h1 {
          padding: 10px 20px;
        }
        .container .map-wrapper .explore-map {
          padding: 20px;
        }
        .container .triptych {
          height: initial;
          flex-direction: column;
          align-items: stretch;
        }
        .container .triptych div {
          width: 100%;
        }
        .container .triptych div:first-of-type,
        .container .triptych div:nth-of-type(2) {
          margin: 0 0 10px 0;
        }
        .container .triptych div:nth-of-type(3) {
          margin: 0;
        }
      }
    </style>

    <div id="container" class="container" role="main">
      <header>
        <div class="header-image" style="background-image: url('../../images/${this.moment.headerImage}');"></div>
        <div class="moment-header">
          <ul>
            <li style="text-align: right;">
              <h4>moments in wine history</h4>
              <h2 class="inverse">${this.moment.title}</h2>
            </li>

            <li>
              <div class="quote">
                ${this.moment.quote.text}
                <ul class="credit">
                  <li>
                    ${this.moment.quote.credit}<br />
                    ${this.moment.quote.src}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </header>

      <div style="position: -webkit-sticky; position: sticky; top: 100%; z-index: 1; bottom: 0;">
        <app-moment-float-btn id="floatBtn"></app-moment-float-btn>
      </div>

      <section class="text-blocks bg-white">
        ${this.moment.text1.paragraphs.map(paragraph => html`<p>${paragraph}</p>`)}
      </section>

      <section class="text-image-pairing bg-tan">
        <div class="image" style="background-image: url('../../images/${this.moment.text2.image.src}');">
          <span>${this.moment.text2.image.title}</span>
        </div>

        <div class="text-blocks">
          <h1>${this.moment.text2.title}</h1>
          ${this.moment.text2.paragraphs.map(paragraph => html`<p>${paragraph}</p>`)}
        </div>
      </section>

      <section class="text-blocks bg-white">
        <h1>${this.moment.text3.title}</h1>
        ${this.moment.text3.paragraphs.map(paragraph => html`<p>${paragraph}</p>`)}
      </section>

      <div class="triptych">
        ${this.moment.triptych.map(image => html`
          <div style="background-image: url('../../images/${image.src}');"><span>${image.title}</span></div>
        `)}
      </div>

      <section class="text-blocks bg-white">
        <h1>${this.moment.text4.title}</h1>
        ${this.moment.text4.paragraphs.map(paragraph => html`<p>${paragraph}</p>`)}
      </section>

      <section class="text-image-pairing bg-tan">
        <div class="text-blocks">
          <h1>${this.moment.text5.title}</h1>
          ${this.moment.text5.paragraphs.map(paragraph => html`<p>${paragraph}</p>`)}
        </div>
        <div class="image" style="background-image: url('../../images/${this.moment.text5.image.src}');"></div>
      </section>

      <footer>
        <div class="map-wrapper w-100 d-flex">
          <div class="map w-50"></div>
          <div class="explore-map w-50">
            <iron-icon class="explore-map-icon" icon="intert-wine-icons:explore"></iron-icon>
            <span style="display: inline-block;">
              <h6>Explore the Map</h6>
              <h2 class="inverse">${this.moment.title}</h2>
            </span>
            <br />
            Learn more about how the people, locations, and wines are connected to the ${this.moment.title} via the network
            map of this moment in wine history.
            <br /><br />
            <a @click="${this._launchMap}" class="btn inverse">Launch Map</a>
          </div>
        </div>

        <div class="bottom-content">
          <h6>Sources</h6>
          <ol>
          ${this.moment.sources.map(source => html`
            <li>
              <em>
                ${source.text}
                <a ?hidden="${!source.link}" href="${source.href}">${source.link}</a>
              </em>
            </li>
          `)}
          </ol>
      </div>
      </footer>
    </div>
`;}
