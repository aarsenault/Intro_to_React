const path = require('path');

module.exports = {
    //  to run webpack from anywhere
    //  __dirname is a node global variable that refers to root of proj.
    context: __dirname,
    // this is the 'front door' of project
    entry: './js/ClientApp.jsx',
    devtool: 'cheap-eval-source-map',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    devServer: {
        // the name of the path on the server where you expect bundle to be
        publicPath: '/public/'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },

    module: {
        rules: [
            // runs all js through elsint outputs errors to console
            {
                enforce: 'pre', // pre insures BEFORE babel
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/ // don't run on code from modules
            },

            // passes all js files to bable
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    }
};
