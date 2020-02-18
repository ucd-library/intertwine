const express = require('express');
const app     = express();
const config  = require('./config');

app.use('/api', require('./controllers/api'));
require('./controllers/static')(app);

app.listen(config.server.port, () => {
  console.log('InterWINE is up and running on port: ' + config.server.port);
});
