import { SetupContext } from '@vue/runtime-core';
import { RadioEmits, RadioProps } from './radio';
export declare const useRadio: (props: {
    type: RadioProps['type'];
    label: RadioProps['label'];
    modelValue?: RadioProps['modelValue'];
}, emit?: SetupContext<RadioEmits>['emit']) => {
    radioRef: import("vue").Ref<HTMLInputElement | undefined>;
    radioGroup: import("./constants").RadioGroupContext | undefined;
    isGroup: import("vue").ComputedRef<boolean>;
    modelValue: import("vue").WritableComputedRef<import("@tu-view-plus/utils").EpPropMergeType<(NumberConstructor | BooleanConstructor | StringConstructor)[], unknown, unknown>>;
    radioSize: import("vue").ComputedRef<"" | "small" | "medium" | "large" | "mini">;
    radioType: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "border" | "button", unknown>>;
    disabled: import("vue").ComputedRef<boolean>;
    focus: import("vue").Ref<boolean>;
    tabIndex: import("vue").ComputedRef<0 | -1>;
    handleChange: () => void;
};
