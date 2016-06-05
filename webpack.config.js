module.exports = {
  context: __dirname + "/dist",
  entry: "./index",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.coffee$/,
      loader: 'coffee-loader'
    }]
  }
}