import { LitElement } from 'lit-element';
import render from './app-moments.tpl.js'

import IntersectionObserver from 'intersection-observer-polyfill';

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

  firstUpdated(changedProperties) {
    this.container = this.shadowRoot.getElementById('container');
    this.container.addEventListener('scroll', e => this._scrollIntoView(e));
  }

  _scrollIntoView(e) {
    // https://www.sitepoint.com/intersectionobserver-api/
    // https://webdesign.tutsplus.com/tutorials/how-to-intersection-observer--cms-30250

    if ( 'IntersectionObserver' in window) {
      //console.log("Intersection Observer supported");
    } else {
      //console.log("Intersection Observer not supported");
    }

    // https://codepen.io/hey-nick/pen/mLpmMV
    this.floatBtn = this.shadowRoot.getElementById('floatBtn');
    this.footer   = this.shadowRoot.querySelector('footer');

    const handler = (entries) => {
      // Entries is an array of observed DOM nodes
      if ( entries[0].isIntersecting ) {
        this.floatBtn.style.visibility = "hidden";
        this.floatBtn.style.opacity    = 0;
        this.floatBtn.style.transition = "visibility 0s .5s, opacity .5s ease";
      } else {
        this.floatBtn.style.visibility = "visible";
        this.floatBtn.style.opacity    = 1;
      }
    }

    // create the observer
    const observer = new window.IntersectionObserver(handler);
    // Give the observer some dom nodes to keep an eye on
    observer.observe(this.footer);
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
