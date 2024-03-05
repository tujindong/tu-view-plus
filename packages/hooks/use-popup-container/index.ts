import { toRefs, computed, ComputedRef } from 'vue';
import { querySelector } from '@tu-view-plus/utils';
import { isString } from '@tu-view-plus/utils';

interface PopupContainerProps {
  popupContainer: string | HTMLElement | undefined;
}

export const usePopupContainer = (
  defaultPopupContainer: HTMLElement,
  props: PopupContainerProps
) => {
  const { popupContainer } = toRefs(props);

  const container = computed(
    () =>
      (isString(popupContainer.value)
        ? querySelector(popupContainer.value)
        : popupContainer.value) || defaultPopupContainer
  );

  return container as ComputedRef<HTMLElement>;
};
