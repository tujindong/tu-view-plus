import { withInstall } from '@tu-view-plus/utils';
import Menu from './src/menu.vue';
import MenuItem from './src/menu-item.vue';
import MenuItemGroup from './src/menu-item-group.vue';
import SubMenu from './src/sub-menu.vue';

export const TuMenu = withInstall(Menu);
export const TuMenuItem = withInstall(MenuItem);
export const TuMenuItemGroup = withInstall(MenuItemGroup);
export const TuSubMenu = withInstall(SubMenu);
export default TuMenu;

export * from './src/menu';
