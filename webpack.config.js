const path = require('path');
const {
    CheckerPlugin
} = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    optimize
} = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV = "development";
}

var prodPlugins = [];
if (process.env.NODE_ENV === 'production') {
    prodPlugins.push(
        new optimize.AggressiveMergingPlugin(),
        new optimize.OccurrenceOrderPlugin()
    );
}

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        index: './src/index.tsx',
    },
    devtool: process.env.NODE_ENV === 'production' ? 'none' :'inline-source-map',
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader?{configFileName: "tsconfig.json"}',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ],
    },
    resolve:  {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            "@": path.resolve(__dirname, 'src')
        }
    },    
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-redux': 'ReactRedux',
        'react-router': 'ReactRouter',
        'redux': 'Redux',
        'xterm': 'Terminal'
    },
    plugins: [
        new CheckerPlugin(),
        ...prodPlugins,
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new CopyPlugin([
            { from: "static" }
        ]),
    ],
    optimization: {
        minimize: process.env.NODE_ENV === 'production'
    },
    devServer: {
        publicPath: '/',
        hot: true,
        inline: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        disableHostCheck: true,
        historyApiFallback: {
            index: '/'
        },
        contentBase: path.join(__dirname, 'static'),
        compress: true,
        allowedHosts: ["*"],
        port: 8080
    }
};