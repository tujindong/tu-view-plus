import { withInstall as o } from "@tu-view-plus/utils";
import r from "./src/config-provider.mjs";
import { messageConfig as l } from "./src/config-provider.mjs";
import { configProviderProps as p } from "./src/config-provider-props.mjs";
import { provideGlobalConfig as g, useGlobalComponentSettings as a, useGlobalConfig as C } from "./src/hooks/use-global-config.mjs";
const t = o(r);
export {
  t as TuConfigProvider,
  p as configProviderProps,
  t as default,
  l as messageConfig,
  g as provideGlobalConfig,
  a as useGlobalComponentSettings,
  C as useGlobalConfig
};
