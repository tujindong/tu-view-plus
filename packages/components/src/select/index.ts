import { withInstall, withNoopInstall } from '@tu-view-plus/utils';
import Select from './src/select.vue';
import SelectOption from './src/select-option.vue';
import SelectGroup from './src/select-group.vue';

export const TuSelect = withInstall(Select, { SelectOption, SelectGroup });
export const TuSelectOption = withNoopInstall(SelectOption);
export const TuSelectGroup = withNoopInstall(SelectGroup);

export default TuSelect;

export * from './src/select';
