const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');
const webpack = require('webpack');

console.log(path.resolve);

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = env => {

  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader", // compiles Sass to CSS, using Node Sass by default
            {
              loader: 'sass-resources-loader',
              options: {
                resources: ['./src/sass/vars.scss', './src/sass/mixins.scss', './src/sass/mixins.scss', './src/sass/fontawesome/fontawesome.scss']
              },
            },
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        },
        // {
        //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        //   use: [{
        //     loader: 'file-loader',
        //     options: {
        //       name: '[name].[ext]',
        //       outputPath: 'fonts/'
        //     }
        //   }]
        // },
        // {
        //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        //   use: [{
        //     loader: 'file-loader',
        //     options: {
        //       name: 'src/sass/fonts/[name].[ext]',
        //       outputPath: 'dist/fonts/'
        //     }
        //   }]
        // }
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: './src/sass/fonts/[name].[ext]',
                outputPath: 'assets/fonts/'
              }
            }
          ]
        }

      ]
    },
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'src/assets'),
      }
    },

    plugins: [htmlWebpackPlugin]
  }
};
