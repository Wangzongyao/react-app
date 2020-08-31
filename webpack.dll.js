const path = require('path')
const webpack = require('webpack')

const LIBRARY = '[name]_[hash]'

module.exports = {
    mode: 'development',
    entry: {
        vendors: ['react', 'react-dom', 'react-redux', 'redux', 'redux-saga', 'lodash'],
    },
    output: {
        filename: `${LIBRARY}.dll.js`,
        path: path.join(__dirname, 'dist'),
        library: LIBRARY,
    },
    plugins: [
        new webpack.DllPlugin({
            // manifest json 文件的绝对路径 (输出文件)
            path: path.join(__dirname, 'dist', '[name]-manifest.json'),
            // 暴露出的 DLL 的函数名
            name: LIBRARY,
        }),
    ],
}
