const path = require("path");

module.exports = {
    entry: "./frontend/src/index.js",
    output: {
        path: path.resolve("frontend/public"), //changed from public to frontend public
        filename: "bundle.js"
    },
    mode: "development",
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
                test: /\.css$/,  // New: Basic CSS handling
                use: ['style-loader', 'css-loader']  // Injects and parses CSS
            },
            
        ]
    }
}