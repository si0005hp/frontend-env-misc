const webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: './entry.js',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/output/`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }
    ]
  }
};
