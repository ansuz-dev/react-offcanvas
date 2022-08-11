// fork of https://github.com/gaearon/react-transform-boilerplate/blob/master/webpack.config.dev.js

const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: [
    "eventsource-polyfill", // necessary for hot reloading with IE
    "webpack-hot-middleware/client",
    path.join(__dirname, "index.js"),
  ],
  output: {
    publicPath: "/",
    path: __dirname,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {modules: true},
          },
        ],
      },
      {
        test: /\.js$/u,
        exclude: /node_modules/u,
        loader: "babel-loader",
        options: {presets: ["@babel/preset-env", "@babel/preset-react"]},
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {alias: {"react-offcanvas": path.resolve(__dirname, "..", "src")}},
};
