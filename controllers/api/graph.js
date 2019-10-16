var router = require('express').Router();
let fs = require('fs');
let path = require('path');

router.get('/mock', (req, res) => {
  let data = fs.readFileSync(path.join(__dirname, '..', '..', 'mock', 'mock-graph.js'), 'utf-8');
  res.json(JSON.parse(data));
});

module.exports = router;