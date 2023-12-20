const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
var glob = require("glob");

const entryFiles = glob
  .sync("./src/**/*.ts")
  .reduce((previousValue, currentValue, currentIndex, array) => {
    return typeof previousValue === "string"
      ? {
          [path.basename(previousValue, path.extname(previousValue))]:
            previousValue,
          [path.basename(currentValue, path.extname(currentValue))]:
            currentValue,
        }
      : {
          ...previousValue,
          [path.basename(currentValue, path.extname(currentValue))]:
            currentValue,
        };
  });

module.exports = {
  entry: Object.fromEntries(
    glob
      .sync(path.resolve(__dirname, "src/**/*.ts"))
      .map((v) => [v.split("src/")[1].split(".ts")[0], v])
  ),
  devtool: "inline-source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"],
    },
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    // library: "shopinzen-analytics",
    libraryTarget: "umd",
    clean: true,
  },
};
