// 不要忘了安装 moment
//设置时间语言
const moment = require('moment')
moment.locale('zh-cn')

module.exports = {
    base: "/docs/",
    title: "vuepress title",
    description: "vuepress description",
    head: [
      ['meta', { name: 'author', content: 'ayanami' }],
      ['meta', { name: 'keywords', content: 'ayanami' }],
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],

    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp) => {
            return moment(timestamp).format('LLLL')
          }
        }
      ]
    ],

    themeConfig: {
      lastUpdated: '更新时间',
    // logo
      logo: '/assets/img/logo.jpg',

    // 侧边栏
      sidebar:[
          '',
          'about',
          {
            title: 'css组',   // 必要的
            path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/css/css1',
              '/css/css2',
              '/css/css3',
            ]
          },
      ],
    
    // 导航栏链接
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about' },

        {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'Group1', items:[
                { text: 'Home', link: '/' },
                { text: 'Guide', link: '/' },
              ] },
              { text: 'Group2', items:[
                { text: 'Home', link: '/' },
                { text: 'Guide', link: '/' },
              ] }
            ]
        },

        { text: 'External', link: 'https://google.com' },

      ]
    }
  }