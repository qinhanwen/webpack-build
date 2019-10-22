const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', //打包模式 development和production，是否压缩打包出来的文件
    entry: "./index.js", //从哪个文件开始打包
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist'],
            verbose: true
        })
    ],
    output: { //输出
        filename: '[hash].js', //最终文件命名
        path: path.resolve(__dirname, 'dist'), //输出文件夹的路径
    }
}