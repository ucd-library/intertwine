const { AppStateModel } = require('@ucd-lib/cork-app-state');
const AppStateStore     = require('../stores/AppStateStore');

class AppStateModelImpl extends AppStateModel {

  constructor() {
    super();
    this.store = AppStateStore;

    this.EventBus.on(this.store.events.APP_STATE_UPDATE, () => this._sendGA());
    this._sendGA();
  }

  /**
   * @method setSelectedClusterIds
   * @description when a cluster is selected in the UI, the center lat/lng and zoom
   * of the cluster will be set in the, this will be used by the map to figure out
   * the nodes in the cluster and set them
   */
  setSelectedClusterIds(ids) {
    let state = this.store.data;
    if( !state.selected ) {
      return console.warn('Attempting to set cluster ids, but no selected object');
    }
    if( state.selected.type !== 'cluster' ) {
      return console.warn('Attempting to set cluster ids, but selected object is not a cluster');
    }
    state.selected.ids = ids;
    return super.set(state);
  }

  set(state) {
    // parse out page
    if( state.location ) {
      let page = state.location.path ? state.location.path[0] : 'map';
      state.page = page || 'map';
    }

    // Currently selected moment
    state.moment = 'chardonnay';

    // parse out selected object(s)
    if( state.page === 'map' && state.location.path.length >= 3 ) {
      state.selected = {
        type : state.location.path[2]
      }

      if( state.location.path.length > 1 ) {
        state.moment = state.location.path[1];
      }

      if( state.location.path[2] === 'cluster' ) {
        state.selected.latlng = state.location.path[3].split(',').map(ll => parseFloat(ll));
        state.selected.zoom = parseInt(state.location.path[4]);
      } else {
        state.selected.id = state.location.path[3];
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
