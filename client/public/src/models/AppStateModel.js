const {AppStateModel} = require('@ucd-lib/cork-app-state');
const AppStateStore = require('../stores/AppStateStore');

class AppStateModelImpl extends AppStateModel {

  constructor() {
    super();
    this.store = AppStateStore;

    this.EventBus.on(this.store.events.APP_STATE_UPDATE, () => this._sendGA());
    this._sendGA();
  }

  set(update) {
    if( update.location ) {
      let page = update.location.path ? update.location.path[0] : 'map';
      update.page = page || 'map';
    }

    return super.set(update);
  }

  /**
   * @method _sendGA
   * @description send a google analytics event if pathname has changed
   */
  _sendGA() {
    if( !window.gtag ) {
      return console.warn('No global gtag variable set for analytics events');
    }
    if( this.lastGaLocation === window.location.pathname ) return;
    this.lastGaLocation = window.location.pathname;

    gtag('config', APP_CONFIG.gaCode, {
      page_path: window.location.pathname
    });
  }


}

module.exports = new AppStateModelImpl();