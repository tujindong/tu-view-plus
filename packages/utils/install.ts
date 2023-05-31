import { NOOP } from '@vue/shared';
import type { App, Plugin } from 'vue';
export type SFCWithInstall<T> = T & Plugin;
export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name || (comp as any).__name;
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};

export const withNoopInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = NOOP;
  return component as SFCWithInstall<T>;
};
