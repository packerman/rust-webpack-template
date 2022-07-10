const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  mode: "production",
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
    asyncWebAssembly: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        path.resolve(__dirname, "static"),
      ],
    }),
    new WasmPackPlugin({
      crateDirectory: __dirname,
    }),
  ],
};
