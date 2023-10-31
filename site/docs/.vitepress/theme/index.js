import DefaultTheme from 'vitepress/theme';
import TuviewPlus from 'tu-view-plus';
import { components } from './components';
import { defaultLang } from '../composables/constant';
import './style/index.scss';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.mixin({
      async created() {
        const path = window.location.pathname;
        const base = '/tu-view-plus/';
        if (
          !['zh-CN', 'en-US'].some((lang) => path.startsWith(base + lang + '/'))
        ) {
          const lang = defaultLang || '';
          window.location.href =
            base +
            (/en-US/.test(lang) ? 'en-US' : 'zh-CN') +
            path.slice(base.length - 1);
        }
      }
    });

    app.use(TuviewPlus);

    components.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  }
};
