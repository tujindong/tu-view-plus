import { buildProps as e } from "@tu-view-plus/utils";
import { useSizeProp as t } from "@tu-view-plus/hooks";
import { effectTypes as r } from "./constants.mjs";
const f = e({
  /**
   * @zh 卡片标题
   * @en  title of the card. Also accepts a DOM passed by `slot#title`
   * @defaultValue ''
   */
  title: {
    type: String
  },
  /**
   * @zh card body样式
   * @en card body style
   */
  bodyStyle: {
    type: Object
  },
  /**
   * @zh  卡片尺寸
   * @en  caord size
   * @values 'mini','small','large'
   * @defaultValue 'medium'
   */
  size: { ...t, default: "medium" },
  /**
   * @zh  主题
   * @en  theme of Card
   * @values 'line' 'down', 'up'
   * @defaultValue 'line'
   */
  effect: {
    type: String,
    values: r,
    default: "line"
  }
});
export {
  f as cardProps
};
