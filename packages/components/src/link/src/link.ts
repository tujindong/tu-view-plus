import { buildProps, iconPropType } from '@tu-view-plus/utils';
import { LinkTypes } from './constants';

import type { ExtractPropTypes, PropType } from 'vue';
import type Link from './link.vue';

export const linkProps = buildProps({
  /**
   * @zh 链接的类型
   * @en Link type
   * @values 'default','primary','warning','success','danger','info'
   */
  type: {
    type: String as PropType<LinkTypes>,
    default: 'default'
  },

  /**
   * @zh 是否下划线
   * @description whether the component has underline
   */
  underline: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 链接是否禁用
   * @en Whether the link is disabled
   */
  disabled: { type: Boolean, default: false },

  /**
   * @zh 链接地址
   * @en Link address
   */
  href: { type: String, default: '' },

  /**
   * @zh 图标
   * @en icon
   */
  icon: {
    type: iconPropType
  }
} as const);

export const linkEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
};

export type LinkProps = ExtractPropTypes<typeof linkProps>;
export type LinkInstance = InstanceType<typeof Link>;
