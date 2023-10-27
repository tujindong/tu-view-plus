import { nav } from './nav';
import { sidebar } from './sidebar';
import markdown from './markdown';

const base = process.env.NODE_ENV === 'production' ? '/tu-view-plus/' : '/';

export default {
  title: 'Tu View Plus',
  base,
  markdown,
  themeConfig: {
    sidebar,
    nav,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tujindong/tu-view-plus' }
    ],
    docFooter: { prev: '上一篇', next: '下一篇' }
  },
  lang: 'zh-CN',
  locales: {
    'zh-CN': {
      label: '中文',
      lang: 'zh-CN',
      dir: '/zh-CN',
      title: 'Tu View Plus',
      description: 'Tu View Plus 文档',
      themeConfig: {
        search: {
          provider: 'local'
        },
        nav
      }
    },
    'en-US': {
      label: 'English',
      lang: 'en-US',
      dir: '/en-US',
      title: 'Tu View Plus',
      description: 'Tu View Plus Docs',
      themeConfig: {
        search: {
          provider: 'local'
        },
        nav
      }
    }
  }
};
