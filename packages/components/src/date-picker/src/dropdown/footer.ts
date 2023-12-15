import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Footer from './footer.vue';

export const footerProps = buildProps({} as const);

export type FooterProps = ExtractPropTypes<typeof footerProps>;
export type FooterInstance = InstanceType<typeof Footer>;
