var router  = require('express').Router();
let fs      = require('fs');
let path    = require('path');
let fetch   = require('node-fetch');

const openGeocoder = require('node-open-geocoder');

function get_location_info (name) {
  return new Promise((resolve, reject) => {
    openGeocoder().geocode(name).end((err, res) => {
      if ( !res ) reject(res);
      else resolve(res);
    });
  });
}

async function check_missing_latlng() {
  let _data = fs.readFileSync(path.join(__dirname, '..', '..', 'mock/chardonnay.json'), 'utf-8');
  const data  = JSON.parse(_data);

  for ( let id in data['@graph']) {
    if ( data['@graph'][id]['@id'].includes('_:b') && !data['@graph'][id]['latitude'] ) {
      let lat = 0, lng = 0, name = data['@graph'][id].name;

      try {
        const location = await get_location_info(name);

        if ( location.length === 5 ) {
          lat = location[0].lat;
          lng = location[0].lon;

          data['@graph'][id]['latitude']  = lat;
          data['@graph'][id]['longitude'] = lng;

          setTimeout(() => {
            return data;
          }, 200);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
}

router.get('/:id', async (req, res, next) => {
  const url = 'https://sandbox.dams.library.ucdavis.edu/fcrepo/rest/collection/chardonnay2/chardonnay.json';
  fetch(url)
  .then(res => res.json())
  .then(data => {
    if ( data ) {
      res.send(data);
    } else {
      let _data = fs.readFileSync(path.join(__dirname, '..', '..', 'mock', req.params.id + '.json'), 'utf-8');
      let data  = JSON.parse(data);
      res.json(data);
    }
  })
  .catch(err => {
    console.log(err)
  });

  /*
  let _data = fs.readFileSync(path.join(__dirname, '..', '..', 'mock', req.params.id + '.json'), 'utf-8');
  let data  = JSON.parse(_data);

  res.json(data);
  */
});

module.exports = router;
