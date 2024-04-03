import { buildProps as e, definePropType as t } from "@tu-view-plus/utils";
import { useSizeProp as r } from "@tu-view-plus/hooks";
import { effectTypes as o } from "./constants.mjs";
const d = e({
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
    default: {}
  },
  /**
   * @zh  卡片尺寸
   * @en  caord size
   * @values 'mini','small','large'
   * @defaultValue 'medium'
   */
  size: { ...r, default: "medium" },
  /**
   * @zh  主题
   * @en  theme of Card
   * @values 'inset' 'bordered', 'outlined', 'flat'
   * @defaultValue 'outset'
   */
  effect: {
    type: String,
    values: o,
    default: "outset"
  }
});
export {
  d as cardProps
};
