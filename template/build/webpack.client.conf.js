const webpack = require('webpack')
const base = require('./webpack.base.conf')
const vueConfig = require('./vue-loader.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')

const config = Object.assign({}, base, {
  resolve: {
    alias: Object.assign({}, base.resolve.alias, {
      'create-api': './create-api-client.js'
    })
  },
  plugins: (base.plugins || []).concat([
    // strip comments in Vue code
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
	])
})

// Use ExtractTextPlugin to extract CSS into a single file
// so it's applied on initial render.
// vueConfig is already included in the config via LoaderOptionsPlugin
// here we overwrite the loader config for <style lang="stylus">
// so they are extracted.
vueConfig.loaders = {
	css: ExtractTextPlugin.extract({
			loader: 'css-loader',
		fallbackLoader: 'vue-style-loader'
	}),
	less: ExtractTextPlugin.extract({
			loader: 'css-loader!less-loader',
		fallbackLoader: 'vue-style-loader'
	}),
	stylus: ExtractTextPlugin.extract({
			loader: 'css-loader!stylus-loader',
		fallbackLoader: 'vue-style-loader'
	}),
	scss: ExtractTextPlugin.extract({
			loader: 'css-loader!sass-loader',
		fallbackLoader: 'vue-style-loader'
	}),
	sass: ExtractTextPlugin.extract({
		loader: 'css-loader!sass-loader',
		fallbackLoader: 'vue-style-loader'
	})
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new ExtractTextPlugin('styles.[hash].css'),
		// this is needed in webpack 2 for minifying CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
		// dedupe and minify css after webpack build is finished
    new WebpackShellPlugin({onBuildExit:['ls -d1 dist/styles* | xargs -I {} ./node_modules/.bin/cleancss -o {} {}']})
  )
} else {
	config.plugins.push(
		new ExtractTextPlugin('styles.css')
	)
}

module.exports = config