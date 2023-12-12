import { Ref, toRefs, computed, watch, ComputedRef } from 'vue';
import { isUndefined } from '@tu-view-plus/utils';
import { useState } from '../use-state';

export function useMergeState<T, E = T | undefined>(
  defaultValue: T,
  props: { value: E }
): [ComputedRef<T>, (val: E) => void, Ref<T>] {
  const { value } = toRefs(props);
  const [localValue, setLocalValue] = useState(
    !isUndefined(value.value) ? value.value : defaultValue
  );
  watch(value, (newVal) => {
    isUndefined(newVal) && setLocalValue(undefined);
  });

  const mergeValue = computed(() =>
    !isUndefined(value.value) ? value.value : localValue.value
  );

  return [mergeValue, setLocalValue, localValue];
}
