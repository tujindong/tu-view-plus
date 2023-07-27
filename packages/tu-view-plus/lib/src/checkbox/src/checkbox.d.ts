import { CheckboxValueType } from './constants';
import type { ExtractPropTypes } from 'vue';
import type Checkbox from './checkbox.vue';
export declare const checkboxProps: {
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
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly tabindex: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
export declare const checkboxEmits: {
    "update:modelValue": (val: CheckboxValueType) => boolean;
    change: (val: CheckboxValueType, evt: Event) => boolean;
};
export declare type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
export declare type CheckboxEmits = typeof checkboxEmits;
export declare type CheckboxInstance = InstanceType<typeof Checkbox>;
