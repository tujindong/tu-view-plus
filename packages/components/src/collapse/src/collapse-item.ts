import { buildProps, definePropType, generateId } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type CollapseItem from './collapse-item.vue';
import type { CollapseActiveName } from './collapse';

export const collapseItemProps = buildProps({
  /**
   * @zh 面板标题
   * @en title of the panel
   */
  title: {
    type: String,
    default: ''
  },

  /**
   * @zh 面板额外内容
   * @en extra of the panel
   */
  extra: {
    type: String,
    default: ''
  },

  /**
   * @zh 唯一标志符
   * @en unique identification of the panel
   */
  name: {
    type: definePropType<CollapseActiveName>([String, Number]),
    default: () => generateId()
  },

  /**
   * @zh 是否禁用
   * @en disable the collapse item
   */
  disabled: Boolean
} as const);

export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>;
export type CollapseItemInstance = InstanceType<typeof CollapseItem>;
