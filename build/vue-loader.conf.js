var ExtractTextPlugin = require("extract-text-webpack-plugin")
var bourbon = require('node-bourbon')
var neat = require('node-neat')

module.exports = {
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ],
  loaders: {
    css: ExtractTextPlugin.extract("css-loader"),
    sass: ExtractTextPlugin.extract(
      "css-loader!sass-loader?includePaths[]=" + bourbon.includePaths +
      "&includePaths[]=" + neat.includePaths[1]
    )
  }
}