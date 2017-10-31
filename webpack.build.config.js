const webpack = require('webpack');
const common = require('./webpack.common.config');
const merge = require('webpack-merge');

/* plugins */
const uglify = require('./plugins/plugin.uglify.js');
const compression = require('./plugins/plugin.compression');

const define = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});

module.exports = merge(common, {
  plugins: [
    uglify,
    define,
    compression,
  ],
});
