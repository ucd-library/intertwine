let env = process.env.APP_ENV || 'dev';
let clientPackage = require('./client/public/package.json');

module.exports = {
  server : {
    assets : (env === 'prod') ? 'dist' : 'public',
    appRoutes : ['map', 'moment', 'about'],
    port : process.env.APP_PORT || 3000
  },
  
  client : {
    gaCode : process.env.GOOGLE_ANALYTICS || '',
    versions : {
      bundle : clientPackage.version,
      loader : clientPackage.dependencies['@ucd-lib/cork-app-load'].replace(/^\D/, '')
    }
  }
}