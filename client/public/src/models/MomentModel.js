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
    let finalArray = [], array = [];

    // Helper Functions
    function isEmpty(obj) {
      return Object.getOwnPropertyNames(obj).length === 0;
    }

    function cleanType(type) {
      return type.replace(/^\/\/|^.*?:(\/\/)?/, '').split(/[/#]+/).pop().toLowerCase();
    }

    function getSimpleType(types, item) {
      let obj = {};

      if ( Array.isArray(types) ) {
        types.find(element => {
          obj = {
            type: cleanType(element),
            data: item
          }
        });
        return obj;
      } else if ( typeof types === 'string' && typeof item === 'object' ) {
        obj = {
          type: cleanType(types),
          data: item
        }
        return obj;
      } else {
        return cleanType(types);
      }
    }

    function traverse(item) {
      if (Array.isArray(item)) {
        item.forEach(element => traverse(element));
      } else if ((typeof item === 'object') && (item !== null)) {
        for (let key in item) {
          if ( key === '@type' && key !== undefined ) {
            let object = getSimpleType(item[key], item);
            if ( !isEmpty(object) ) finalArray.push(object);
          }
          traverse(item[key]);
        }
      }
    }

    traverse(data);

    finalArray.forEach(el => {      
      let obj = {};
      for ( let key in el.data ) {
        if ( key !== '@type' && key !== '@id' ) {
          let simpleKey = getSimpleType(key);          
          obj[simpleKey] = el.data[key];
        }
      }
      el['data'] = obj;
      array.push(el);
    });
   
    console.log(finalArray);
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
