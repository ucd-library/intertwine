const {BaseModel} = require('@ucd-lib/cork-app-utils');
const MomentService = require('../services/MomentService');
const MomentStore = require('../stores/MomentStore');

class MomentModel extends BaseModel {
  constructor() {
    super();

    this.store   = MomentStore;
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
    let links = {}, nodes = {}, lookup = {};

    // Helper Functions - START
    function cleanType(type) {
      let newType;
      if ( Array.isArray(type) ) {
        newType = type.find(t => t.toLowerCase().includes('significantlink'));

        if ( newType === undefined ) {
          newType = type.find(t => t.includes('ucdlib:'));
          newType = type.find(t => t !== 'schema:WebPage');
        }
        return newType.replace(/^\/\/|^.*?:(\/\/)?/, '').toLowerCase();
      } else {
        return type.replace(/^\/\/|^.*?:(\/\/)?/, '').toLowerCase();
      }
    }

    function getLocation(id) {
      /* Possible Layouts:
        Jop:
          "spatial" : [
            "Saint-Julien-Beychevelle, France",
            {
              "@id" : "_:b14"
            }
          ]

        Chardonnay: "spatial": "_:b7",
      */
      if ( typeof id === 'object' && Array.isArray(id) ) {
        id.forEach(el => {
          if ( typeof el === 'object' ) {
            id = el['@id'];
          };
        });
      }
      return data.find(record => record['@id'] === id);
    }
    // Helper Functions - END

    data.forEach(item => {
      item['type'] = cleanType(item['@type']);

      if ( item['schema:longitude'] ) {
        item['longitude'] = item['schema:longitude'];
        delete item['schema:longitude'];
      }

      if ( item['schema:latitude'] ) {
        item['latitude'] = item['schema:latitude'];
        delete item['schema:latitude'];
      }

      // Replace significantlink(s) with connection
      if ( item.type.includes('significantlink') ) {
        item.type = 'connection';
      }

      lookup[item['@id'].replace(/.*:b/, 'b')] = item;
    });

    // Create lookup table
    for ( let id in lookup ) {
      let container = lookup[id];
      for ( let attr in container ) {
        if ( lookup[attr] ) {
          let link = lookup[attr];
          link.src = container['@id'];
          link.dst = container[attr];
          link.isLink = true;
          links[link['@id']] = link;
        }
      }
    }

    // Nodes
    for( let id in lookup ) {
      // Can't be a link or a connection
      if( !lookup[id].isLink && lookup[id]['type'] !== 'connection' ) {
        let location;

        /**
         * Weed out the _:b items, which won't be needed in the final display
        */
        const regex = new RegExp(/^_:b*/g);
        if ( !regex.test(lookup[id]["@id"]) ) {

          if ( lookup[id]['spatial'] ) {
            location = getLocation(lookup[id]['spatial']);
          } else if ( lookup[id]['type'] === 'place' ) {
            location = getLocation(lookup[id]['@id']);
          }

          lookup[id]['location'] = location.name.replace(/\+/g, ' ');
          lookup[id]['coordinates'] = [
            parseFloat(location.latitude),
            parseFloat(location.longitude)
          ];

          nodes[lookup[id]['@id']] = lookup[id];
        }
      }
    }

    // Links
    for ( let id in links ) {
      let item = links[id];
      if ( !nodes[item.src] || !nodes[item.dst] ) {
        item.weblink = true;
        continue;
      };

      item.coordinates = {
        src: nodes[item.src].coordinates,
        dst: nodes[item.dst].coordinates
      }
    }

    return { nodes, links }
  }
}

module.exports = new MomentModel();
