import { RadioProps } from './radio';
export declare const useRadio: (props: {
    label: RadioProps['label'];
    modelValue?: RadioProps['modelValue'];
}, emit?: (((event: "change", val: string | number | boolean) => void) & ((event: "update:modelValue", val: string | number | boolean) => void)) | undefined) => {
    radioRef: import("vue").Ref<HTMLInputElement | undefined>;
    radioGroup: import("./constants").RadioGroupContext | undefined;
    isGroup: import("vue").ComputedRef<boolean>;
    modelValue: import("vue").WritableComputedRef<import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>>;
    size: import("vue").ComputedRef<"" | "mini" | "small" | "medium" | "large">;
    disabled: import("vue").ComputedRef<boolean>;
    focus: import("vue").Ref<boolean>;
    tabIndex: import("vue").ComputedRef<0 | -1>;
};
