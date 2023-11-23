import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const selectOptionProps = buildProps({
  value: {
    required: true,
    type: [String, Number, Boolean, Object]
  },

  label: { type: [String, Number] },

  created: Boolean,

  disabled: {
    type: Boolean,
    default: false
  }
} as const);

export type SelectOptionProps = ExtractPropTypes<typeof selectOptionProps>;
