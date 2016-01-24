var webpack = require('webpack');

module.exports = {  
  entry: './src/app.ts',
  output: {
    filename: './dist/js/app.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  noParse: [ /.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/ ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false
    })
  ]
};