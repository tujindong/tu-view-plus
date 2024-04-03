import { buildProps as o } from "@tu-view-plus/utils";
const p = o({
  /**
   * @zh 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动
   * @en Indicates that there is a Sider in the sub-element, which generally does not need to be specified. Used to avoid style flicker when rendering on the server side.
   */
  hasSider: {
    type: Boolean
  }
});
export {
  p as layoutProps
};
