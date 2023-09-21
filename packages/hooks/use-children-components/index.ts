import { onMounted, onUpdated, ref } from 'vue';
import { SlotChildren, getComponentsFromChildren } from '@tu-view-plus/utils';

export const useChildrenComponents = (name: string) => {
  const children: SlotChildren = {};
  const components = ref<number[]>([]);

  const getComponents = () => {
    if (children.value) {
      const _components = getComponentsFromChildren(children.value, name);
      if (
        _components.length !== components.value.length ||
        _components.toString() !== components.value.toString()
      ) {
        components.value = _components;
      }
    }
  };

  onMounted(() => getComponents());

  onUpdated(() => getComponents());

  return {
    children,
    components
  };
};
