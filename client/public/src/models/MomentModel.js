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
        //await this.service.get(moment, this.transformLDPLinks);
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

    function cleanType(type) {
      if ( Array.isArray(type) ) {
        type = type.filter(t => t.includes('ucdlib:'));
        return type[0].replace(/^\/\/|^.*?:(\/\/)?/, '').toLowerCase();
      } else {
        return type.replace(/^\/\/|^.*?:(\/\/)?/, '').toLowerCase();
      }
    }

    function formatCoords(array) {
      let final = [];
  
      if ( Array.isArray(array) ) {
        let coords = array.filter(a => /([0-9])/.test(a) === true);
                  
        coords.forEach(el => {
          let split = el.split(', ');
          let lat = parseFloat(split[0]);
          let lng = parseFloat(split[1]);
  
          final.push(lat, lng);
        });
  
        return final;
      }
  
      return false;
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
     
    let lookup = {};
    data.forEach(item => {
      if ( !item['schema:description'] ) {
        item.description = false;
      } else {
        item.description = item['schema:description'];
      }

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

    for( let id in lookup ) {
      if( !lookup[id].isLink ) {
        // Reformat to lat/lng and location
        if ( lookup[id]['spatial'] ) {
          lookup[id]['coordinates'] = formatCoords(lookup[id]['spatial']);
          lookup[id]['location']    = formatLocation(lookup[id]['spatial']);
        }

        nodes.push(lookup[id]);
      }
    }  

    /*
    let nodes = {};
    let links = {};

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

    return { nodes, links }
    */
   
    return { nodes, links }
  }
}

module.exports = new MomentModel();
