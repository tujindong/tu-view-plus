import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes, PropType } from 'vue';

export const sliderInputProps = buildProps({
  modelValue: {
    type: Array as unknown as PropType<[number, number]>,
    required: true
  },

  size: {
    ...useSizeProp
  },

  min: {
    type: Number
  },

  max: {
    type: Number
  },

  step: {
    type: Number
  },

  disabled: {
    type: Boolean
  },

  range: {
    type: Boolean
  }
} as const);

export const sliderInputEmits = {
  startChange: (value?: number) => true,
  endChange: (value?: number) => true
};

export type SliderInputProps = ExtractPropTypes<typeof sliderInputProps>;
export type SliderInputEmits = typeof sliderInputEmits;
