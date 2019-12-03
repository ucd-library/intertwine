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
        await this.service.get(moment, this.transformMockLinks);
      }
    } catch(e) { console.error(e) };

    return this.store.data[moment];
  }

  // My beautiful useless function (;_;)
  transformLDPLinks(data) {
    let finalArray = [];

    function cleanType(type) {
      return type.replace(/^\/\/|^.*?:(\/\/)?/, '').split(/[/#]+/).pop().toLowerCase();
    }

    function simplifyArray(array) {
      array.filter(element => {
        Object.keys(element).map(key => {
          if ( Array.isArray(element[key]) ) {
            if ( element[key].length === 1 ) element[key].forEach(i => element[key] = Object.values(i)[0]);
            else {
              element[key].filter(i => typeof i === 'object').forEach(el => {
                element[key] = element[Object.keys(el)[0]] = Object.values(el)[0];
              });
            }
          }
        });
      });
    }

    function traverse(item) {
      let obj = {};
      if (Array.isArray(item)) {
        item.forEach(element => traverse(element));
      } else if ((typeof item === 'object') && (item !== null)) {
        Object.keys(item).forEach(i => {
          obj[cleanType(i)] = item[i];
          if ( obj['@type'] ) obj['@type'] = obj['@type'].map(el => cleanType(el));
        });
        finalArray.push(obj);
      }
      simplifyArray(finalArray);
    }
    traverse(data);

    return finalArray;
  }

  transformMockLinks(data) {
    let links = [], nodes = [];

    // Helper Functions - START
    function cleanType(type) {
      if ( Array.isArray(type) ) {
        type = type.find(t => t.includes('ucdlib:'));
        return type.replace(/^\/\/|^.*?:(\/\/)?/, '').toLowerCase();
      } else {
        return type.replace(/^\/\/|^.*?:(\/\/)?/, '').toLowerCase();
      }
    }

    function getCoords(id) {
      return data.find(record => record['@id'] === id);
    }

    function formatLocation(array) {
      let final = [];

      if ( Array.isArray(array) ) {
        let fullLocation = array.filter(a => /([a-zA-Z])/.test(a) === true);

        fullLocation.forEach(el => {
          let split = el.split(', ');
          let city  = split[0];
          let state = split[1];

          final.push({ 'city': city, 'place': state });
        });

        return final;
      }

      return false;
    }
    // Helper Functions - END

    let lookup = {};
    data.forEach(item => {
      if ( !item['schema:description'] ) item.description = false;
      else item.description = item['schema:description'];

      // Reformat the types
      item['type'] = cleanType(item['@type']);
      lookup[item['@id'].replace(/.*:/, '')] = item;
    });

    for( let id in lookup ) {
      let container = lookup[id];
      for( let attr in container ) {
        if( lookup[attr] ) {
          let link = lookup[attr];
          links.push(link);
          link.src = container['@id'];
          link.dst = container[attr];
          link.isLink = true;
        }
      }
    }

    // Build the nodes
    // Data Structure => coordinates = [0,0]
    for( let id in lookup ) {
      if( !lookup[id].isLink ) {
        if ( lookup[id]['spatial'] ) {
          let _coords = getCoords(lookup[id]['spatial']);
          lookup[id]['location'] = _coords.name;

          // Check for missing lat & long values and replace them with zeros
          if ( isNaN(_coords.longitude) || isNaN(_coords.latitude) ) {
            _coords.longitude = 0;
            _coords.latitude  = 0;
          }

          let coords = [
            parseFloat(_coords.latitude),
            parseFloat(_coords.longitude)
          ]

          lookup[id]['coordinates'] = coords;
        }

        nodes.push(lookup[id]);
      }
    }

    /** Links Data Structure
     *  coordinates {
          dst: [lat,lng]
          src: [lat,lng]
        }
    */
    for ( let id in links ) {
      let item = links[id];
      let src, dst;
      let src_id = item.src;
      let dst_id = item.dst;

      nodes.find(node => {
        if (node['@id'] === dst_id) dst = node.coordinates;
        if (node['@id'] === src_id) src = node.coordinates;
      });

      item.coordinates = {
        src: src,
        dst: dst
      }
    }

    return { nodes, links }
  }
}

module.exports = new MomentModel();
