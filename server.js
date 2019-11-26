const express = require('express');
const app     = express();
const config  = require('./config');

/*
const fetch   = require('node-fetch');
const fs      = require('fs');

// https://www.freecodecamp.org/news/a-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547/
const endpoint = "https://sandbox.dams.library.ucdavis.edu/fcrepo/rest/collection/chardonnay";
const store_data = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/ld+json; profile=\"http://www.w3.org/ns/json-ld#compacted\"",
      }
    });
    console.log("response: ", response);
    const json = await response.json();
    return fs.writeFile('./mock/data.json', JSON.stringify(json, null, 2), (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

store_data(endpoint);
*/

app.use('/api', require('./controllers/api'));
require('./controllers/static')(app);

app.listen(config.server.port, () => {
  console.log('InterWINE is up and running on port: '+config.server.port);
})
