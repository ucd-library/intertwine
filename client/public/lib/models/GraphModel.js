const {BaseModel} = require('@ucd-lib/cork-app-utils');
const GraphService = require('../services/GraphService');
const GraphStore = require('../stores/GraphStore');

class GraphModel extends BaseModel {

  constructor() {
    super();

    this.store = GraphStore;
    this.service = GraphService;
      
    this.register('GraphModel');
  }

  get() {
    return this.store.get();
  }

}

module.exports = new GraphModel();