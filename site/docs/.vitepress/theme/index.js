import DefaultTheme from 'vitepress/theme';
import TuviewPlus from 'tu-view-plus';
import { components } from './components';
import './style/index.scss';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(TuviewPlus);

    components.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  }
};
