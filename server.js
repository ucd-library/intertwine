const express = require('express');
const app     = express();
const config  = require('./config');
const fs      = require('fs');
const https   = require('https');

//const url   = 'https://sandbox.dams.library.ucdavis.edu/fcrepo/rest/collection/chardonnay2/chardonnay.json';
const url = 'https://sandbox.dams.library.ucdavis.edu/fcrepo/rest/collection/chardonnay2/chardonnay.json/d6/8e/6e/59/d68e6e59-02aa-44b9-a983-c4daf97c6edf';
const file = fs.createWriteStream('./mock/chardonnay.json');

https.get(url, (res) => {
  res.on('data', (data) => file.write(data))
})
.on('end', () => file.end());

app.use('/api', require('./controllers/api'));
require('./controllers/static')(app);

app.listen(config.server.port, () => {
  console.log('InterWINE is up and running on port: '+config.server.port);
})
