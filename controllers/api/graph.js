var router  = require('express').Router();
let fetch   = require('node-fetch');

const config   = require('../../config');
const endpoint = config.server.endpoint;

router.get('/:id', (req, res, next) => {
  if ( req.params.id !== 'undefined' ) {
    const moment = req.params.id;

    const url = endpoint + '/' + moment + '/' + moment + '.json';

    const getData = async url => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        res.json(json);
      } catch (err) {        
        next(err); // pass errors to Express
      }
    };

    getData(url);
  }
});

module.exports = router;
