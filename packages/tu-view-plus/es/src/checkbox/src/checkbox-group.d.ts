import type { ExtractPropTypes } from 'vue';
import type checkboxGroup from './checkbox-group.vue';
import type { CheckboxValueType, CheckboxGroupValueType } from './constants';
export declare const checkboxGroupProps: {
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType) | ((new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, "", boolean>;
    readonly disabled: BooleanConstructor;
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly label: StringConstructor;
    readonly textColor: StringConstructor;
    readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
export declare const checkboxGroupEmits: {
    "update:modelValue": (val: CheckboxGroupValueType) => boolean;
    change: (val: CheckboxValueType[]) => boolean;
};
export declare type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
export declare type CheckboxGroupEmits = typeof checkboxGroupEmits;
export declare type CheckboxGroupInstance = InstanceType<typeof checkboxGroup>;
