const {BaseStore} = require('@ucd-lib/cork-app-utils');
const mockData = require('../mock/graph');

mockData.nodes.forEach(node => {
  node.id = node.label;
  node.externalId = node.label;
});

class GraphStore extends BaseStore {

  constructor() {
    super();

    this.data = {};
    this.events = {};
  }

  get() {
    return mockData;
  }

}

module.exports = new GraphStore();