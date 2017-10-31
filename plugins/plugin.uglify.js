const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/* setup the uglify plugin */
const uglify =
  new UglifyJsPlugin({
    test: /\.js/i,
    uglifyOptions: {
      ecma: 6,
    },
  });

module.exports = uglify;
