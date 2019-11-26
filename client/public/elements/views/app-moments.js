import { LitElement } from 'lit-element';
import render from './app-moments.tpl.js'

export default class AppMoments extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      moment: { type: String },
      moments: { type: Array }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.moment  = '';
    this.moments = [];

    this._injectModel('MomentModel', 'AppStateModel');
  }

  async _onAppStateUpdate(e) {
    let data = await this.MomentModel.get(e.moment);
    this.moment  = data.id;
    console.log(this.moment);

    if ( data.state === 'loaded' ) {
      let payload = data.payload;
      console.log(payload);
    }

    //this.moments = _moments.payload.graph.nodeArray;

    // The moment => Chardonnay
    //console.log(this.moments);

    //this.moments = this._copyMockData(6);
  }

  // TODO: remove, outdated
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
