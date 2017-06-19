import webpack from 'webpack';
import path from 'path'

process.noDeprecation = true;

export default {
    entry: path.resolve(__dirname, './src/Index.jsx'),
    output: {
        path: path.resolve(__dirname, './bin'),
        filename: 'client.bundle.js',
        chunkFilename: '[name].[chunkhash:5].chunk.js',
        sourceMapFilename: '[file].map',
        publicPath:"/assets/",
    },
    devtool: 'source-map',
    module: {
        rules:[
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname,'app')
                    ,path.resolve(__dirname,'node_modules/antd-mobile')
                ],
                loader: "babel-loader",
            },{
                test: /\.(scss|gscss)?$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]", // translates CSS into CommonJS
                    "sass-loader", // compiles Sass to CSS
                ],

                include:[
                    path.resolve(__dirname,'app')
                    ,path.resolve(__dirname,'node_modules/antd-mobile')
                ]
            },
            {test: /\.(png|jpg|svg|gif)$/, loader: 'url-loader?limit=25000'},
            {test: /\.(woff|ttf|eot|woff2)$/, loader: 'url-loader?limit=100000'},
        ],
    },
    resolve: {
        extensions: [ '.web.js','.js', '.jsx','.scss','.less']
    },
    devServer: {
        proxy: {
            '/api': 'http://172.16.136.70:8080'
        },
        contentBase: [path.join(__dirname, 'public'),path.join(__dirname, 'bin')],
        historyApiFallback: true
    },

    plugins: [
        new webpack.BannerPlugin('This file is created by Jerry'),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
            __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'true'))
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ]

}
