var router  = require('express').Router();
let fs      = require('fs');
let path    = require('path');
let fetch   = require('node-fetch');

router.get('/:id', (req, res) => {
  /*
  const url = 'https://sandbox.dams.library.ucdavis.edu/fcrepo/rest/collection/chardonnay2/chardonnay.json';
  const options  = {
    method: 'GET',
    port: 443,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/ld+json;'
    }
  }

  fetch(url, options)
  .then(res => res.json())
  .then(data => {
    if ( data ) {
      res.send({ data });
    } else {
      let data = fs.readFileSync(path.join(__dirname, '..', '..', 'mock', req.params.id + '.json'), 'utf-8');
      res.send(JSON.parse(data));
    }
  })
  .catch(err => {
    console.log(err)
  });
  */

  let data = fs.readFileSync(path.join(__dirname, '..', '..', 'mock', req.params.id + '.json'), 'utf-8');
  res.json(JSON.parse(data));
});

module.exports = router;
