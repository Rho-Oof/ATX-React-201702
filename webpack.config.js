var path = require ( 'path' )

module.exports = {
  cache: true,
  entry: './index.js',
  output: {
    path: path.join ( __dirname, 'dist/' ),
    publicPath: '/dist/',
    filename: 'index.js'
  },
  resolve: {
    alias: {
      Components: path.resolve ( __dirname, 'Components/' )
    }
  },
  devtool: 'source-map',
  devServer: {
    publicPath: '/dist/',
    hot: false,
    contentBase: path.resolve ( __dirname, 'Static/' )
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [ /(node_modules)/, /\?source$/],
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react' ]
        }
      },
      {
        test: /\.css$/,
        use: [ 
          { loader: 'style-loader' }, 
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.woff2?/,
        loaders: [ 'url-loader?name=[path][name].[ext]?[hash]&mime-type=application/font-woff' ]
      },
      {
        test: /\.(ttf|eot|svg|jpe?g|png|gif)/,
        loaders: [ 'url-loader?name=[path][name].[ext]?[hash]' ]
      },
      {
        test: /\?source$/,
        loaders: [
          'file-loader?name=[path][name].js?[hash]'
        ]
      },
      {
        test: /\.json$/,
        loaders: [ 'json-loader' ]
      }
    ]
  }
}
