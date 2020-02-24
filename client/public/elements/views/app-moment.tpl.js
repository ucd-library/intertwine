import { html } from 'lit-element';
import sharedStyles from './../styles/shared-styles'

import '@polymer/iron-icon';
import '@polymer/iron-icons';

import "./app-moment-float-btn";

export default function render() {
  return html`
    ${sharedStyles}
    <link rel="stylesheet" type="text/css" href="../elements/styles/custom_styles.css">
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
