module.exports = {
  baseUrl: '/',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false
    },
    externals: process.env.NODE_ENV === 'production' ? {
      // Replace external dependencies with empty objects in production build
      // to prevent potential hanging API calls during build
      'axios': 'axios'
    } : {}
  }
}
