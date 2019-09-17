module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  devServer: {
    contentBase: __dirname + "/dist",
    open: true
  },
};