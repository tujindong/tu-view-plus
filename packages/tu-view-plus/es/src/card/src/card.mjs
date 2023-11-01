import { buildProps as e, definePropType as t, mutable as r } from "@tu-view-plus/utils";
import { useSizeProp as i } from "@tu-view-plus/hooks";
import { effectTypes as o } from "./constants.mjs";
const m = e({
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
    type: t([Object, Array, String]),
    default: () => r({})
  },
  /**
   * @zh  卡片尺寸
   * @en  caord size
   * @values 'mini','small','large'
   * @defaultValue 'medium'
   */
  size: { ...i, default: "medium" },
  /**
   * @zh  主题
   * @en  theme of Card
   * @values 'line' 'down', 'up'
   * @defaultValue 'line'
   */
  effect: {
    type: String,
    values: o,
    default: "line"
  }
});
export {
  m as cardProps
};
