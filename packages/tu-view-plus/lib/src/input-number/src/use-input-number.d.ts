import { InputNumberProps, InputNumberEmits } from './input-number';
import type { SetupContext, ShallowRef } from 'vue';
export default function useInputNumber(props: InputNumberProps, emit: SetupContext<InputNumberEmits>['emit'], input: ShallowRef): {
    inputNumberSize: import("vue").ComputedRef<"" | "small" | "mini" | "medium" | "large">;
    inputNumberDisabled: import("vue").ComputedRef<boolean>;
    minDisabled: import("vue").ComputedRef<boolean>;
    maxDisabled: import("vue").ComputedRef<boolean>;
    displayValue: import("vue").ComputedRef<string | number>;
    handleIncrease: () => void;
    handleDecrease: () => void;
    handleFocus: (event: MouseEvent | FocusEvent) => void;
    handleBlur: (event: MouseEvent | FocusEvent) => void;
    handleInput: (value: string) => void;
    handleChange: (value: string) => void;
    focus: () => void;
    blur: () => void;
};
