const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './components/app.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      }
    ],
  },
  plugins: [
    new Dotenv({
      path: '.env.local'
    })
  ]
}
