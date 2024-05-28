import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "3Wind-帮助文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/markdown-examples' },
      { text: '官网', link: 'https://ces.i9mr.com' },
      { text: '社区', link: 'https://i9mr.com' }
    ],

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '查看帮助文档', link: '/markdown-examples' },
          { text: '加入服务器', link: '/api-examples' }
        ]
      },
      {
        text: '介绍',
        items: [
          { text: '查看帮助文档', link: '/markdown-examples' },
          { text: '加入服务器', link: '/api-examples' }
        ]
      },
      {
        text: '介绍',
        items: [
          { text: '查看帮助文档', link: '/markdown-examples' },
          { text: '加入服务器', link: '/api-examples' }
        ]
      },
      {
        text: '介绍',
        items: [
          { text: '查看帮助文档', link: '/markdown-examples' },
          { text: '加入服务器', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HYDeath/3Wind-doc' }
    ]
  }
})
