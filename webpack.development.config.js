const webpack = require('webpack');
const common = require('./webpack.common.config.js');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  /* add source maps to the base config */
  devtool: 'source-map',
  /* add dev server config */
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
