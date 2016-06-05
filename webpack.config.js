module.exports = {
  context: __dirname + "/src",
  entry: "./entry",
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