const headConf = require('./config/headConf');
const pluginConf = require('./config/pluginConf');
const navConf = require('./config/navConf');
const sidebarConf = require('./config/sidebarConf');


module.exports = {
  title: "vuepress title",
  description: "vuepress description",

  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    lastUpdated: '更新时间',
    // logo
    logo: '/assets/img/logo.jpg',

    // 侧边栏
    sidebar: sidebarConf,
    // 导航栏链接
    nav: navConf,
  }
}