const {BaseModel} = require('@ucd-lib/cork-app-utils');
const MomentService = require('../services/MomentService');
const MomentStore = require('../stores/MomentStore');

class TestModel extends BaseModel {

  constructor() {
    super();

    this.store = MomentStore;
    this.service = MomentService;

    this.register('TestModel');
  }

  async copyMockData(numCopies) {
    const nestedArray = [this.store.data];
    let nestedCopy = [...nestedArray];
    let result = [];

    // If not specified send back 1 copy
    if (!numCopies) return [...nestedArray, ...nestedCopy];

    for ( let i = 0; i < numCopies; i++ ) {
      result = [...result, ...nestedCopy];
    }

    return result;
  }

}

module.exports = new TestModel();
