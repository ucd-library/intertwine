const express = require('express');
const app     = express();
const config  = require('./config');
const fs      = require('fs');
const https   = require('https');

const endpoint = config.server.endpoint;
const moments  = config.server.moments;

// TODO: Implement this functionality once the json version match both here and in Fedora
// Load the files locally on app start so we have a fall back in case they can't get to the server
for ( let i = 0; i < moments.length; i++ ) {
  let url = endpoint + '/' + moments[i] + '/' + moments[i] + '.json';

  let file = fs.createWriteStream('./mock/' + moments[i] + '.json');

  https.get(url, (res) => {
    res.on('data', (data) => file.write(data))
  })
  .on('end', () => file.end());
}

app.use('/api', require('./controllers/api'));
require('./controllers/static')(app);

app.listen(config.server.port, () => {
  console.log('InterWINE is up and running on port: ' + config.server.port);
});
