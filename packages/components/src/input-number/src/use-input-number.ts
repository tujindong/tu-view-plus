import { computed } from 'vue';
import { InputNumberProps, InputNumberEmits } from './input-number';

import type { SetupContext } from 'vue';

export default function useInputNumber(
  props: InputNumberProps,
  emit: SetupContext<InputNumberEmits>['emit']
) {
  const displayValue = computed(() => {
    return '';
  });

  return { displayValue };
}
