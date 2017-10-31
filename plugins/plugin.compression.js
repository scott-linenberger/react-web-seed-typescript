const CompressionPlugin = require('compression-webpack-plugin');

const compressionPlugin = new CompressionPlugin({
  asset: '[path].gz[query]',
  algorithm: 'gzip',
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0.8,
});

module.exports = compressionPlugin;
