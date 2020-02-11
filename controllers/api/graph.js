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

router.get('/:id', (req, res) => {
  let _data = fs.readFileSync(path.join(__dirname, '..', '..', 'mock', req.params.id + '.json'), 'utf-8');
  let data  = JSON.parse(_data);
  res.json(data);
});

module.exports = router;
