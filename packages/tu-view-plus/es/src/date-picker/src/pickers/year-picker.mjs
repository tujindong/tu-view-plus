import { buildProps as e } from "@tu-view-plus/utils";
const r = e({
  /**
   * @zh 绑定值
   * @en Value
   */
  modelValue: {
    type: [Object, String, Number]
  },
  /**
   * @zh 默认值
   * @en Default value
   */
  defaultValue: {
    type: [Object, String, Number]
  },
  /**
   * @zh 展示日期的格式，参考[字符串解析格式](#字符串解析格式)
   * @en Display the format of the date, refer to [String Parsing Format](#String Parsing Format)
   */
  format: {
    type: String,
    default: "YYYY"
  }
});
export {
  r as yearPickerProps
};
