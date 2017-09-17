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
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    }
};
