import { withInstall as r, withNoopInstall as i } from "@tu-view-plus/utils";
import a from "./src/radio.vue.mjs";
import o from "./src/radio-group.vue.mjs";
import { radioEmits as n, radioProps as e, radioPropsBase as l } from "./src/radio.mjs";
import { radioGroupEmits as G, radioGroupProps as _ } from "./src/radio-group.mjs";
const m = r(a, { RadioGroup: o }), d = i(o);
export {
  m as TuRadio,
  d as TuRadioGroup,
  m as default,
  n as radioEmits,
  G as radioGroupEmits,
  _ as radioGroupProps,
  e as radioProps,
  l as radioPropsBase
};
