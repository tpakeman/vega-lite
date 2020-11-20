const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/vega-3.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    port: 8080,
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};