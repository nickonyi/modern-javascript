module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    publicPath: "/",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
    open: true,
  },
};
