import { buildProps } from '@tu-view-plus/utils';
import { CHANGE_EVENT } from '@tu-view-plus/constants';
import { isBoolean, isNumber } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';

export const affixProps = buildProps({
  /**
   * @en affix element zIndex value
   * */
  zIndex: {
    type: [Number, String],
    default: 100
  },

  /**
   * @en target container. (CSS selector)
   */
  target: {
    type: String,
    default: ''
  },

  /**
   * @en offset distance
   * */
  offset: {
    type: Number,
    default: 0
  },

  /**
   * @en position of affix
   * */
  position: {
    type: String,
    values: ['top', 'bottom'],
    default: 'top'
  }
} as const);

export const affixEmits = {
  scroll: ({ scrollTop, fixed }: { scrollTop: number; fixed: boolean }) =>
    isNumber(scrollTop) && isBoolean(fixed),
  [CHANGE_EVENT]: (fixed: boolean) => isBoolean(fixed)
};

export type AffixProps = ExtractPropTypes<typeof affixProps>;
export type AffixEmits = typeof affixEmits;
