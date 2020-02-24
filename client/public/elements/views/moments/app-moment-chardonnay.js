import { LitElement } from 'lit-element';
import render from './app-moment-chardonnay.tpl.js';

export default class AppMomentChardonnay extends LitElement {
  static get properties() {
    return {
      active: { type: Boolean }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;
  }

  async firstUpdated() {
    // https://www.sitepoint.com/intersectionobserver-api/
    // https://webdesign.tutsplus.com/tutorials/how-to-intersection-observer--cms-30250

    // If IntersectionObserver is not defined, inject the polyfill.  IE only
    if( !window.IntersectionObserver ) {
      console.log('Injecting IntersectionObserver polyfill');
      await import(/* webpackChunkName: "intersection-observer-polyfill" */ 'intersection-observer');
    }
    this._initIntersectionObserver();
  }

  _initIntersectionObserver() {
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
}

customElements.define('app-moment-chardonnay', AppMomentChardonnay);
