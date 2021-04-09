let env = process.env.APP_ENV || 'dev';
let clientPackage = require('./client/public/package.json');

let sandbox  = 'https://sandbox.dams.library.ucdavis.edu';
let moments  = 'https://moments.dams.library.ucdavis.edu';
let localDev = 'http://localhost:3001';

let envEndpoint = (env === 'prod') ? moments : sandbox;

module.exports = {
  server : {
    assets : (process.env.CLIENT_ENV === 'prod') ? 'dist' : 'public',
    endpoint : (process.env.ENDPOINT_URL || envEndpoint) + '/fcrepo/rest/collection/intertwine/moments',
    appRoutes : ['about', 'home', 'map', 'story'],
    port : process.env.APP_PORT || process.env.PORT || 3000
  },
  client : {
    gaCode : process.env.GOOGLE_ANALYTICS || '',
    versions : {
      bundle : clientPackage.version,
      loader : clientPackage.dependencies['@ucd-lib/cork-app-load'].replace(/^\D/, '')
    }
  }
}
