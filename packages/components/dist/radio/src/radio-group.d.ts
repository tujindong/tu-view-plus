import type { ExtractPropTypes } from '@vue/runtime-core';
import type RadioGroup from './radio-group.vue';
export declare const radioGroupProps: {
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, "", boolean>;
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("@vue/runtime-core").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
    readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly textColor: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
export declare const radioGroupEmits: {
    change: (val: string | number | boolean) => boolean;
    "update:modelValue": (val: string | number | boolean) => boolean;
};
export type RadioGroupEmits = typeof radioGroupEmits;
export type RadioGroupInstance = InstanceType<typeof RadioGroup>;
