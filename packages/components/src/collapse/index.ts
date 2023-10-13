import { withInstall } from '@tu-view-plus/utils';
import Collapse from './src/collapse.vue';
import CollapseItem from './src/collapse-item.vue';

export const TuCollapse = withInstall(Collapse);
export const TuCollapseItem = withInstall(CollapseItem);
export default TuCollapse;

export * from './src/collapse';
