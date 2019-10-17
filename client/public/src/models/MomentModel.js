const {BaseModel} = require('@ucd-lib/cork-app-utils');
const MomentService = require('../services/MomentService');
const MomentStore = require('../stores/MomentStore');

class MomentModel extends BaseModel {

  constructor() {
    super();

    this.store = MomentStore;
    this.service = MomentService;

    this.EventBus.on('app-state-update', e => {
      if( e.page === 'map' ) this.get();
    })
      
    this.register('MomentModel');
  }

  async get() {
    let state = this.store.data;

    try {
      if( state && state.request ) {
        await state.request;
      } else if( state.state !== 'loaded' ) {
        await this.service.get(this.transformMockLinks);
      }
    } catch(e) {
      console.error(e);
    }

    return this.store.data;
  }

  transformMockLinks(data) {
    let nodes = {};
    let links = {};
    let item;

    for( item of data ) {
      if( item.type === 'connection' ) {
        item.id = item.src+'-'+item.dst;
        links[item.id] = item;
      } else {
        item.coordinates = item.coordinates.reverse();
        nodes[item.id] = item;
      }
    }

    for( let id in links ) {
      item = links[id];
      item.coordinates = {
        src : nodes[item.src].coordinates,
        dst : nodes[item.dst].coordinates
      }
    }

    return {nodes, links}
  }

}

module.exports = new MomentModel();