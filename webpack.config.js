// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("webpack");

const ENV = process.env.NODE_ENV || "development";

const cssModuleName =
  ENV === "development" ? "[path][name]__[local]" : "[hash:base64]";

module.exports = {
  entry: ["./src/index"],

  output: {
    path: ENV === "development" ? path.resolve(__dirname, "build") : path.resolve(__dirname),
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    publicPath: ENV === "development" ? "/build/" : "/",
    // the url to the output directory resolved relative to the HTML page
    filename: "bundle.js",
    // the filename template for entry chunks
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.(png|jpg)$/,
        loader: "file-loader",
        options: {
          name : 'img/img-[hash:6].[ext]'
      }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,

              modules: {
                localIdentName: cssModuleName,
              },
            },
          },
        ],
        include: [path.resolve(__dirname, "src/components")],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: [path.resolve(__dirname, "src/components")],
      },
    ],
  },
  devtool: ENV !== "development" ? "source-map" : "eval-source-map",

  devServer: {
    compress: true,
    contentBase: ["./build"],
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
    inline: true,
    port: 8080,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "node_modules"),
    ],
  },
};
