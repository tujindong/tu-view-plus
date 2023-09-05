import { withInstall, withInstallFunction } from '@tu-view-plus/utils';
import Drawer from './src/drawer.vue';
import DrawerMethods from './src/methods';

export const TuDrawer = withInstall(Drawer);
export const TuDrawerBox = withInstallFunction(DrawerMethods, '$drawer');
export default TuDrawer;

export * from './src/drawer';
