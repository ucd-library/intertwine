import { html } from 'lit-element'
import sharedStyles from './styles/shared-styles'

export default function render() {
return html`
  ${sharedStyles}
  <style>
    :host {
      display: block;
    }
  </style>

  <select name="moments" id="moments" @change=${e => this.updated(e)}>
    ${this.mocks.map(mock => html`
      <option value="${mock}">${mock}</option>
    `)}
  </select>
`;}
