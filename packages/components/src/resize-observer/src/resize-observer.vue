<script lang="tsx">
import { defineComponent, onBeforeUnmount, watch } from 'vue';
import ResizeObserver from 'resize-observer-polyfill';
import { useFirstElement } from '@tu-view-plus/hooks';

export default defineComponent({
  name: 'TuResizeObserver',

  props: {
    watchOnUpdated: Boolean
  },

  emits: [
    /**
     * @zh resize 事件
     * @property {ResizeObserverEntry} entry 触发 resize 的 dom 元素
     */
    'resize'
  ],

  setup(_, { emit, slots }) {
    const { children, firstElement } = useFirstElement();

    let resizeObserver: null | ResizeObserver;

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

    watch(firstElement, (element) => {
      if (resizeObserver) destroyResizeObserver();
      if (element) {
        createResizeObserver(element);
      }
    });

    onBeforeUnmount(() => {
      if (resizeObserver) destroyResizeObserver();
    });

    return () => {
      children.value = slots.default?.();
      return children.value;
    };
  }
});
</script>
