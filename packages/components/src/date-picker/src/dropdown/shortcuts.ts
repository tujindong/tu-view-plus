import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Shortcuts from './shortcuts.vue';

export const shortcutsProps = buildProps({} as const);

export type ShortcutsProps = ExtractPropTypes<typeof shortcutsProps>;
export type ShortcutsInstance = InstanceType<typeof Shortcuts>;
