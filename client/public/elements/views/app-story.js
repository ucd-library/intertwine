import { LitElement } from 'lit-element';
import render from './app-story.tpl.js'

export default class AppStory extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      endpoint: { type: String },
      headerImgUrl: { type: String },
      moment: { type: String },
      paragraphs: { type: Array },
      story: { type: Object },
      sources: { type: Array },
      title: { type: String }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.endpoint = APP_CONFIG.endpoint;
    this.moment = '';
    this.headerImgUrl = '';
    this.paragraphs = [];
    this.story = {};
    this.sources = [];
    this.paragraphs = [];
    this.title = '';

    this._injectModel('AppStateModel', 'MomentModel');
  }

  async firstUpdated() {
    this.container = this.shadowRoot.querySelector('#container');

    // If IntersectionObserver is not defined, inject the polyfill.  IE only
    if( !window.IntersectionObserver ) {
      console.log('Injecting IntersectionObserver polyfill');
      await import(/* webpackChunkName: "intersection-observer-polyfill" */ 'intersection-observer');
    }
    this._initIntersectionObserver();
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update events
   *
   * @param {Object} e
   */
  async _onAppStateUpdate(e) {
    this.container.scrollTo(0,0); // return to top of page

    this.moment = e.moment;

    let payload = await this.MomentModel.get(this.moment);

    this.renderStory(payload.payload);
  }

  renderStory(story) {
    if ( !story ) return;
    
    if ( Object.keys(story.graph.story).length !== 0) {
      this.story = story.graph.story;
      this.title = story.graph.story.entrypoint.name;

      if ( story.graph.story.entrypoint.thumbnail.match(/^https?:\/\//g) === null ) {
        this.headerImgUrl = this.endpoint + '/' + this.moment + '/' + story.graph.story.entrypoint.thumbnail;
      } else {
        this.headerImgUrl = story.graph.story.entrypoint.thumbnail;
      }

      this.sources = [];
      for (let key in this.story.sources.publication) {
        let arr = this.story.sources.publication[key].split(/\[|\]/);
        let obj = {
          "text": arr[0],
          "link": arr[1],
          "href": (arr[2] ? arr[2].replace(/\(|\)/,'') : '')
        }
        this.sources.push(obj);
      }
    }

    this.paragraphs = [];
    for ( let key in this.story ) {
      if ( key.includes('paragraph') && !key.includes('1')) {
        this.paragraphs.push(this.story[key]);
      }
    }
  }

  _initIntersectionObserver() {
    this.floatBtn = this.shadowRoot.getElementById('floatBtn');
    this.footer   = this.shadowRoot.querySelector('footer');

    const handler = (entries) => {
      // Entries is an array of observed DOM nodes
      if ( entries[0].isIntersecting ) {
        this.floatBtn.classList.add("hidden");
      } else {
        this.floatBtn.classList.remove("hidden");
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
    this.AppStateModel.setLocation('/map/' + this.moment);
  }
}

customElements.define('app-story', AppStory);
