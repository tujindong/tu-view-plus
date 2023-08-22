import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const selectDropDownProps = buildProps({} as const);

export type SelectDropDownProps = ExtractPropTypes<typeof selectDropDownProps>;
