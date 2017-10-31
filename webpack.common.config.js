const path = require('path');

/* plugins */
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* rules */
const ruleTs = require('./rules/rule.typescript.js');
const ruleSass = require('./rules/rule.sass.js');

const appData = require('./src/AppData');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      ruleTs,
      ruleSass,
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.handlebars',
      data: appData,
    }),
  ]
};