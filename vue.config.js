module.exports = {
    lintOnSave: false,
    outputDir: 'ei',
    productionSourceMap: false,
    devServer: {
        open: false,
        proxy: {
            '/sesp': {
                target: 'http://192.1.102.67:19500',
                changeOrigin: true
            }
        },
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
}