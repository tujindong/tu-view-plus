import { withInstall, withNoopInstall } from '@tu-view-plus/utils';
import Checkbox from './src/checkbox.vue';
import CheckboxGroup from './src/checkbox-group.vue';

export const TuCheckbox = withInstall(Checkbox, { CheckboxGroup });
export const TuCheckboxGroup = withNoopInstall(CheckboxGroup);

export * from './src/checkbox';
export * from './src/checkbox-group';
export * from './src/constants';
