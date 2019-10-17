const {BaseService} = require('@ucd-lib/cork-app-utils');
const MomentStore = require('../stores/MomentStore');

class MomentService extends BaseService {

  constructor() {
    super();
    this.store = MomentStore;
  }

  get(transform) {
    if( !transform ) transform = data => data;
    this.request({
      url : '/api/graph/mock',
      onLoading : request => this.store.onGraphLoading(request),
      onLoad : resp => this.store.onGraphLoaded(transform(resp.body)),
      onError : e => this.store.onGraphError(e)
    })
  }

}

module.exports = new MomentService();