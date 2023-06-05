import DefaultTheme from 'vitepress/theme';
import TuviewPlus from 'tu-view-plus';
import CustomDemoContainer from '../plugins/CustomDemoContainer.vue';
import './style/index.scss';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.component('demo-container', CustomDemoContainer);
    app.use(TuviewPlus);
  }
};
