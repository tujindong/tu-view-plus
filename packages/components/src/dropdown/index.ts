import { withInstall } from '@tu-view-plus/utils';
import Dropdown from './src/dropdown.vue';
import DropdownGroup from './src/dropdown-group.vue';
import DropdownItem from './src/dropdown-item.vue';
import DropdownButton from './src/dropdown-button.vue';
import DropdownSubmenu from './src/dropdown-submenu.vue';

export const TuDropdown = withInstall(Dropdown);
export const TuDropdownGroup = withInstall(DropdownGroup);
export const TuDropdownItem = withInstall(DropdownItem);
export const TuDropdownButton = withInstall(DropdownButton);
export const TuDropdownSubmenu = withInstall(DropdownSubmenu);
export default TuDropdown;

export * from './src/dropdown';
