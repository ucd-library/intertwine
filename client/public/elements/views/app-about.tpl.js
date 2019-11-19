import { html } from 'lit-element';
import sharedStyles from './../styles/shared-styles'

export default function render() {
  return html`
  ${sharedStyles}
  <style>
    :host {
      background-color: white;
      display: block;
    }

    main {
      padding: 10px;
    }
  </style>

  <div class="content">
    <main>
      <h1>About IntertWINE</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </main>
  </div>
`;}
