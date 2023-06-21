import { onMounted, onUpdated, ref } from 'vue';
import { SlotChildren, getFirstElementFromChildren } from '@tu-view-plus/utils';

export const useFirstElement = () => {
  const children: SlotChildren = {};
  const firstElement = ref<HTMLElement>();

  const getFirstElement = () => {
    const element = getFirstElementFromChildren(children.value);
    if (element !== firstElement.value) {
      firstElement.value = element;
    }
  };

  onMounted(() => getFirstElement());

  onUpdated(() => getFirstElement());

  return {
    children,
    firstElement
  };
};
