import { buildProps, iconPropType } from '@tu-view-plus/utils';
import { Loading } from '@tu-view-plus/icons-vue';

import type { ExtractPropTypes } from 'vue';
import type Button from './button.vue';

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
  ''
] as const;

export const buttonNativeTypes = ['button', 'submit', 'reset'] as const;

export const buttonProps = buildProps({
  disabled: Boolean,

  type: {
    type: String,
    values: buttonTypes,
    default: 'default'
  },

  icon: {
    type: iconPropType
  },

  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: 'button'
  },

  loading: Boolean,

  loadingIcon: {
    type: iconPropType,
    default: () => Loading
  },

  text: Boolean,

  autofocus: Boolean,

  round: Boolean,

  circle: Boolean,

  color: String
});

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;
export type ButtonInstance = InstanceType<typeof Button>;
