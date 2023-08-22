import type { Ref } from 'vue';
import { computed, ref, watch } from 'vue';
import type { EmitFn2 } from '@tu-view-plus/utils';

export const useTrigger = ({
  popupVisible,
  defaultPopupVisible,
  emit
}: {
  popupVisible?: Ref<boolean | undefined>;
  defaultPopupVisible?: Ref<boolean>;
  emit: EmitFn2<{
    'update:popupVisible': (visible: boolean) => true;
    popupVisibleChange: (visible: boolean) => true;
  }>;
}) => {
  const visiable = ref(defaultPopupVisible?.value ?? false);
  const computedPopupVisible = computed(
    () => popupVisible?.value ?? visiable.value
  );

  const handlePopupVisibleChange = (visible: boolean) => {
    if (visible !== computedPopupVisible.value) {
      visiable.value = visible;
      emit('update:popupVisible', visible);
      emit('popupVisibleChange', visible);
    }
  };

  watch(computedPopupVisible, (visible) => {
    if (visiable.value !== visible) {
      visiable.value = visible;
    }
  });

  return {
    computedPopupVisible,
    handlePopupVisibleChange
  };
};
