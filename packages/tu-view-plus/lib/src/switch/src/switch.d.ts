import type { ExtractPropTypes } from 'vue';
import type Switch from './switch.vue';
export declare const switchTypes: readonly ["circle", "round", "line"];
export declare const switchProps: {
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "circle" | "line" | "round", unknown, "circle", boolean>;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly loading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly width: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly inlinePrompt: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly activeIcon: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly inactiveIcon: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly activeText: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly inactiveText: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly activeValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, true, boolean>;
    readonly inactiveValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown, false, boolean>;
    readonly name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly beforeChange: {
        readonly type: import("vue").PropType<() => Promise<boolean> | boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly id: StringConstructor;
    readonly tabindex: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const switchEmits: {
    "update:modelValue": (val: boolean | string | number) => boolean;
    change: (val: boolean | string | number) => boolean;
    input: (val: boolean | string | number) => boolean;
};
export declare type SwitchEmits = typeof switchEmits;
export declare type SwitchProps = ExtractPropTypes<typeof switchProps>;
export declare type SwitchInstance = InstanceType<typeof Switch>;
