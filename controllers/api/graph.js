var router  = require('express').Router();
let fs      = require('fs');
let path    = require('path');

router.get('/:id', (req, res) => {
  let data = fs.readFileSync(path.join(__dirname, '..', '..', 'mock', req.params.id + '.json'), 'utf-8');
  res.json(JSON.parse(data));
});

module.exports = router;
