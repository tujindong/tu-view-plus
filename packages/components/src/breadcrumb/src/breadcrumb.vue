<script lang="tsx">
import {
  ref,
  computed,
  defineComponent,
  toRefs,
  provide,
  reactive,
  mergeProps
} from 'vue';
import { breadcrumbProps } from './breadcrumb';
import { useNamespace } from '@tu-view-plus/hooks';
import { getAllElements } from '@tu-view-plus/utils';
import { breadcrumbInjectKey } from './context';
import TuBreadcrumbItem from './breadcrumb-item.vue';
import '../style/breadcrumb.scss';

import type { BreadcrumbRoute } from './interface';

export default defineComponent({
  name: 'TuBreadcrumb',

  props: breadcrumbProps,

  setup(props, { slots }) {
    const { maxCount, separator, routes } = toRefs(props);
    const nsBreadcrumb = useNamespace('breadcrumb');

    const total = ref(0);

    const needHide = computed(
      () => maxCount.value > 0 && total.value > maxCount.value + 1
    );

    provide(
      breadcrumbInjectKey,
      reactive({
        total,
        maxCount,
        separator,
        needHide,
        slots
      })
    );

    const defaultItemRender = (
      route: BreadcrumbRoute,
      routes: BreadcrumbRoute[],
      paths: string[]
    ) => {
      if (routes.indexOf(route) === routes.length - 1) {
        return <span>{route.label}</span>;
      }
      const href =
        props.customUrl?.(paths) ?? `#/${paths.join('/').replace(/^\//, '')}`;

      return <a href={href}>{route.label}</a>;
    };

    const renderByRoutes = () => {
      if (!routes.value?.length) return null;

      if (total.value !== routes.value.length) {
        total.value = routes.value.length;
      }

      const paths: Array<string> = [];

      return routes.value.map((route, idx, origin) => {
        paths.push((route.path || '').replace(/^\//, ''));
        const currentPaths = [...paths];
        return (
          <TuBreadcrumbItem
            key={route.path || route.label}
            index={idx}
            droplist={route.children}
          >
            {slots['item-render']?.({
              route,
              routes: origin,
              paths: currentPaths
            }) ?? defaultItemRender(route, origin, currentPaths)}
          </TuBreadcrumbItem>
        );
      });
    };

    const renderByChildren = () => {
      const children = getAllElements(slots.default?.() ?? []);

      if (total.value !== children.length) {
        total.value = children.length;
      }

      return children.map((child, index) => {
        child.props = mergeProps(child.props ?? {}, { index });
        return child;
      });
    };

    return () => {
      return (
        <div role="list" class={nsBreadcrumb.b()}>
          {slots.default ? renderByChildren() : renderByRoutes()}
        </div>
      );
    };
  }
});
</script>
