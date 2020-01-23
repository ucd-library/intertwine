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

      .image {
        margin-top: 10px;
        height: 150px;
        width: 150px;
        background-size: contain;
        border: 1px dashed gray;
      }
    </style>

    <section class="content" role="main">
      <h1 class="page-title">Moments</h1>

      <div class="card-wrapper">
        <div class="card">
          <h1 style="margin-bottom: 0px;">${this.moments[0].name}</h1>
          <h2 style="margin: 0px;">${this.moments[0].location}</h2>
          <h2 style="margin-top: 0px;">
            ${this.moments[0].temporal}
            <!-- this.moments[0].temporal.replace('/', ' - ')-->
          </h2>
          <a class="btn" href="${this.momentUrl}">
            Read More
          </a>
          <div class="image" style="background-image: url('${this.endpoint}/${this.moments[0].thumbnail}')"></div>
        </div>
      </div>
    </section>
`;}
