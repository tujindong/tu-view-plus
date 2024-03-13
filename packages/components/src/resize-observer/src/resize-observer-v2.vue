<script lang="tsx">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  ComponentPublicInstance,
  computed,
  cloneVNode,
  watch
} from 'vue';
import ResizeObserver from 'resize-observer-polyfill';
import { isComponentInstance, getFirstComponent } from '@tu-view-plus/utils';

export default defineComponent({
  name: 'TuResizeObserverV2',

  emits: [
    /**
     * @zh resize 事件
     * @property {ResizeObserverEntry} entry 触发 resize 的 dom 元素
     */
    'resize'
  ],

  setup(_, { emit, slots }) {
    let resizeObserver: ResizeObserver | null;

    const componentRef = ref<HTMLElement | ComponentPublicInstance>();

    const element = computed<HTMLElement>(() =>
      isComponentInstance(componentRef.value)
        ? componentRef.value.$el
        : componentRef.value
    );

    const createResizeObserver = (target: HTMLElement) => {
      if (!target) return;
      resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
        const entry = entries[0];
        emit('resize', entry);
      });
      resizeObserver.observe(target);
    };

    const destroyResizeObserver = () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };

    watch(element, (_element) => {
      if (resizeObserver) destroyResizeObserver();
      if (_element) createResizeObserver(_element);
    });

    onMounted(() => {
      if (element.value) {
        createResizeObserver(element.value);
      }
    });

    onUnmounted(() => {
      destroyResizeObserver();
    });

    return () => {
      const firstChild = getFirstComponent(slots.default?.() ?? []);

      if (firstChild) {
        return cloneVNode(
          firstChild,
          {
            ref: componentRef
          },
          true
        );
      }

      return null;
    };
  }
});
</script>
