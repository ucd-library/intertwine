module.exports = subclass => 
  class GraphInterface extends subclass {

    constructor() {
      super();
      this._injectModel('GraphModel');
    }

    _getGraph() {
      return this.GraphModel.get();
    }

  }