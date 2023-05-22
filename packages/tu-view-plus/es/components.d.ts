import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TuButton: typeof components.Button;
    TuIcon: typeof components.Icon;
  }
}
export {};
