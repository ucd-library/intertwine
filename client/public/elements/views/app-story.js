import { LitElement } from 'lit-element';
import render from './app-story.tpl.js'

// TODO: This is temporary and can be replaced once we have a live source for the data
let jsonData = require('../../../../mock/story_json.json');

export default class AppStory extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      active: { type: Boolean },
      selectedMoment: { type: String },
      story: { type: Object },
      jsonData: { type: Object }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;
    this.story = {};

    this.jsonData = jsonData;

    this._injectModel('AppStateModel');
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update events
   *
   * @param {Object} e
   */
  _onAppStateUpdate(e) {
    this.selectedMomentName = e.moment;
    this.story = this.jsonData.moments[this.selectedMomentName];
  }

  async firstUpdated() {
    // If IntersectionObserver is not defined, inject the polyfill.  IE only
    if( !window.IntersectionObserver ) {
      console.log('Injecting IntersectionObserver polyfill');
      await import(/* webpackChunkName: "intersection-observer-polyfill" */ 'intersection-observer');
    }
    this._initIntersectionObserver();
  }

  _initIntersectionObserver() {
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
   * @method _launchMap
   * @description: send the user to the map where they will view the selected moment
   * @param {*} e
  */
  _launchMap() {
    this.AppStateModel.setLocation('/map/' + this.selectedMomentName);
  }
}

customElements.define('app-story', AppStory);
