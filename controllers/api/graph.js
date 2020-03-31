var router   = require('express').Router();
const fetch  = require('node-fetch');
const https  = require('https');

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

    // Check for top level error
    var req = https.get(url, (res) => {      
      if ( res.statusCode !== 200 ) {
        console.log('statusCode: ', res.statusCode);
        console.log('statusMessage: ', res.statusMessage);
        res.on('data', (d) => process.stdout.write(d));
        return;
      }
      
      getData(url);
    });
  }
});

module.exports = router;
