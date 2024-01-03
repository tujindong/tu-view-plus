import { Dayjs } from 'dayjs';
import { computed, toRefs, watch } from 'vue';
import { isUndefined, getDayjsValue } from '@tu-view-plus/utils';
import { CalendarValue } from '../interface';
import { useState } from '@tu-view-plus/hooks';

interface PickerStateProps {
  modelValue: CalendarValue | undefined;
  defaultValue: CalendarValue | undefined;
  format: string;
}

export function usePickerState(props: PickerStateProps) {
  const { modelValue, defaultValue, format } = toRefs(props);

  const computedModelValue = computed(() => {
    return getDayjsValue(modelValue.value, format.value);
  });

  const computedDefaultValue = computed(() => {
    return getDayjsValue(defaultValue.value, format.value);
  });

  // Selected value maintained internally: dayjs
  const [localValue, setLocalValue] = useState<Dayjs | undefined>(
    !isUndefined(computedModelValue.value)
      ? computedModelValue.value
      : !isUndefined(computedDefaultValue.value)
      ? computedDefaultValue.value
      : undefined
  );

  watch(computedModelValue, () => {
    if (isUndefined(computedModelValue.value)) {
      setLocalValue(undefined);
    }
  });

  // 混合的最终值：如果外部有传的话，就用外部的值，不然就使用内部维护的值
  const mergeValue = computed(
    () => computedModelValue.value || localValue.value
  );

  return {
    value: mergeValue,
    setValue: setLocalValue
  };
}
