import { buildProps as e } from "@tu-view-plus/utils";
import { directionTypes as t } from "./constants.mjs";
import { useSizeProp as r } from "@tu-view-plus/hooks";
const l = e({
  /**
   * @zh 是否带有边框
   * @en is there a border
   */
  border: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 每行放置Descriptions Item的个数
   * @en the number of Descriptions Item placed in each row
   */
  column: {
    type: Number,
    default: 3
  },
  /**
   * @zh 排列的方向
   * @en title of descriptions
   */
  direction: {
    type: String,
    values: t,
    default: "horizontal"
  },
  /**
   * @zh 列表的尺寸
   * @en size of list
   */
  size: r,
  /**
   * @zh 标题文本，显示在左上方
   * @en title text, displayed in the upper left corner
   */
  title: {
    type: String,
    default: ""
  },
  /**
   * @zh 操作区文本，显示在右上方
   * @en operation area text, displayed in the upper right corner
   */
  extra: {
    type: String,
    default: ""
  }
});
export {
  l as descriptionsProps
};
