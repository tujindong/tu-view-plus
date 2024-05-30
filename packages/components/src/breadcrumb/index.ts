import { withInstall } from '@tu-view-plus/utils';
import Breadcrumb from './src/breadcrumb.vue';
import BreadcrumbItem from './src/breadcrumb-item.vue';

export const TuBreadcrumb = withInstall(Breadcrumb);
export const TuBreadcrumbItem = withInstall(BreadcrumbItem);
export default TuBreadcrumb;

export * from './src/breadcrumb';
