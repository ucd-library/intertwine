var router  = require('express').Router();
let fs      = require('fs');
let path    = require('path');

router.get('/:id', (req, res) => {
  let _data = fs.readFileSync(path.join(__dirname, '..', '..', 'mock', req.params.id + '.json'), 'utf-8');
  let data  = JSON.parse(_data);
  res.json(data);
});

module.exports = router;
