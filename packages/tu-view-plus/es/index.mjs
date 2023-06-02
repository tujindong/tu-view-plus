import * as o from "./src/index.mjs";
import { TuButton as f, TuButtonGroup as p } from "./src/button/index.mjs";
import { TuIcon as m } from "./src/icon/index.mjs";
import { TuRow as l } from "./src/row/index.mjs";
import { TuCol as T } from "./src/col/index.mjs";
const e = {
  install: (t) => {
    for (let r in o)
      t.use(o[r]);
  }
};
export {
  f as TuButton,
  p as TuButtonGroup,
  T as TuCol,
  m as TuIcon,
  l as TuRow,
  e as default
};
