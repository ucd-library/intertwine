import { LitElement } from 'lit-element';
import render from './app-moments.tpl.js'

export default class AppMoments extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      endpoint: { type: String },
      momentUrl: { type: String },
      moments: { type: Array }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.endpoint = APP_CONFIG.endpoint;
    this.moments = [];

    this._injectModel('MomentModel', 'AppStateModel');
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update events
   *
   * @param {Object} e
   */
  async _onAppStateUpdate(e) {
    this.selectedMoment = e.moment;

    let data = await this.MomentModel.get(e.moment);

    if ( data.state === 'loaded' ) {
      let payload = data.payload;
      let moment  = payload['@graph'].filter(data => data['type'] === 'event');

      this.moments = moment;

      this.momentUrl = `/map/${this.selectedMoment}/${this.moments[0].type}/${this.moments[0]['@id']}`;
    }
  }
}

customElements.define('app-moments', AppMoments);
