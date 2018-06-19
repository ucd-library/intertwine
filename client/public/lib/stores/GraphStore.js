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
    this.events = {
      UNSELECT_NODE : 'unselect-node',
      SELECTED_NODE_UPDATE : 'selected-node-update'
    };
  }

  get() {
    return mockData;
  }

  unselect(node) {
    if( this.data.selected !== node ) return;
    this.data.selected = null;
    this.emit(this.events.UNSELECT_NODE, node);  
  }

  select(node) {
    if( this.data.selected === node ) return;

    if( this.data.selected ) {
      let selected = this.data.selected;
      this.data.selected = null;
      this.emit(this.events.UNSELECT_NODE, selected);  
    }

    this.data.selected = node;
    this.emit(this.events.SELECTED_NODE_UPDATE, node);
  }


}

module.exports = new GraphStore();