import { withInstall, withNoopInstall } from '@tu-view-plus/utils';
import Select from './src/select.vue';
import Option from './src/option.vue';

export const TuSelect = withInstall(Select, { Option });
export const TuOption = withNoopInstall(Option);

export default TuSelect;

export * from './src/select';
