const { AppStateModel } = require('@ucd-lib/cork-app-state');
const AppStateStore     = require('../stores/AppStateStore');

class AppStateModelImpl extends AppStateModel {

  constructor() {
    super();
    this.store = AppStateStore;

    this.DEFAULT_VIEW = 'home';

    this.EventBus.on(this.store.events.APP_STATE_UPDATE, async (e) => {
      let state = await this.get(e.moment);

      if ( state.state === 'error' && e.page !== 'about' && e.page !== 'home' ) {
        AppStateModel.setLocation('/');
      }
      
      this._sendGA();
    });
  }

  /**
   * @method setSelectedClusterIds
   * @description when a cluster is selected in the UI, the center lat/lng and zoom
   * of the cluster will be set in the, this will be used by the map to figure out
   * the nodes in the cluster and set them
  */
  setSelectedClusterIds(ids) {
    let state = this.store.data;

    if( !state.selectedNode ) {
      return console.warn('Attempting to set cluster ids, but no selected object');
    }
    if( state.selectedNode.type !== 'cluster' ) {
      return console.warn('Attempting to set cluster ids, but selected object is not a cluster');
    }
    state.selectedNode.ids = ids;

    return super.set(state);
  }

  set(state) {
    // parse out page
    if ( state.location ) {
      let page = state.location.path ? state.location.path[0] : this.DEFAULT_VIEW;      
      state.page = page || this.DEFAULT_VIEW;
    }
        
    // parse out selected object(s)
    if ( state.page === 'map' && state.location.path.length >= 1 ) {
      state.moment = state.location.path[1];
    }

    if ( state.page === 'story' ) {
      state.moment = state.location.path[1];
    }

    if ( state.page === 'map' && state.location.path.length >= 3 ) {
      state.selectedNode = {
        type : state.location.path[2]
      }

      if( state.location.path[2] === 'cluster' ) {
        state.selectedNode.latlng = state.location.path[3].split(',').map(ll => parseFloat(ll));
        state.selectedNode.zoom = parseInt(state.location.path[4]);
      } else {
        state.selectedNode.id = state.location.path[3];
      }
    } else {
      state.selectedNode = null;
    }

    // Set a default moment if none has been set
    if ( !state.moment ) {
      state.moment = APP_CONFIG.moments[0];
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
