import { buildProps, definePropType } from '@tu-view-plus/utils';

import type { Measurable } from './constants';
import type Trigger from './trigger.vue';

export const popperTriggerProps = buildProps({
  id: String,

  open: Boolean,

  virtualTriggering: Boolean,

  virtualRef: {
    type: definePropType<Measurable>(Object)
  },

  onMouseenter: {
    type: definePropType<(e: Event) => void>(Function)
  },

  onMouseleave: {
    type: definePropType<(e: Event) => void>(Function)
  },

  onClick: {
    type: definePropType<(e: Event) => void>(Function)
  },

  onKeydown: {
    type: definePropType<(e: Event) => void>(Function)
  },

  onFocus: {
    type: definePropType<(e: Event) => void>(Function)
  },

  onBlur: {
    type: definePropType<(e: Event) => void>(Function)
  },

  onContextmenu: {
    type: definePropType<(e: Event) => void>(Function)
  }
} as const);

export type PopperTriggerProps = typeof popperTriggerProps;

export type PopperTriggerInstance = InstanceType<typeof Trigger>;
