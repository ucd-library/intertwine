import { html } from 'lit-element';
import sharedStyles from './../styles/shared-styles'

import '@polymer/iron-icon';
import '@polymer/iron-icons';

import "./moments/app-moment-float-btn";

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
    </style>

    ${this.selectedMoment === 'chardonnay' ?
      html`<app-moment-chardonnay></app-moment-chardonnay>` :
      html`<app-moment-jop></app-moment-jop>`
    }
`;}
