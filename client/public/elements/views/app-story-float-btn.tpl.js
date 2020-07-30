import { html } from 'lit-element';
import sharedStyles from '../styles/shared-styles';

import '@polymer/iron-icon';
import '@polymer/iron-icons';

export default function render() {
  return html`
  ${sharedStyles}
  <style>
    .floating-btn {
      position: absolute;
      bottom: 14px;
      right: 0px;

      font-weight: normal;
      text-transform: none;

      border: 0;
      white-space: nowrap;

      /*background-color: var(--app-color-charcoal);*/
      background-color: var(--app-color-secondary-blue);

      -webkit-box-shadow: -2px 0px 6px 0px rgba(50, 50, 50, 0.3);
      -moz-box-shadow:    -2px 0px 6px 0px rgba(50, 50, 50, 0.3);
      box-shadow:         -2px 0px 6px 0px rgba(50, 50, 50, 0.3);

      visibility: visible;
      opacity: 1;
      transition: visibility 0s .5s, opacity .5s ease;
    }

    .floating-btn:hover {
      background-color: var(--app-color-charcoal);
    }
  </style>

  <button class="floating-btn btn">
    <iron-icon class="explore-map-icon" icon="intert-wine-icons:explore"></iron-icon>
    Explore the Map
    <iron-icon class="chevron-right" icon="chevron-right"></iron-icon>
  </button>
  `;
}
