const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [ 'babel-polyfill', 'react-hot-loader/patch', './src/index' ]
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [ 'babel-loader' ]
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        // Font loader
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        loader: 'file-loader'
      },
      {
        // Image loader
        test: /\.png$/,
        loader: 'url-loader'
      }
    ]
  }
};
