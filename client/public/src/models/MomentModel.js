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
        await this.service.get(moment, this.transformLinks);
      }
    } catch(e) { console.error(e) };

    return this.store.data[moment];
  }

  transformLinks(data) {
    let links = {}, nodes = {}, lookup = {};

    // Helper Functions - START
    function cleanType(type) {
      let newType;
      if ( Array.isArray(type) ) {
        for ( let t in type ) {
          // Some of the Trello objects are labeled as things so let's standardize this
          // and convert them to the description to objects
          if ( type[t].toLowerCase().includes('thing') ) {
            type[t] = 'object';
          }
        }

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

    for ( let i = 0; i < data.length; i++ ) {
      if ( data[i]['@type'] === undefined ) continue;

      data[i]['type'] = cleanType(data[i]['@type']);

      if ( data[i]['schema:longitude'] ) {
        data[i]['longitude'] = data[i]['schema:longitude'];
        delete data[i]['schema:longitude'];
      }

      if ( data[i]['schema:latitude'] ) {
        data[i]['latitude'] = data[i]['schema:latitude'];
        delete data[i]['schema:latitude'];
      }

      // Replace significantlink(s) with connection
      if ( data[i].type.includes('significantlink') ) {
        data[i].type = 'connection';
      }

      lookup[data[i]['@id'].replace(/.*:b/, 'b')] = data[i];
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

          if ( location === undefined ) continue;

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

    //console.log("nodes: ", nodes, " links: ", links);

    return { nodes, links }
  }
}

module.exports = new MomentModel();
