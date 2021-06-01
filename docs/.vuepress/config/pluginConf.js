// 不要忘了安装 moment
//设置时间语言
const moment = require('moment');
moment.locale('zh-cn');

module.exports = {
    '@vuepress/last-updated': {
      transformer: (timestamp) => {
        return moment(timestamp).format('LLLL')
      }
    },

    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "发现新的内容可用",
        buttonText: "刷新"
      }
    },

    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',
      // 其他的 Vssue 配置
      owner: 'ayanamiblhx',
      repo: 'docs',
      clientId: '0fd26a9c0c8b0a13db82',
      clientSecret: 'b67a96521523d94c864ea07cf452c4519647201c',
      autoCreateIssue: true,
    },

    '@vuepress/back-to-top': true,

    '@vuepress/google-analytics': {
      'ga': 'UA-198343904-1'
    },
  }