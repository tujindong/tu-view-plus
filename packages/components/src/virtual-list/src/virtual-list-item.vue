<script lang="tsx">
import {
  cloneVNode,
  ComponentPublicInstance,
  defineComponent,
  getCurrentInstance,
  onBeforeUnmount,
  onMounted,
  ref
} from 'vue';
import { getFirstComponent } from '@tu-view-plus/utils';
import { virtualListItemProps } from './virtual-list-item';

export default defineComponent({
  name: 'TuVirtualListItem',

  props: virtualListItemProps,

  setup(props, { slots }) {
    const key = getCurrentInstance()?.vnode.key as string | number;

    const itemRef = ref<HTMLElement | ComponentPublicInstance>();

    const setItemSize = () => {
      // @ts-ignore
      const ele = (itemRef.value?.$el ?? itemRef.value) as HTMLElement;
      const height = ele?.getBoundingClientRect?.().height ?? ele?.offsetHeight;
      if (height) {
        props.setItemSize(key, height);
      }
    };

    onMounted(() => setItemSize());

    onBeforeUnmount(() => setItemSize());

    return () => {
      const child = getFirstComponent(slots.default?.());
      return child ? cloneVNode(child, { ref: itemRef }, true) : null;
    };
  }
});
</script>