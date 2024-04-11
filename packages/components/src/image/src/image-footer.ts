import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const imageFooterProps = buildProps({
  title: {
    type: String
  },
  description: {
    type: String
  }
});

export type ImageFooterProps = ExtractPropTypes<typeof imageFooterProps>;
