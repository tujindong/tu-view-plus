import DefaultTheme from "vitepress/theme";
import tuviewPlus from "tu-view-plus";
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(tuviewPlus);
  },
};
