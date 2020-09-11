import { html } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import sharedStyles from './../styles/shared-styles'

import '@polymer/iron-icon';
import '@polymer/iron-icons';

import "./app-story-float-btn";

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

      h3 {
        font-size: 22px;
      }

      h4 {
        font-size: 15px;
        text-transform: uppercase;
      }

      h6 {
        font-size: 13px;
        text-transform: uppercase;
      }

      .capitalize {
        text-transform: capitalize;
      }

      .secondary-blue-bg {
        background-color: var(--app-color-secondary-blue);
      }

      .spacer {
        padding-bottom: 10px;
      }

      .container {
        position: relative;
      }

      .hidden {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s .5s, opacity .5s ease;
      }

      header {
        margin: 0 auto;
        width: 100%;
        background-color: var(--app-color-interface-blue);
      }
      header > .header-image {
        padding-top: 56.25%;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        /* sets reference point to scale from */
      }
      header > .story-header {
        padding: 50px 0;
        color: var(--app-color-white);
        overflow-x: hidden;
      }
      header > .story-header > ul {
        display: flex;
        justify-content: center;
        list-style: none;
        flex-wrap: wrap;
      }
      header > .story-header > ul > li {
        margin: 0 20px;
      }
      header > .story-header > ul > li:first-of-type {
        text-align: right;
      }
      header > .story-header > ul > li > h2 {
        margin-top: 10px;
        margin-bottom: 15px;
        white-space: nowrap;
      }
      header > .story-header > ul > li > h4 {
        font-weight: bold;
        white-space: nowrap;
      }
      header > .story-header > ul > li > .quote {
        min-width: 250px;
        max-width: 300px;
        font-size: 17px;
      }
      header > .story-header > ul > li > .quote > ul.credit {
        margin: 0;
        padding: 0;
        font-size: 13px;
        list-style-type: "\\2013";
        list-style-position: outside;
      }
      header > .story-header > ul > li > .quote > ul.credit > li {
        width: 100%;
        padding: 20px 0 0 10px;
      }

      section.text > .text-blocks {
        margin: 0 auto;
        padding: 75px;
        max-width: 750px;
        color: var(--app-color-charcoal);
        font-size: 15px;
        font-weight: regular;
      }

      section.text:nth-of-type(odd) {
        background-color: var(--app-color-white);
      }

      section.text:nth-of-type(even) {
        background-color: var(--app-color-smoke);
      }

      .textimage,
      .imagetext {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        /* background-color: var(--app-color-smoke); */
      }
      .textimage > div,
      .imagetext > div {
        padding: 75px;
        width: 50%;
        position: relative;

        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        /* sets reference point to scale from */
      }
      .textimage > .text-blocks,
      .imagetext > .text-blocks {
        padding: 75px;
      }
      .textimage > .text-blocks > p,
      .imagetext > .text-blocks > p {
        max-width: 550px;
      }
      .textimage > .image,
      .imagetext > .image {
        padding: 75px;
        min-height: 700px;
        position: relative;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }

      .textimage > .image > span,
      .imagetext > .image > span {
        padding: 5px 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 14px;
        color: var(--app-color-white);
        background: rgba(0, 0, 0, 0.65);
      }

      .textimage div.text-blocks {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      .textimage div.text-blocks > p,
      .textimage div.text-blocks > h1 {
        border: 1px solid red;
      }

      div.triptych {
        display: flex;
        width: 100%;
        padding: 10px 0;
        justify-content: center;
        align-items: flex-end;
        flex-direction: row;
        background-color: var(--app-color-white);
      }

      div.triptych > div {
        display: flex;
        align-items: flex-end;
        padding-top: 18.5%;
        width: 33%;
        max-height: 200px;

        color: var(--app-color-white);
        text-align: bottom;

        background-color: var(--app-color-charcoal);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      div.triptych > div:nth-of-type(2),
      div.triptych > div:nth-of-type(3) {
        margin: 0 0 0 10px;
      }
      div.triptych > div > span {
        padding: 10px 20px;
        color: var(--app-color-white);
        background: rgba(0, 0, 0, 0.5);
      }

      footer > .map-wrapper {
        display: flex;
        flex-direction: row;
      }
      footer > .map-wrapper > .map,
      footer > .map-wrapper > .explore-map {
        padding: 75px;
        width: 50%;
      }
      footer > .map-wrapper > .explore-map {
        background-color: var(--app-color-interface-blue);
      }
      footer > .map-wrapper > .map {
        min-height: 200px;
        background-image: url("/images/worldmap.jpg");
        background-position-y: center;
        background-position-x: center;
      }
      footer > .map-wrapper > .explore-map > div,
      footer > .map-wrapper > .explore-map > div > p {
        color: var(--app-color-white);
      }
      footer > .map-wrapper > .explore-map > div > iron-icon.explore-map-icon {
        margin-right: 10px;
        display: inline-block;
        vertical-align: top;
        width: 40px;
        height: 40px;
      }
      footer > .bottom-content {
        padding: 30px 30px 50px 30px;
        background-color: var(--app-color-black);
        color: var(--app-color-stone);
      }
      footer > .bottom-content h6 {
        margin-bottom: 15px;
        font-size: 15px;
        font-weight: bold;
      }
      footer > .bottom-content a {
        color: var(--app-color-stone);
        font-size: 13px;
      }
      footer > .bottom-content > ol {
        margin: 0;
        padding-left: 40px;
        counter-reset: my-awesome-counter;
        list-style: none;
      }
      footer > .bottom-content > ol > li {
        position: relative;
        padding-bottom: 15px;
        counter-increment: my-awesome-counter;
        color: var(--app-color-stone);
        font-size: 13px;
      }
      footer > .bottom-content > ol > li::before {
        position: absolute;
        top: -1px;
        left: -2.0rem;
        content: counter(my-awesome-counter);
        color: var(--app-color-stone);
        font-weight: bold;
        font-size: 13px;
      }

      @media screen and (min-width: 700px) and (max-width: 999px) {
        section.text,
        .textimage > div,
        .textimage > .text-blocks,
        .textimage > .image,
        .imagetext > div,
        .imagetext > .text-blocks,
        .imagetext > .image,
        footer > .map-wrapper > .map,
        footer > .map-wrapper > .explore-map {
          padding: 50px;
        }
      }

      @media screen and (max-width: 699px) {
        header > .story-header > ul > li:first-of-type {
          text-align: initial;
        }
        header > .story-header {
          padding: 20px 0;
          color: var(--app-color-white);
          overflow-x: hidden;
        }
        header > .story-header > ul {
          justify-content: flex-start;
        }
        header > .story-header > ul > li {
          margin: initial;
        }
        header > .story-header > ul > li > .quote {
          max-width: 100%;
        }

        section.text,
        .textimage > div,
        .textimage > .text,
        .textimage > .image,
        .imagetext > div,
        .imagetext > .text,
        .imagetext > .image,
        footer > .map-wrapper > .map,
        footer > .map-wrapper > .explore-map {
          padding: 20px;
        }

        .textimage,
        .imagetext {
          flex-direction: column;
        }
        .textimage > div,
        .imagetext > div {
          width: 100%;
        }

        div.triptych {
          height: initial;
          flex-direction: column;
          align-items: stretch;
        }
        div.triptych > div {
          padding-top: 56.25%;
          width: 100%;
        }
        div.triptych > div:first-of-type,
        div.triptych > div:nth-of-type(2) {
          margin: 0 0 10px 0;
        }
        div.triptych > div:nth-of-type(3) {
          margin: 0;
        }

        footer > .map-wrapper {
          flex-direction: column;
        }

        footer > .map-wrapper > .map,
        footer > .map-wrapper > .explore-map {
          width: 100%;
        }
      }
    </style>

    <div id="container" class="container" role="main">
      <header>
        <div class="header-image" style="background-image: url('${this.headerImgUrl}');"></div>
        <div class="story-header">
          <ul>
            <li>
              <h4>moments in wine history</h4>
              <h2 class="inverse capitalize">${this.title}</h2>
            </li>

            <li>
              ${this.story.quote ? html`<div class="quote">
                <em>${this.story.quote.description[1]}</em>
                <ul class="credit">
                  <li>${this.story.quote.description[0]}</li>
                </ul>
              </div>` : html``}
            </li>
          </ul>
        </div>
      </header>

      <div style="position: -webkit-sticky; position: sticky; top: 100%; z-index: 1; bottom: 0;">
        <app-story-float-btn id="floatBtn" @click="${this._launchMap}"></app-story-float-btn>
      </div>

      ${this.orderedStory.map(p => html`
        <section class="${p.label}">
          ${p.label === 'text' ? html`
            <div class="text-blocks">
              <h1 ?hidden="${!p.headline}">${p.headline}</h1>
              ${Array.isArray(p.text) ? html`${p.text.map((p) => html`<p>${p}</p>`)}` : html`${p.text}`}
            </div>` : html ``}

          ${p.label === 'imagetext' ? html`
            ${p.thumbnail ? html`<div class="image" style="background-image: url('${this.endpoint}/${this.moment}/${p.thumbnail}');">
              <span>${p.caption}</span>
            </div>` : html`<div class="image" style="background-image: url('${p.src}');"><span>${p.caption}</span></div>`}
            <div class="text-blocks">
              <h1 ?hidden="${!p.headline}">${p.headline}</h1>
              ${Array.isArray(p.text) ? html`${p.text.map((p) => html`<p>${p}</p>`)}` : html`<p>${p.text}</p>`}
            </div>` : html``}
          
          ${p.label === 'textimage' ? html`
            <div class="text-blocks">
              <h1 ?hidden="${!p.headline}">${p.headline}</h1>
              ${Array.isArray(p.text) ? html`${p.text.map((p) => html`<p>${p}</p>`)}`:html`<p>${p.text}</p>`}
            </div>
            <div class="image" style="background-image: url('${this.endpoint}/${this.moment}/${p.thumbnail}');">
              <span>${p.caption}</span>
            </div>` : html``}
          
          ${p.label === 'triptych' && p[`@id`] ? html`
            <div class="triptych">
              ${repeat(p.image, (i) => html`
                <div style="background-image: url('${this.endpoint}/${this.moment}/${p[`@id`]}/${i.contentUrl}');">
                  <span>${i.caption}</span>
                </div>`)}
            </div>` : html``}
        </section>
      `)}     

      <footer>
        <div class="map-wrapper">
          <div class="map"></div>
          <div class="explore-map">
            <div class="map-textbox-wrapper">
              <iron-icon class="explore-map-icon" icon="intert-wine-icons:explore"></iron-icon>
              <span style="display: inline-block;">
                <h4>Explore the Map</h4>
                <h3 class="inverse capitalize">${this.title}</h3>
              </span>
              <p>
                Learn more about how the people, locations, and wines are connected to
                the <span class="capitalize">${this.title}</span> via the network map of this story in wine history.
              </p>
              <a @click="${this._launchMap}" class="btn inverse">Launch Map</a>
            </div>
          </div>
        </div>

        ${this.story.sources ? 
          html`<div class="bottom-content">
            <h6>Sources</h6>
            <ol>
            ${this.sources.map((source) => html`
              <li>
                <em>
                  ${source.text}
                  <a ?hidden="${!source.link}" href="${source.href}">${source.link}</a>
                </em>
              </li>
            `)}
            </ol>
          </div>` : html``
        }
      </footer>
  </div>
`}
