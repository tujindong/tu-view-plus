import { withInstall } from '@tu-view-plus/utils';
import Form from './src/form.vue';
import FormItem from './src/form-item.vue';

export const TuForm = withInstall(Form);
export default TuForm;

export * from './src/form';
export * from './src/form-item';
export * from './src/types';
export * from './src/constants';
export * from './src/hooks';

export type FormInstance = InstanceType<typeof Form>;
export type FormItemInstance = InstanceType<typeof FormItem>;
