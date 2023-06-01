import * as o from "./src/index.mjs";
import { TuButton as f, TuButtonGroup as i } from "./src/button/index.mjs";
import { TuIcon as s } from "./src/icon/index.mjs";
const e = {
  install: (t) => {
    for (let r in o)
      t.use(o[r]);
  }
};
export {
  f as TuButton,
  i as TuButtonGroup,
  s as TuIcon,
  e as default
};
