import { html } from 'lit-element';
import sharedStyles from './../styles/shared-styles'

import "@polymer/iron-icons"

export default function render() {
  return html`
    ${sharedStyles}
    <style>
      :host {
        display: block;
        padding: 2px 10px 10px 10px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-color: white;
      }

      .content {
        overflow: auto;
        height: 100%;
        position: relative;
      }

      .card-wrapper {
        display: flex;
        flex-flow: row wrap;
        align-items: stretch;
        justify-content: space-around;
      }

      .card {
        flex: 1 200px;
        margin: 10px;
        padding: 2px 8px 8px 8px;
        width: 25%;
        box-shadow: 0 0 5px rgba(0, 0, 0, .5);
        border-radius: 5px;
      }

      img {
        display: block;
        max-width: 60%;
        max-height: 150px;
        border-radius: 5px;
      }
    </style>

    <section class="content" role="main">
      <h1 class="page-title">Moments</h1>

      <div class="card-wrapper">
        ${this.moments.map(element => html`
          <div class="card">
            <!--
            <h1>${element.name}</h1>
            <h2 style="margin-bottom: 3px">${element.spatial}</h2>
            <h2 style="margin: 0 0 14px 0">${element.temporal}</h2>
            ${element.mainTopicOfPage ? html`<a href="${element.mainTopicOfPage}" target="_blank">External Link</a>` : ''}
            ${element.thumbnailUrl ? html`<img src="${element.thumbnailUrl}" />` : ''}

            ${this.moment}

            <p>${element.description}</p>

            <div style="width: 100%; padding-top: 5px; text-align: center; border-top: 1px solid gray;">
                <a class="internal" href="/map/${this.moment}/event/${element.mainTopicOfPage}">Learn More</a>
            </div>
            -->
          </div>
        `)}
      </div>
    </section>
`;}
