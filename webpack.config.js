const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let devtool = false,
    plugins = [];

if (process.env.NODE_ENV === 'production') {
    plugins = [
        new UglifyJsPlugin({
            uglifyOptions: {
                mangle: false
            }
        })
    ];
}

const config = {
    entry: [
        'webpack-dev-server/client?http://localhost:8081',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',

        'react-hot-loader/patch',
        // activate HMR for React

        './src/index'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.min\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ],
                exclude: /\.min\.css/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: { loader: 'babel-loader' },
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: { limit: 25000 }
            },
            {
                test: /\.csv$/,
                loader: 'dsv-loader'
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/fonts/'
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new webpack.NoEmitOnErrorsPlugin(),
        // do not emit compiled assets that include errors

        new CopyWebpackPlugin([{
            context: 'src/assets',
            from: '**/*'
        },
            {
                context: 'node_modules/@salesforce-ux/design-system/assets',
                from: '**/*',
                to: 'css/sfdc/'
            }]),

        ...plugins
    ],
    devtool,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8081,
        open: true,

        historyApiFallback: true,
        // respond to 404s with index.html

        hot: true,

    }
};

module.exports = config;