import type { ExtractPropTypes, PropType } from 'vue';
import type Collapse from './collapse.vue';
import type { Arrayable } from '@tu-view-plus/utils';
export declare type CollapseActiveName = string | number;
export declare type CollapseModelValue = Arrayable<CollapseActiveName>;
export declare const collapseProps: {
    readonly accordion: BooleanConstructor;
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => CollapseModelValue & {}) | (() => CollapseModelValue) | ((new (...args: any[]) => CollapseModelValue & {}) | (() => CollapseModelValue))[], unknown, unknown, () => [], boolean>;
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("line" | "up" | "down") & {}) | (() => "line" | "up" | "down") | ((new (...args: any[]) => ("line" | "up" | "down") & {}) | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown, "line", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
};
export declare const collapseEmits: {
    "update:modelValue": (value: CollapseModelValue) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    change: (value: CollapseModelValue) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
};
export declare type CollapseProps = ExtractPropTypes<typeof collapseProps>;
export declare type CollapseInstance = InstanceType<typeof Collapse>;
export declare type CollapseEmits = typeof collapseEmits;
