import * as o from "./src/index.mjs";
import { Button as i } from "./src/button/index.mjs";
import { Icon as x } from "./src/icon/index.mjs";
const r = {
  install: (t) => {
    for (let e in o)
      t.use(o[e]);
  }
};
export {
  i as Button,
  x as Icon,
  r as default
};
