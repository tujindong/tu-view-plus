declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, string, boolean>;
    size: {
        default: string;
        type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    label: import("@tu-view-plus/utils").EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
    modelValue: import("@tu-view-plus/utils").EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
    name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    border: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: string | number | boolean) => void;
    change: (val: string | number | boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, string, boolean>;
    size: {
        default: string;
        type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    label: import("@tu-view-plus/utils").EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
    modelValue: import("@tu-view-plus/utils").EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
    name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    border: BooleanConstructor;
}>> & {
    onChange?: ((val: string | number | boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
}, {
    label: import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
    disabled: boolean;
    type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>;
    size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>;
    border: boolean;
    name: string;
    modelValue: import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
