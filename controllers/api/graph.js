var router  = require('express').Router();
let fetch   = require('node-fetch');

const config   = require('../../config');
const endpoint = config.server.endpoint;

router.get('/:id', (req, res) => {
  if ( req.params.id !== 'undefined' ) {
    const moment = req.params.id;

    const url = endpoint + '/' + moment + '/' + moment + '.json';
  
    const getData = async url => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        res.json(json);
      } catch (e) {
        res.status(400).json({
          error: true,
          message: e.message
        });
      }
    };

    getData(url);
  }
});

module.exports = router;
