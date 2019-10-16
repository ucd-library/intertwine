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
        await this.service.get();
      }
    } catch(e) {
      console.error(e);
    }

    return this.store.data;
  }

}

module.exports = new MomentModel();