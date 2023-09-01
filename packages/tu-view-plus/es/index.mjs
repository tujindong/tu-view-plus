import * as o from "./src/index.mjs";
import { TuSpin as T } from "./src/spin/index.mjs";
import { TuButton as f, TuButtonGroup as m } from "./src/button/index.mjs";
import { TuBadge as n } from "./src/badge/index.mjs";
import { TuCheckbox as l, TuCheckboxGroup as s } from "./src/checkbox/index.mjs";
import { TuConfigProvider as c } from "./src/config-provider/index.mjs";
import { TuCollapseTransition as C } from "./src/collapse-transition/index.mjs";
import { TuCol as b } from "./src/col/index.mjs";
import { TuForm as R } from "./src/form/index.mjs";
import { TuInput as v } from "./src/input/index.mjs";
import { TuInputNumber as I } from "./src/input-number/index.mjs";
import { TuIcon as O } from "./src/icon/index.mjs";
import { TuModal as w, TuModalBox as P } from "./src/modal/index.mjs";
import { TuMessage as z } from "./src/message/index.mjs";
import { TuOnlyClient as L } from "./src/only-client/index.mjs";
import { TuPopover as V } from "./src/popover/index.mjs";
import { TuRadio as j, TuRadioGroup as q } from "./src/radio/index.mjs";
import { TuResizeObserver as D } from "./src/resize-observer/index.mjs";
import { TuRow as H } from "./src/row/index.mjs";
import { TuScrollbar as K } from "./src/scrollbar/index.mjs";
import { TuSelect as U, TuSelectOption as W } from "./src/select/index.mjs";
import { TuSlider as Y } from "./src/slider/index.mjs";
import { TuSwitch as _ } from "./src/switch/index.mjs";
import { TuTag as ro } from "./src/tag/index.mjs";
import { TuTextarea as to } from "./src/textarea/index.mjs";
import { TuTooltip as po } from "./src/tooltip/index.mjs";
import { TuTransition as xo } from "./src/transition/index.mjs";
import { TuTrigger as mo } from "./src/trigger/index.mjs";
import { TuVirtualList as no } from "./src/virtual-list/index.mjs";
const t = {
  install: (r) => {
    for (let e in o)
      r.use(o[e]);
  }
};
export {
  n as TuBadge,
  f as TuButton,
  m as TuButtonGroup,
  l as TuCheckbox,
  s as TuCheckboxGroup,
  b as TuCol,
  C as TuCollapseTransition,
  c as TuConfigProvider,
  R as TuForm,
  O as TuIcon,
  v as TuInput,
  I as TuInputNumber,
  z as TuMessage,
  w as TuModal,
  P as TuModalBox,
  L as TuOnlyClient,
  V as TuPopover,
  j as TuRadio,
  q as TuRadioGroup,
  D as TuResizeObserver,
  H as TuRow,
  K as TuScrollbar,
  U as TuSelect,
  W as TuSelectOption,
  Y as TuSlider,
  T as TuSpin,
  _ as TuSwitch,
  ro as TuTag,
  to as TuTextarea,
  po as TuTooltip,
  xo as TuTransition,
  mo as TuTrigger,
  no as TuVirtualList,
  t as default
};
