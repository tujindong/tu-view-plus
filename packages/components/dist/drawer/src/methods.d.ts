import DrawerComponent from './drawer.vue';
import type { DrawerMethod } from './interface';
declare const Drawer: DrawerMethod;
export type { DrawerMethod, DrawerConfig, DrawerReturn } from './interface';
export type DrawerInstance = InstanceType<typeof DrawerComponent>;
export default Drawer;
