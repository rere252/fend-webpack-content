const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
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
  },
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'json'
    }),
    new HtmlWebpackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html'
    }),
    new CleanWebpackPlugin({
      verbose: true
    })
  ]
};
