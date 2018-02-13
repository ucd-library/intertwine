const {BaseService} = require('@ucd-lib/cork-app-utils');
const GraphStore = require('../stores/GraphStore');

class GraphService extends BaseService {

  constructor() {
    super();
    this.store = GraphStore;
  }

  get() {
    return this.store.get();
  }

}

module.exports = new GraphService();