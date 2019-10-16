const {BaseService} = require('@ucd-lib/cork-app-utils');
const MomentStore = require('../stores/MomentStore');

class MomentService extends BaseService {

  constructor() {
    super();
    this.store = MomentStore;
  }

}

module.exports = new MomentService();