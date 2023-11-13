import { buildProps } from '@tu-view-plus/utils';

export const descriptionsRowProps = buildProps({
  row: {
    type: Array,
    default: () => []
  }
} as const);
