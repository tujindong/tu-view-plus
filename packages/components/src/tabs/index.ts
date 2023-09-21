import { withInstall } from '@tu-view-plus/utils';
import Tabs from './src/tabs.vue';
import TabPane from './src/tab-pane.vue';

export const TuTabs = withInstall(Tabs);
export const TuTabPane = withInstall(TabPane);
export default TuTabs;

export * from './src/tabs';
