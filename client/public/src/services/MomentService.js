const {BaseService} = require('@ucd-lib/cork-app-utils');
const MomentStore = require('../stores/MomentStore');

class MomentService extends BaseService {

  constructor() {
    super();
    this.store = MomentStore;
  }

  get(moment, transform) {
    if( !transform ) transform = data => data;
    return this.request({
      url : `/api/graph/${moment}`,
      onLoading : request => this.store.onGraphLoading(moment, request),
      onLoad : resp => {
        console.log("resp: ", resp);
        //resp.body.graph = transform(resp.body.graph);
        resp.body.graph = transform(resp.body['@graph']);
        this.store.onGraphLoaded(moment, resp.body);
      },
      onError : e => this.store.onGraphError(moment, e)
    });
  }

}

module.exports = new MomentService();
