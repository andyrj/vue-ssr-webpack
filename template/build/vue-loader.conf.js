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
    css: "css-loader",
		less: "css-loader!less-loader",
		stylus: "css-loader!stylus-loader",
		scss: "css-loader!sass-loader?includePaths[]=" + bourbon.includePaths +
      "&includePaths[]=" + neat.includePaths[1],
    sass: "css-loader!sass-loader?includePaths[]=" + bourbon.includePaths +
      "&includePaths[]=" + neat.includePaths[1]
  }
}