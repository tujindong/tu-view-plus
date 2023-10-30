import { nav } from './nav';
import ZhSidebar from '../../zh-CN/layout/sidebar';
import ZhNav from '../../zh-CN/layout/nav';
import EnSidebar from '../../en-US/layout/sidebar';
import EnNav from '../../en-US/layout/nav';
import markdown from './markdown';

export default {
  title: 'Tu View Plus',
  base: '/tu-view-plus/',
  markdown,
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tujindong/tu-view-plus' }
    ]
  },
  lang: 'en-US',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en-US/',
      themeConfig: {
        nav: EnNav,
        sidebar: EnSidebar
      }
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'Zh_CN',
      link: '/zh-CN/',
      themeConfig: {
        nav: ZhNav,
        sidebar: ZhSidebar
      }
    }
  }
};
