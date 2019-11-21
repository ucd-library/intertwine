const {BaseModel} = require('@ucd-lib/cork-app-utils');
const MomentService = require('../services/MomentService');
const MomentStore = require('../stores/MomentStore');

class MomentModel extends BaseModel {

  constructor() {
    super();

    this.store = MomentStore;
    this.service = MomentService;

    this.EventBus.on('app-state-update', e => {
      if( e.page === 'map' ) this.get(e.moment);
    })

    this.register('MomentModel');
  }

  async get(moment) {
    let state = this.store.data[moment] || {};

    try {
      if( state.request ) {
        await state.request;
      } else if( state.state !== 'loaded' ) {
        //await this.service.get(moment, this.transformMockLinks);
        await this.service.get(moment, this.transformLDPLinks);
      }
    } catch(e) {
      console.error(e);
    }

    return this.store.data[moment];
  }

  transformLDPLinks(data) {
    function getType(types, item) {
      let type;
      if ( Array.isArray(types) ) {
        types.find(element => {
          // Remove the protocol (ie: http://) from each string and then split on the remaining / and #
          let _type = element.replace(/^\/\/|^.*?:(\/\/)?/, '').split(/[/#]+/);
          type = _type[_type.length - 1].toLowerCase();
        });
      } else {
        console.log(types);
      }
      //console.log(type, item);
    }

    function traverse(item) {
      if (Array.isArray(item)) {
        item.forEach(element => {
          //console.log('el: ', element);
          traverse(element);
        });
      } else if ((typeof item === 'object') && (item !== null)) {
        for (let key in item) {
          if ( key === '@type' && key !== undefined ) getType(item[key], item);
          //console.log(traverse(getType(item[key])));
          if ( typeof item[key] === 'string' && key === '@value' ) console.log(key, item[key]);
          traverse(item[key]);
        }
      }
    }

    traverse(data);

    for ( let id in data ) {
      //traverse(data[id]);
    }
  }

  getHashes() {
    let hash = [];

    data.forEach((el, index) => {
      console.log(index, "el: ", el);
      let test = el['@id'].split('#')[1];
      if ( test !== undefined ) hash.push(test);
    });

    return hash;
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
