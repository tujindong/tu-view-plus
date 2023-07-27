import { SetupContext } from '@vue/runtime-core';
import type { CheckboxProps, CheckboxEmits } from './checkbox';
export declare const useCheckbox: (props: CheckboxProps, emit: SetupContext<CheckboxEmits>['emit']) => {
    checkboxGroup: import("./constants").CheckboxGroupContext | undefined;
    inputId: import("vue").Ref<string | undefined>;
    model: import("vue").WritableComputedRef<any>;
    checkboxDisabled: import("vue").ComputedRef<boolean>;
    checkboxSize: import("vue").ComputedRef<"" | "small" | "mini" | "medium" | "large">;
    checkboxType: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>>;
    isChecked: import("vue").ComputedRef<Boolean>;
    isFocused: import("vue").Ref<boolean>;
    handleChange: (evt: Event) => void;
    addToStore: () => void;
};
