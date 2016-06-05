module.exports = {
  context: __dirname + "/build",
  entry: "./index",
  output: {
    path: __dirname + "/public/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.coffee$/,
      loader: 'coffee-loader'
    }]
  }
}