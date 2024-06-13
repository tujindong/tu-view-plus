declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor, BooleanConstructor], unknown, unknown, undefined, boolean>;
    readonly label: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor, NumberConstructor, ObjectConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly indeterminate: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly checked: BooleanConstructor;
    readonly name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly trueLabel: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
    readonly falseLabel: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly controls: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, "", boolean>;
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly tabindex: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (val: import("./constants").CheckboxValueType, evt: Event) => void;
    "update:modelValue": (val: import("./constants").CheckboxValueType) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor, BooleanConstructor], unknown, unknown, undefined, boolean>;
    readonly label: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor, NumberConstructor, ObjectConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly indeterminate: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly checked: BooleanConstructor;
    readonly name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly trueLabel: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
    readonly falseLabel: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly controls: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, "", boolean>;
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly tabindex: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
    onChange?: ((val: import("./constants").CheckboxValueType, evt: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((val: import("./constants").CheckboxValueType) => any) | undefined;
}, {
    readonly disabled: boolean;
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>;
    readonly name: string;
    readonly id: string;
    readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor, BooleanConstructor], unknown, unknown>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly trueLabel: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly falseLabel: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly controls: string;
    readonly tabindex: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly indeterminate: boolean;
    readonly checked: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
