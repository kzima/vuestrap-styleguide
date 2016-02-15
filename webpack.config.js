var path = require('path');

module.exports = {
  resolve: {
    root: path.resolve('./')
  },
  entry: [
    './src/styleguide/index.js'
  ],
  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: "bundle.js"
  },
  themeLoader: {
    themes: ['./src/theme/variables.scss', './node_modules/vuestrap/theme/_bootstrap.scss'], // docs theme, default bootstrap
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel'
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader!vuestrap-theme-loader'
    }]
  }
};
