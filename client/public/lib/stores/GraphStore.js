const {BaseStore} = require('@ucd-lib/cork-app-utils');
const mockData = require('../mock/graph');

mockData.nodes.forEach(node => {
  node.properties.externalId = node.properties.groupId;
});
mockData.externalNodes.forEach(node => {
  node.properties.externalId = node.properties.groupId;
});

console.log(mockData);

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