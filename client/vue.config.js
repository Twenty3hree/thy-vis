module.exports = {
    devServer: {
        proxy: 'http://localhost:3000'
    },
    lintOnSave: false // 取消 eslint 验证
}