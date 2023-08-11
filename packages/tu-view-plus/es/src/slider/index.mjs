import { withInstall as r } from "@tu-view-plus/utils";
import o from "./src/slider.vue.mjs";
import { sliderEmits as p, sliderProps as l } from "./src/slider.mjs";
import { sliderButtonEmits as f, sliderButtonProps as n } from "./src/slider-button.mjs";
import { sliderTicksProps as a } from "./src/slider-ticks.mjs";
import { sliderDotsProps as P } from "./src/slider-dots.mjs";
const i = r(o);
export {
  i as TuSlider,
  i as default,
  f as sliderButtonEmits,
  n as sliderButtonProps,
  P as sliderDotsProps,
  p as sliderEmits,
  l as sliderProps,
  a as sliderTicksProps
};
