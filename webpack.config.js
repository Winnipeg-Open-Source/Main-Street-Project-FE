const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    return {
        devtool: isProd ? 'none' : 'source-map',
        mode: isProd ? 'production' : 'development',
        watch: !isProd,
        entry: './src/index.js',
        output: {
            filename: isProd ? 'main.[hash].js' : 'main.js',
            hashDigestLength: 7,
            path: path.resolve(__dirname, '/dist/public'),
            publicPath: '/',
        },
        devServer: {
            open: true,
            port: 3000,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(svg|png|gif|jpg|ico)$/,
                    exclude: /node_modules/,
                    loader: 'file-loader',
                },
            ],
        },
        plugins: [
            new AssetsPlugin({
                filename: './public/assets.json',
                path: './dist',
            }),
            isProd ? new BundleAnalyzerPlugin() : () => {},
            new HtmlWebpackPlugin({
                inject: true,
                template: path.resolve(__dirname, 'public/index.html'),
            }),
        ],
    };
};
