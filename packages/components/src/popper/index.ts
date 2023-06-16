import { withInstall } from '@tu-view-plus/utils';
import Popper from './src/popper.vue';

import TuPopperArrow from './src/arrow.vue';
import TuPopperTrigger from './src/trigger.vue';
import TuPopperContent from './src/content.vue';

export { TuPopperArrow, TuPopperTrigger, TuPopperContent };

export const ElPopper = withInstall(Popper);
export default ElPopper;

export * from './src/popper';
export * from './src/trigger';
export * from './src/content';
export * from './src/arrow';
export * from './src/constants';

export type { Placement, Options } from '@popperjs/core';
