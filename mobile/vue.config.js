// vue.config.js
module.exports = {
  devServer: {
    proxy: 'http://220.191.216.242:8080', // target host
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/'
};
