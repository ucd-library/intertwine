const {BaseStore} = require('@ucd-lib/cork-app-utils');

class MomentStore extends BaseStore {

  constructor() {
    super();

    this.data = {};
    this.events = {
      GRAPH_UPDATE : 'moment-graph-update'
    };
  }

  onGraphLoading(moment, request) {
    this._setGraphState({
      id: moment,
      state : this.STATE.LOADING,
      request
    });
  }

  onGraphLoaded(moment, payload) {
    this._setGraphState({
      id: moment,
      state : this.STATE.LOADED,
      payload
    });
  }

  onGraphError(moment, error) {
    this._setGraphState({
      id: moment,
      state : this.STATE.ERROR,
      error
    });
  }

  _setGraphState(state) {
    this.data[state.id] = state;
    this.emit(this.events.GRAPH_UPDATE, state);
  }

}

module.exports = new MomentStore();