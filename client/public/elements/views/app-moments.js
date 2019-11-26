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
    let data = await this.MomentModel.get(e.moment);

    if ( data.state === 'loaded' ) {
      let payload = data.payload;
      let moment = payload['@graph'].filter(data => data['@type'].includes('ldp:Container'));

      this.moments = moment;
      console.log(this.moments);
    }
  }
}

customElements.define('app-moments', AppMoments);
