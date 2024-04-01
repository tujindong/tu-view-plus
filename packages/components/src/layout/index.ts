import { withInstall } from '@tu-view-plus/utils';
import Layout from './src/layout.vue';
import LayoutHeader from './src/layout-header.vue';
import LayoutContent from './src/layout-content.vue';
import LayoutFooter from './src/layout-footer.vue';
import LayoutSider from './src/layout-sider.vue';

export const TuLayout = withInstall(Layout);
export const TuLayoutHeader = withInstall(LayoutHeader);
export const TuLayoutContent = withInstall(LayoutContent);
export const TuLayoutFooter = withInstall(LayoutFooter);
export const TuLayoutSider = withInstall(LayoutSider);
export default TuLayout;

export * from './src/layout';
