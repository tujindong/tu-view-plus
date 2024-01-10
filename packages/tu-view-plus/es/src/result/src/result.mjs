import { buildProps as r } from "@tu-view-plus/utils";
import { resultStatusTypes as i } from "./constans.mjs";
const e = r({
  /**
   * @zh 结果页显示的状态
   * @en The status displayed on the result page
   * @values 'info','success','warning','error','403','404','500', null
   */
  status: {
    type: String,
    default: "info",
    validator: (t) => i.includes(t)
  },
  /**
   * @zh 标题内容
   * @en Title
   */
  title: String,
  /**
   * @zh 子标题内容
   * @en Subtitle
   */
  subtitle: String
});
export {
  e as resultProps
};
