import { nav } from './nav';
import { sidebar } from './sidebar';
import markdown from './markdown';

export default {
  title: 'Tu View Plus',
  base: process.env.NODE_ENV === 'production' ? '/tu-view-plus/' : '/',
  markdown,
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
      apiKey: '5d6ba246c3a74ef026a2c3e10e5eb49c',
      indexName: 'tu-view-plus'
    }
  }
};
