// https://github.com/gaearon/react-transform-boilerplate/blob/master/devServer.js

const path = require("path");
const express = require("express");
const webpack = require("webpack");
const config = require("./webpack.config.js");

const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {publicPath: config.output.publicPath}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, "localhost", err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:3000");
});
