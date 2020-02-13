var router  = require('express').Router();
let fs      = require('fs');
let path    = require('path');
let fetch   = require('node-fetch');

const config   = require('../../config');
const endpoint = config.server.endpoint;

router.get('/:id', (req, res) => {
  const url = endpoint + '/' + req.params.id + '/' + req.params.id + '.json';

  // https://daveceddia.com/unexpected-token-in-json-at-position-0/
  fetch(url)
    .then(res => res.json())
    .then(json => {
      if ( json ) {
        res.json(json);
      } else {
        let rawdata = fs.readFileSync(path.join(__dirname, '..', '..', 'mock', req.params.id + '.json'));
        let data = JSON.parse(rawdata);
        res.json(data);
      }
    }).catch(err => console.log('Error: ', err));
});

module.exports = router;
