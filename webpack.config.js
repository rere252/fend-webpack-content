const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: './src/client/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // Loaders are executed right-to-left (or bottom-to-top).
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  }
};
