module.exports = {
  publicPath: "./",
  assetsDir: "static",
  outputDir: 'dist',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views',
      }
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/index";`,
      },
    },
  }
}
