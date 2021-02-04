const path = require('path')
module.exports = {
  publicPath: './',
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve('src'))
      .set('@TemUi', path.resolve('tem-ui'))
      .set('TemUi', path.resolve('tem-ui/package/index.js'))
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader-v16')
      .loader('vue-loader-v16')
      .options({
        compiler: require('@vue/compiler-sfc')
      })
      .end()
      .use(path.resolve('tem-ui/config/md-loader/index.js'))
      .loader(path.resolve('tem-ui/config/md-loader/index.js'))
  }
}
