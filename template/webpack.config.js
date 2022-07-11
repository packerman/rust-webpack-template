const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./js/index.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
  devtool: "eval-cheap-module-source-map",
  performance: {
    hints: false,
  },
  experiments: {
    syncWebAssembly: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        path.resolve(__dirname, "static"),
      ],
    }),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "."),
    }),
  ],
};
