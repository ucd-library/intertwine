import { html } from 'lit-element';
import sharedStyles from './../styles/shared-styles'

export default function render() {
  return html`
  ${sharedStyles}
  <style>
    :host {
      background-color: pink;
    }
  </style>

  <div class="content">
    <h1>About IntertWINE</h1>
  </div>
`;}
