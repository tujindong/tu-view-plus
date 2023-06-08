import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Form from './form.vue';

export const formProps = buildProps({});

export const formEmits = {};

export type FormProps = ExtractPropTypes<typeof formProps>;
export type FormInstance = InstanceType<typeof Form>;
export type FormEmits = typeof formEmits;
