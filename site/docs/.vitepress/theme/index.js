import DefaultTheme from 'vitepress/theme';
import TuviewPlus from 'tu-view-plus';
import './style/index.scss';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(TuviewPlus);
  }
};
