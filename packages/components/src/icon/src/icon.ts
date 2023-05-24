import { buildProps, definePropType } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Icon from './icon.vue';

export const iconProps = buildProps({
  size: {
    type: definePropType<number | string>([Number, String])
  },
  color: {
    type: String
  }
});

export type IconProps = ExtractPropTypes<typeof iconProps>;
export type IconInstance = InstanceType<typeof Icon>;
