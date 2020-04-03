const path = require("path")
const ExtractCSS = require("extract-text-webpack-plugin")
const autoprefixer = require("autoprefixer")

const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js")
const OUTPUT_DIRECTORY = path.join(__dirname, "static")

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: ExtractCSS.extract([
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [autoprefixer({ overrideBrowserslist: "cover 99.5%" })]
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIRECTORY,
    filename: "[name].js"
  },
  plugins: [new ExtractCSS("styles.css")]
}

module.exports = config
