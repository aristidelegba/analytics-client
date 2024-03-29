import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require ('../../package.json')

export default defineConfig({
  lang: 'en-US',
  title: 'Analytics Client',
  description: 'Javascript client that support both GAPI and Matomo',

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://vitepress.dev',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'VitePress' }],
    ['meta', { name: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
    ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {
    nav: nav(),
    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() }
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aristidelegba/analytics-client' }
    ],

    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2023 Evan You'
    // },

    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '8J64VVRP8K',
    //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //     indexName: 'vitepress'
    //   }
    // },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/getting-started',
      activeMatch: '/guide/'
    },
    {
      text: 'Reference',
      link: '/reference/overview',
      activeMatch: '/reference/'
    },
    {
      text: pkg.version,
      items: [
        // {
        //   text: 'Changelog',
        //   link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        // },
        // {
        //   text: 'Contributing',
        //   link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        // }
      ]
    }
  ]
}

/* prettier-ignore */
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: 'getting-started' },
      ]
    },
    { text: 'Config & API Reference', base: '/reference/', link: 'overview' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        {
          text: 'Configurations',
          base: '/reference/',
          items: [
            { text: 'Overview', link: 'overview' },
            { text: 'Matomo', link: 'matomo' },
            { text: 'GA4', link: 'ga4' },
          ]
        }
      ]
    }
  ]
}
