import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const virtualListItemProps = buildProps({
  hasItemSize: {
    type: Function,
    required: true
  },

  setItemSize: {
    type: Function,
    required: true
  }
} as const);

export type VirtualListItemProps = ExtractPropTypes<
  typeof virtualListItemProps
>;
