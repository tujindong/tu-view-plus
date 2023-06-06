import DefaultTheme from 'vitepress/theme';
import TuviewPlus from 'tu-view-plus';
import CustomDemoContainer from './components/CustomDemoContainer.vue';
import './style/index.scss';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(TuviewPlus);
    app.component('demo-container', CustomDemoContainer);
  }
};
