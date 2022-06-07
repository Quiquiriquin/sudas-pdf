const webpack = require("webpack");
// const nodeExternals = require("webpack-node-externals");

module.exports = {
  // externals: [nodeExternals()],
  webpack: {
    configure: {
      resolve: {
        fallback: {
          process: require.resolve("process/browser"),
          zlib: require.resolve("browserify-zlib"),
          stream: require.resolve("stream-browserify"),
          util: require.resolve("util"),
          buffer: require.resolve("buffer"),
          asset: require.resolve("assert"),
          path: require.resolve("path-browserify"),
          constants: require.resolve("constants-browserify"),
          os:require.resolve("os-browserify/browser"),
          https: require.resolve("https-browserify"),
          // http: require.resolve("stream-http") ,
          http: false,
          url: require.resolve("url/"),
          vm: require.resolve("vm-browserify"),
          crypto: require.resolve("crypto-browserify"),
          fs: false,
          child_process: false,
          worker_threads: false,
          "uglify-js": false,
          "tty": false,
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
          process: "process/browser",
        }),
      ],
    },
  },
};
