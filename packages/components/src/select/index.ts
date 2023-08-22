import { withInstall, withNoopInstall } from '@tu-view-plus/utils';
import Select from './src/select.vue';
import SelectOption from './src/select-option.vue';

export const TuSelect = withInstall(Select, { SelectOption });

export const TuSelectOption = withNoopInstall(SelectOption);

export default TuSelect;

export * from './src/select';
