// 不要忘了安装 moment
//设置时间语言
const moment = require('moment')
moment.locale('zh-cn')

module.exports = {
  title: "vuepress title",
  description: "vuepress description",
  head: [
    ['meta', {
      name: 'author',
      content: 'ayanami'
    }],
    ['meta', {
      name: 'keywords',
      content: 'ayanami'
    }],
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-icon-152x152-dunplab-manifest-41001.jpg' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/apple-icon-144x144-dunplab-manifest-41001.jpg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  plugins: {
    '@vuepress/last-updated':
      {
        transformer: (timestamp) => {
          return moment(timestamp).format('LLLL')
        }
      },

      '@vuepress/pwa':
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新的内容可用",
          buttonText: "刷新"
        }
      },

      '@vssue/vuepress-plugin-vssue':{
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
        // 其他的 Vssue 配置
        owner: 'ayanamiblhx',
        repo: 'docs',
        clientId: '0fd26a9c0c8b0a13db82',
        clientSecret: 'b67a96521523d94c864ea07cf452c4519647201c',
        autoCreateIssue: true,
      },
  },
    
  themeConfig: {
    lastUpdated: '更新时间',
    // logo
    logo: '/assets/img/logo.jpg',

    // 侧边栏
    sidebar: [
      '',
      'about',
      {
        title: 'css组', // 必要的
        path: '/css/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          '/css/css1',
          '/css/css2',
          '/css/css3',
        ]
      },
    ],

    // 导航栏链接
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/about'
      },

      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [{
            text: 'Group1',
            items: [{
                text: 'Home',
                link: '/'
              },
              {
                text: 'Guide',
                link: '/'
              },
            ]
          },
          {
            text: 'Group2',
            items: [{
                text: 'Home',
                link: '/'
              },
              {
                text: 'Guide',
                link: '/'
              },
            ]
          }
        ]
      },

      {
        text: 'External',
        link: 'https://google.com'
      },

    ]
  }
}