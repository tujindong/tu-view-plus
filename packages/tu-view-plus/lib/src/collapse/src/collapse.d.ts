import type { ExtractPropTypes } from 'vue';
import type Collapse from './collapse.vue';
import type { Arrayable } from '@tu-view-plus/utils';
export declare type CollapseActiveName = string | number;
export declare type CollapseModelValue = Arrayable<CollapseActiveName>;
export declare const collapseProps: {
    readonly accordion: BooleanConstructor;
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => CollapseModelValue & {}) | (() => CollapseModelValue) | ((new (...args: any[]) => CollapseModelValue & {}) | (() => CollapseModelValue))[], unknown, unknown, () => [], boolean>;
};
export declare const collapseEmits: {
    "update:modelValue": (value: CollapseModelValue) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    change: (value: CollapseModelValue) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
};
export declare type CollapseProps = ExtractPropTypes<typeof collapseProps>;
export declare type CollapseInstance = InstanceType<typeof Collapse>;
export declare type CollapseEmits = typeof collapseEmits;
