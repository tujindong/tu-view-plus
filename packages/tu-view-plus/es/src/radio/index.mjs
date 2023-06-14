import { withInstall as r, withNoopInstall as i } from "@tu-view-plus/utils";
import t from "./src/radio.vue.mjs";
import o from "./src/radio-group.vue.mjs";
import { radioEmits as n, radioProps as l } from "./src/radio.mjs";
import { radioGroupEmits as e, radioGroupProps as G } from "./src/radio-group.mjs";
const s = r(t, { RadioGroup: o }), d = i(o);
export {
  s as TuRadio,
  d as TuRadioGroup,
  s as default,
  n as radioEmits,
  e as radioGroupEmits,
  G as radioGroupProps,
  l as radioProps
};
