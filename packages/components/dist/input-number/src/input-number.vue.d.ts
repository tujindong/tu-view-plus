declare const _default: import("vue").DefineComponent<{
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly step: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    readonly stepStrictly: BooleanConstructor;
    readonly max: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    readonly min: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    readonly modelValue: NumberConstructor;
    readonly readonly: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly clearable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly controls: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly controlsPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "right", unknown, "", boolean>;
    readonly valueOnClear: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, null], unknown, unknown, null, boolean>;
    readonly name: StringConstructor;
    readonly label: StringConstructor;
    readonly placeholder: StringConstructor;
    readonly precision: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, {
    focus: () => void;
    blur: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    blur: (e: FocusEvent) => void;
    focus: (e: FocusEvent) => void;
    "update:modelValue": (val: number | undefined) => void;
    change: (cur: number | undefined, prev: number | undefined) => void;
    input: (val: number | null | undefined) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly step: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    readonly stepStrictly: BooleanConstructor;
    readonly max: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    readonly min: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    readonly modelValue: NumberConstructor;
    readonly readonly: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly clearable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly controls: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly controlsPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "right", unknown, "", boolean>;
    readonly valueOnClear: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, null], unknown, unknown, null, boolean>;
    readonly name: StringConstructor;
    readonly label: StringConstructor;
    readonly placeholder: StringConstructor;
    readonly precision: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
    onFocus?: ((e: FocusEvent) => any) | undefined;
    onBlur?: ((e: FocusEvent) => any) | undefined;
    onChange?: ((cur: number | undefined, prev: number | undefined) => any) | undefined;
    onInput?: ((val: number | null | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((val: number | undefined) => any) | undefined;
}, {
    readonly disabled: boolean;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>;
    readonly id: string;
    readonly max: number;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly min: number;
    readonly controls: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly readonly: boolean;
    readonly clearable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly step: number;
    readonly controlsPosition: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "right", unknown>;
    readonly valueOnClear: any;
    readonly stepStrictly: boolean;
}, {}>;
export default _default;
