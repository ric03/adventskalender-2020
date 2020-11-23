const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        new HtmlWebpackPlugin({template: "src/index.html"}),
        new CopyPlugin({patterns: ['src/styles.css', {from: path.resolve(__dirname, 'src', 'img'), to: 'img'}]})
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'), // Github Pages
    },
};
