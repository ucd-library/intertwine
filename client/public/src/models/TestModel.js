const { BaseModel } = require('@ucd-lib/cork-app-utils');
const MomentStore = require('../stores/MomentStore');

class TestModel extends BaseModel {
  constructor() {
    super();

    this.store = MomentStore;

    this.register('TestModel');
  }

  async copyMockData(numCopies) {
    const nestedArray = [this.store.data];
    let nestedCopy = [...nestedArray];

    // If not specified send back 1 copy
    if (!numCopies || numCopies === 0 || numCopies === 1) return [...nestedArray, ...nestedCopy];

    let result = [];
    for ( let i = 0; i < numCopies; i++ ) {
      result = [...result, ...nestedCopy];
    }
    return result;
  }
}

module.exports = new TestModel();
