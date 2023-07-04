import { RadioProps } from './radio';
export declare const useRadio: (props: {
    type: RadioProps['type'];
    label: RadioProps['label'];
    modelValue?: RadioProps['modelValue'];
}, emit?: (((event: "update:modelValue", val: string | number | boolean) => void) & ((event: "change", val: string | number | boolean) => void)) | undefined) => {
    radioRef: import("vue").Ref<HTMLInputElement | undefined>;
    radioGroup: import("./constants").RadioGroupContext | undefined;
    isGroup: import("vue").ComputedRef<boolean>;
    modelValue: import("vue").WritableComputedRef<import("@tu-view-plus/utils").EpPropMergeType<(StringConstructor | BooleanConstructor | NumberConstructor)[], unknown, unknown>>;
    radioSize: import("vue").ComputedRef<"" | "small" | "mini" | "medium" | "large">;
    radioType: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>>;
    disabled: import("vue").ComputedRef<boolean>;
    focus: import("vue").Ref<boolean>;
    tabIndex: import("vue").ComputedRef<0 | -1>;
    handleChange: () => void;
};
