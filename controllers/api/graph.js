var router   = require('express').Router();
const fetch  = require('node-fetch');
const config   = require('../../config');
const endpoint = config.server.endpoint;

router.get('/:id', async (req, res) => {
  const moment = req.params.id;
  const url = endpoint + '/' + moment + '/' + moment + '.json';
  
  try {
    const response = await fetch(url);
    if ( response.status !== 200 ) {
      console.error('Error status code: ', response.status);
      
      res.status(response.status).json({
        error: true,
        message: response.message
      });
    } else {
      res.json(await response.json());
    }
  } catch (e) {
    console.error('E: ', e);
    res.status(500).json({
      error: true,
      message: e.message
    });
  }
});

module.exports = router;
