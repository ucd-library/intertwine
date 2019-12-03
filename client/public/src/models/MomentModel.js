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
    let places = {}, links = {}, nodes = {}, lookup = {}, item;

    // Helper Functions - START
    function cleanType(type) {
      if ( Array.isArray(type) ) {
        type = type.find(t => t.includes('ucdlib:'));
        return type.replace(/^\/\/|^.*?:(\/\/)?/, '').toLowerCase();
      } else {
        return type.replace(/^\/\/|^.*?:(\/\/)?/, '').toLowerCase();      }
    }

    function getCoords(id) {
      return data.find(record => record['@id'] === id);
    }
    // Helper Functions - END

    data.forEach(item => {
      item['type'] = cleanType(item['@type']);
      lookup[item['@id'].replace(/.*:/, '')] = item;

      // Replace significantLink with connection
      if ( item.type === 'significantlink' ) item.type = 'connection';
    });

    // Removing any schema:Places in the main location objects that are missing lat/lng
    // Just a safety name
    for ( let id in lookup ) {
      if ( typeof lookup[id]['@type'] === 'string' && lookup[id]['@type'].includes('Place') ) {
        if ( !lookup[id]['latitude'] ) {
          delete lookup[id];
        }
      }
    }

    // Create lookup table
    for ( let id in lookup ) {
      let container = lookup[id];
      for ( let attr in container ) {
        if ( lookup[attr] ) {
          let link = lookup[attr];
          link.src = container['@id'];
          link.dst = container[attr];
          link.isLink = true;

          links[id] = link;
        }
      }
    }

    // Nodes
    for( let id in lookup ) {
      if( !lookup[id].isLink ) {

        if ( lookup[id]['type'] === 'connection' ) {
          links[lookup[id]['@id']] = lookup[id];
        } else {
          console.log(lookup[id])

          /*
          if ( lookup[id]['spatial'] ) {
            let _spatialId = lookup[id]['spatial'].replace('_:', '');
            if ( lookup[_spatialId] ) {
              let _coords = getCoords(lookup[id]['spatial']);
              lookup[id]['location'] = _coords.name;
              let coords = [
                parseFloat(_coords.latitude),
                parseFloat(_coords.longitude)
              ]
              lookup[id]['coordinates'] = coords;
            }
          } else if (lookup[id].type === 'place' ) {
            if ( lookup[id]['latitude'] && lookup[id]['longitude'] ) {
              lookup[id]['coordinates'] = [
                parseFloat(lookup[id]['latitude']),
                parseFloat(lookup[id]['longitude'])
              ]
            } else {
              lookup[id]['coordinates'] = [0,0];
            }
          } else {
            lookup[id]['coordinates'] = [0,0];
          }

          nodes[lookup[id]['@id']] = lookup[id];
          */
        }
      }
    }

    // Links
    for ( let id in links ) {
      let item = links[id];
      /*
      item.coordinates = {
        src: nodes[item.src].coordinates,
        dst: nodes[item.dst].coordinates
      }
      */
    }

    console.log(nodes, links);

    return { nodes, links }
  }
}

module.exports = new MomentModel();
