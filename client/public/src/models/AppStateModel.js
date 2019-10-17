const {AppStateModel} = require('@ucd-lib/cork-app-state');
const AppStateStore = require('../stores/AppStateStore');

class AppStateModelImpl extends AppStateModel {

  constructor() {
    super();
    this.store = AppStateStore;

    this.EventBus.on(this.store.events.APP_STATE_UPDATE, () => this._sendGA());
    this._sendGA();
  }

  set(state) {
    // parse out page
    if( state.location ) {
      let page = state.location.path ? state.location.path[0] : 'map';
      state.page = page || 'map';
    }

    // parse out selected object(s)
    if( state.page === 'map' && state.location.path.length >= 3 ) {
      state.selected = {
        type : state.location.path[1]
      }
      if( state.location.path[1] === 'cluster' ) {
        state.selected.ids = state.location.path[2].split(',');
      } else {
        state.selected.id = state.location.path[2];
      }
    } else {
      state.selected = null;
    }

    return super.set(state);
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