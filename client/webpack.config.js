const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'public/elements/inter-wine-app.js'),
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module : {
    rules: [
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: false
            }
          }
        },
        {
          test: /\.css$/,
          use: [ 'to-string-loader', 'css-loader' ]
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
    ]
  }
};