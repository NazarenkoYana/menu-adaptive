const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
const StyleExtHtmlWebpackPlugin = require("style-ext-html-webpack-plugin");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

console.log(IS_PRODUCTION);

module.exports = {
    entry: './src/app.js',
    mode: (IS_PRODUCTION) ? 'production' : 'development',
    devtool: (IS_PRODUCTION) ? undefined : "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        // publicPath: '/dist',
        // contentBase: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            scriptLoading: 'defer',
            // inject: false,
            static: false
        }),

    ]
};
