import { InputNumberProps, InputNumberEmits } from './input-number';
import type { SetupContext } from 'vue';
export default function useInputNumber(props: InputNumberProps, emit: SetupContext<InputNumberEmits>['emit']): {
    displayValue: import("vue").ComputedRef<string>;
    handleIncrease: () => void;
    handleDecrease: () => void;
    handleFocus: () => void;
    handleBlur: () => void;
    handleInput: () => void;
    handleChange: () => void;
};
