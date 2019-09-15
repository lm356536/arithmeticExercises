// const autoprefixer = require('autoprefixer')
// const pxtoviewport = require('postcss-px-to-viewport')
module.exports = {
  outputDir: './dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  lintOnSave: true
}
