import { LitElement } from 'lit-element';
import render from './app-moments.tpl.js'

export default class AppMoments extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      moments: { type: Array }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.moments = [];

    this._injectModel('MomentModel', 'AppStateModel');
  }

  async _onAppStateUpdate(e) {
    let _moments = await this.MomentModel.get(e.moment);
    this.moments = [_moments.payload];
    this.moments = this._copyMockData(10);
  }

  _copyMockData(numCopies) {
    const nestedArray = this.moments;
    let nestedCopy = [...nestedArray];

    // If not specified send back 1 copy
    if (!numCopies || numCopies === 0 || numCopies === 1) return [...nestedArray, ...nestedCopy];

    let result = [];
    for ( let i = 0; i < numCopies; i++ ) {
      result = [...result, ...nestedCopy];
    }
    return result;
  }
}

customElements.define('app-moments', AppMoments);
