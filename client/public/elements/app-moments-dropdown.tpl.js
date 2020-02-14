import { html } from 'lit-element'
import sharedStyles from './styles/shared-styles'

export default function render() {
return html`
  ${sharedStyles}
  <style>
    :host {
      display: block;
    }

    #moments {
      padding: 5px 30px 5px 10px;
      font-size: 1.0rem;
      border: none;
      height: 30px;
      background-color: white;
    }
  </style>

  <select name="moments" id="moments" @change=${e => this._onSelectMomentChange(e.currentTarget.value)}>
    ${this.moments.map(moment => html`
      <option value="${moment}" ?selected=${this.selectedMoment === moment}>${moment}</option>
    `)}
  </select>
`;}
