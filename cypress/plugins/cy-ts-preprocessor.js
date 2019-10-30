const wp = require('@cypress/webpack-preprocessor');
const path = require("path");

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      "@page-objects": path.resolve(__dirname, "../support/page_objects"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /node_modules\/axe-core\/axe.js$/,
        use: ['raw-loader'],
      },
    ]
  }
}

const options = {
  webpackOptions
}

module.exports = wp(options)
