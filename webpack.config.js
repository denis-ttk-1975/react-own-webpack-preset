const path = require("path");
// Импортируем пакет path
const webpack = require("webpack");
// Подключим сам webpack

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.(woff|woff2)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "./dist"),
    compress: true,
    port: 3000,
    // сообщим dev-серверу, что в проекте используется hmr
    hot: true,
  },
};
