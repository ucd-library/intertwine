class NodeStore {

  constructor() {
    this.reset();
  }

  reset() {
    this._destroy('externalNodes', Object.keys(this.externalNodes || []));
    this._destroy('mapNodes', Object.keys(this.mapNodes || []));
    this._destroy('links', this.links || []);

    this.externalNodes = {};
    this.mapNodes = {};
    this.links = [];
  }

  _destroy(key, arr) {
    arr.forEach(item => {
      if( typeof item === 'string' ) {
        this[key][item].destroy();
      } else {
        item.destroy();
      }
    });
  }

  addExternal(id, node){
    this.externalNodes[id] = node;
  }

  getExternal(id) {
    return this.externalNodes[id];
  }

  removeExternal(id) {
    delete this.externalNodes[id];
  }

  addMap(id, node) {
    this.mapNodes[id] = node;
  }

  getMap(id) {
    return this.mapNodes[id];
  }

  removeMap(id) {
    delete this.mapNodes[id];
  }

  addLink(link) {
    this.links.push(link);
  }

  removeLink(link) {
    let index = this.links.indexOf(link);
    if( index === -1 ) return;
    this.links.splice(index, 1);
  }

}

export default new NodeStore();