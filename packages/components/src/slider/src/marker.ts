import { buildProps, definePropType } from '@tu-view-plus/utils';

import type { CSSProperties, ExtractPropTypes } from 'vue';

export const markerProps = buildProps({
  /**
   * @zh mark
   * @en 标记
   */
  mark: {
    type: definePropType<
      | string
      | {
          style: CSSProperties;
          label: any;
        }
    >([String, Object]),
    default: undefined
  }
} as const);

export type MarkerProps = ExtractPropTypes<typeof markerProps>;
