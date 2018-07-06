const path = require('path');
const UI_PATH = path.join(__dirname, 'react-ui');
const BUILD_DIR = path.join(UI_PATH, 'build');
const webpack = require('webpack');
module.exports = {
    entry: [
        path.join(UI_PATH, 'src', 'app.js')
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'es2015',
                        ]
                    }}
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: BUILD_DIR,
        publicPath:BUILD_DIR,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: BUILD_DIR,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};