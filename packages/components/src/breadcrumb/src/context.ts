import { InjectionKey } from 'vue';

import type { BreadcrumbContext } from './interface';

export const breadcrumbInjectKey: InjectionKey<BreadcrumbContext> =
  Symbol('TuBreadcrumb');
