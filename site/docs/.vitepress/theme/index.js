import DefaultTheme from 'vitepress/theme';
import TuviewPlus from 'tu-view-plus';
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(TuviewPlus);
  }
};
