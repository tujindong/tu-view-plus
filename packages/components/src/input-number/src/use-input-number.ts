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

  const handleIncrease = () => {
    console.log('增加');
  };

  const handleDecrease = () => {
    console.log('减少');
  };

  const handleFocus = () => {};

  const handleBlur = () => {};

  const handleInput = () => {};

  const handleChange = () => {};

  return {
    displayValue,
    handleIncrease,
    handleDecrease,
    handleFocus,
    handleBlur,
    handleInput,
    handleChange
  };
}
