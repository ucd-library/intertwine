const {BaseStore} = require('@ucd-lib/cork-app-utils');

class MomentStore extends BaseStore {

  constructor() {
    super();

    this.data = {};
    this.events = {};
  }

}

module.exports = new MomentStore();