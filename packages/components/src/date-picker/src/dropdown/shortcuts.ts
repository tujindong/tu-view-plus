import { buildProps } from '@tu-view-plus/utils';
import { ShortcutType } from '../interface';

import type { ExtractPropTypes, PropType } from 'vue';
import type Shortcuts from './shortcuts.vue';

export const shortcutsProps = buildProps({
  shortcuts: {
    type: Array as PropType<ShortcutType[]>,
    default: () => []
  },
  showNowBtn: {
    type: Boolean
  }
} as const);

export const shortcutsEmits = [
  'item-click',
  'item-mouse-enter',
  'item-mouse-leave',
  'now-click'
];

export type ShortcutsProps = ExtractPropTypes<typeof shortcutsProps>;
export type ShortcutsInstance = InstanceType<typeof Shortcuts>;
