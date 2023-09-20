import { withInstall } from '@tu-view-plus/utils';
import Tabs from './src/tabs.vue';
import tabPane from './src/tab-pane.vue';

export const TuTabs = withInstall(Tabs);
export const TuTabPane = withInstall(tabPane);
export default TuTabs;

export * from './src/tabs';
