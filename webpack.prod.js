const path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "cookieconsent.min.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        moduleIds: 'total-size',
        mangleWasmImports: true,
        concatenateModules: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }, plugins: [
        new CleanWebpackPlugin(),
        new MinifyPlugin({
            removeDebugger: true,
            removeConsole: true,
            mangle: true
        }, {
            sourceMap: false,
            comments: false
        })
    ]
};
