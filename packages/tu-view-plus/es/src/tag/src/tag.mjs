import { buildProps as e } from "@tu-view-plus/utils";
import { useSizeProp as t } from "@tu-view-plus/hooks";
import { tagEffects as s } from "./constants.mjs";
const l = e({
  /**
   * @zh 是否可关闭
   * @en whether Tag can be removed
   */
  closable: Boolean,
  /**
   * @zh 是否禁用渐变动画
   * @en whether to disable animations
   */
  disableTransitions: Boolean,
  /**
   * @zh 是否有边框描边
   * @en whether Tag has a highlighted border
   */
  hit: Boolean,
  /**
   * @zh 标签主色
   * @en main color of the Tag
   */
  color: {
    type: String,
    default: ""
  },
  /**
   * @zh 标签的尺寸
   * @en Tag size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...t, default: "medium" },
  /**
   * @zh 标签主题
   * @en theme of Tag
   */
  effect: {
    type: String,
    values: s,
    default: "up"
  },
  /**
   * @zh
   * @en whether Tag is rounded
   */
  round: Boolean
}), r = {
  close: (o) => o instanceof MouseEvent,
  click: (o) => o instanceof MouseEvent
};
export {
  r as tagEmits,
  l as tagProps
};
