import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const layoutProps = buildProps({
  /**
   * @zh 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动
   * @en Indicates that there is a Sider in the sub-element, which generally does not need to be specified. Used to avoid style flicker when rendering on the server side.
   */
  hasSider: {
    type: Boolean
  }
} as const);

export type LayoutProps = ExtractPropTypes<typeof layoutProps>;