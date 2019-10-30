const {BaseService} = require('@ucd-lib/cork-app-utils');
const MomentStore = require('../stores/MomentStore');

class MomentService extends BaseService {

  constructor() {
    super();
    this.store = MomentStore;
  }

  get(moment, transform) {
    if( !transform ) transform = data => data;
    this.request({
      // url : `/api/graph/${moment}`,
      url : '/api/graph/mock',
      onLoading : request => this.store.onGraphLoading(moment, request),
      onLoad : resp => this.store.onGraphLoaded(moment, transform(resp.body)),
      onError : e => this.store.onGraphError(moment, e)
    })
  }

}

module.exports = new MomentService();