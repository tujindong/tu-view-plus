import { SwitchProps, SwitchEmits } from './switch';
import type { SetupContext, ShallowRef } from 'vue';
export default function useSwitch(props: SwitchProps, emit: SetupContext<SwitchEmits>['emit'], input: ShallowRef<HTMLInputElement | undefined>): {
    inputId: import("vue").Ref<string | undefined>;
    switchSize: import("vue").ComputedRef<"" | "small" | "mini" | "medium" | "large">;
    switchDisabled: import("vue").ComputedRef<boolean>;
    checked: import("vue").ComputedRef<boolean>;
    focus: () => void;
    handleValueSwitch: () => void;
    handleChange: () => void;
};
