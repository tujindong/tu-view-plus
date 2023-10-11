import { buildProps as e } from "@tu-view-plus/utils";
const i = e({
  /**
   * @zh 图像地址
   * @en image URL of empty
   */
  image: {
    type: String,
    default: ""
  },
  /**
   * @zh 组件的图像尺寸（宽度）
   * @en image size (width) of empty
   */
  imageSize: Number,
  /**
   * @zh 组件的描述信息
   * @en description of empty
   */
  description: {
    type: String,
    default: ""
  }
});
export {
  i as emptyProps
};
