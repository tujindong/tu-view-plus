import * as components from './src/index';
export * from './src/index';
import { App } from 'vue';

export default {
  install: (app: App) => {
    for (let c in components) {
      //@ts-ignore
      app.use(components[c]);
    }
  }
};
