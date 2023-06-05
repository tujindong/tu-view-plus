import { nav } from './nav';
import { sidebar } from './sidebar';
// import markdown from './markdown';

export default {
  title: 'Tu View Plus',
  base: process.env.NODE_ENV === 'production' ? '/tu-view-plus/' : '/',
  markdown: {
    config(md) {
      md.use(require('markdown-it-vitepress-demo'));
    }
  },
  // markdown,
  themeConfig: {
    logo: '../../assets/logo.svg',
    sidebar,
    nav,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tujindong/tu-view-plus' }
    ],
    docFooter: { prev: '上一篇', next: '下一篇' },
    algolia: {
      appId: 'B0M353LQYI',
      apiKey: 'c108d6c0c7916be744d2533d96767773',
      indexName: 'tu-view-plus'
    }
  }
};
