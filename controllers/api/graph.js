var router   = require('express').Router();
const fetch  = require('node-fetch');
const config   = require('../../config');
const endpoint = config.server.endpoint;

router.get('/:id', (req, res) => {
  if ( req.params.id !== 'undefined' ) {
    const moment = req.params.id;
    const url = endpoint + '/' + moment + '/' + moment + '.json';
    const getData = async url => {
      try {
        const response = await fetch(url);
        if ( response.status !== 200 ) {
          console.error('Error status code: ', response.status);
          res.status(response.status).json({
            error: true,
            message: response.message
          });
        } else {
          const json = await response.json();
          res.json(json);
        }       
      } catch (e) {
        console.error('E: ', e);
      }
    };
    
    getData(url);
  }
});

module.exports = router;
