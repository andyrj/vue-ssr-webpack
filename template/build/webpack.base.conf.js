const path = require('path')
const vueConfig = require('./vue-loader.conf')
const AssetsPlugin = require('assets-webpack-plugin')
let assetsPluginInstance = new AssetsPlugin(
  {
    path: path.join(__dirname, '../dist/'),
    filename: 'assets.json'
  }
)

module.exports = {
  devtool: process.env.NODE_ENV !== 'production' ? '#source-map' : false,
  entry: {
    app: './src/client-entry.js',
    vendor: [
      'yaku',
      'vue',
      'vue-router',
      'vuex'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public')
    }
  },
  plugins: [assetsPluginInstance],
  module: {
    // noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
}
