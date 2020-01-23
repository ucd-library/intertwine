const express = require('express');
const app     = express();
const config  = require('./config');
//const fs      = require('fs');
//const https   = require('https');

//const url = 'https://sandbox.dams.library.ucdavis.edu/fcrepo/rest/collection/moments/jop/jop.json';
//const file = fs.createWriteStream('./mock/jop.json');

//const url = 'https://sandbox.dams.library.ucdavis.edu/fcrepo/rest/collection/moments/chardonnay/chardonnay.json';
//const file = fs.createWriteStream('./mock/chardonnay.json');

/*
https.get(url, (res) => {
  res.on('data', (data) => file.write(data))
})
.on('end', () => file.end());
*/

app.use('/api', require('./controllers/api'));
require('./controllers/static')(app);

app.listen(config.server.port, () => {
  console.log('InterWINE is up and running on port: '+config.server.port);
})
