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
		scss: "css-loader!sass-loader",
    sass: "css-loader!sass-loader"
  }
}