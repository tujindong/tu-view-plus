import { CheckboxGroupValueType } from './constants';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType) | ((new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, "", boolean>;
    readonly disabled: BooleanConstructor;
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "large" | "medium", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly label: StringConstructor;
    readonly textColor: StringConstructor;
    readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (val: import("./constants").CheckboxValueType[]) => void;
    "update:modelValue": (val: CheckboxGroupValueType) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType) | ((new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, "", boolean>;
    readonly disabled: BooleanConstructor;
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "large" | "medium", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly label: StringConstructor;
    readonly textColor: StringConstructor;
    readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
    onChange?: ((val: import("./constants").CheckboxValueType[]) => any) | undefined;
    "onUpdate:modelValue"?: ((val: CheckboxGroupValueType) => any) | undefined;
}, {
    readonly disabled: boolean;
    readonly modelValue: CheckboxGroupValueType;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "large" | "medium", never>;
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>;
    readonly tag: string;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
