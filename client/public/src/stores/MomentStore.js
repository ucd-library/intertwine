const {BaseStore} = require('@ucd-lib/cork-app-utils');

class MomentStore extends BaseStore {

  constructor() {
    super();

    this.data = {};
    this.events = {
      GRAPH_UPDATE : 'graph-update'
    };
  }

  onGraphLoading(request) {
    this._setGraphState({
      state : this.STATE.LOADING,
      request
    });
  }

  onGraphLoaded(payload) {
    this._setGraphState({
      state : this.STATE.LOADED,
      payload
    });
  }

  onGraphError(error) {
    this._setGraphState({
      state : this.STATE.ERROR,
      error
    });
  }

  _setGraphState(state) {
    this.data = state;
    this.emit(this.events.GRAPH_UPDATE, state);
  }

}

module.exports = new MomentStore();