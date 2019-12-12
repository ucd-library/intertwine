var router  = require('express').Router();
let fs      = require('fs');
let path    = require('path');
let fetch   = require('node-fetch');

const openGeocoder = require('node-open-geocoder');

// This isn't declared as 'async' because it already returns a promise
function get_location_info (name) {
  return new Promise((resolve, reject) => {
    openGeocoder().geocode(name).end((err, res) => {
      if ( !res ) reject(res);
      else resolve(res);
    });
  });
}

async function check_missing_latlng(data) {
  for ( let id in data['@graph']) {
    if ( data['@graph'][id]['@id'].includes('_:b') && !data['@graph'][id]['latitude'] ) {
      let lat = 0, lng = 0, name = data['@graph'][id].name;
      try {
        const location = await get_location_info(name);
        if ( location ) {
          lat = location[0].lat;
          lng = location[0].lon;

          data['@graph'][id]['latitude']  = lat;
          data['@graph'][id]['longitude'] = lng;
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  return data;
}

router.get('/:id', (req, res) => {
  const url = 'https://sandbox.dams.library.ucdavis.edu/fcrepo/rest/collection/chardonnay2/chardonnay.json';
  fetch(url)
  .then(res => res.json())
  .then(data => {
    if ( data ) {
      (async function() {
        res.send(await check_missing_latlng(data));
      })();
    } else {
      let _data = fs.readFileSync(path.join(__dirname, '..', '..', 'mock', req.params.id + '.json'), 'utf-8');
      let data  = JSON.parse(_data);
      res.json(data);
    }
  })
  .catch(err => {
    console.log('Error: ', err);
  });

});

module.exports = router;
