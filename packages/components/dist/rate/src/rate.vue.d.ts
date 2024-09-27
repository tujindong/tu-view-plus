import type { Component } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly lowThreshold: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
    readonly highThreshold: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 4, boolean>;
    readonly max: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
    readonly colors: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string[] | Record<number, string>) | (() => string[] | Record<number, string>) | ((new (...args: any[]) => string[] | Record<number, string>) | (() => string[] | Record<number, string>))[], unknown, unknown, () => ["", "", ""], boolean>;
    readonly voidColor: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly disabledVoidColor: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly icons: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | Component)[] | Record<number, string | Component>) | (() => (string | Component)[] | Record<number, string | Component>) | ((new (...args: any[]) => (string | Component)[] | Record<number, string | Component>) | (() => (string | Component)[] | Record<number, string | Component>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>[], boolean>;
    readonly voidIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
    readonly disabledVoidIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
    readonly disabled: BooleanConstructor;
    readonly allowHalf: BooleanConstructor;
    readonly showText: BooleanConstructor;
    readonly showScore: BooleanConstructor;
    readonly textColor: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly texts: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => ["Extremely bad", "Disappointed", "Fair", "Satisfied", "Surprise"], boolean>;
    readonly scoreTemplate: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "{value}", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly clearable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}, {
    /** @description set current value */
    handleSetCurrentValue: (value: number, event?: MouseEvent | undefined) => void;
    /** @description reset current value */
    handleResetCurrentValue: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: number) => void;
    "update:modelValue": (value: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly lowThreshold: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
    readonly highThreshold: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 4, boolean>;
    readonly max: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
    readonly colors: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string[] | Record<number, string>) | (() => string[] | Record<number, string>) | ((new (...args: any[]) => string[] | Record<number, string>) | (() => string[] | Record<number, string>))[], unknown, unknown, () => ["", "", ""], boolean>;
    readonly voidColor: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly disabledVoidColor: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly icons: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | Component)[] | Record<number, string | Component>) | (() => (string | Component)[] | Record<number, string | Component>) | ((new (...args: any[]) => (string | Component)[] | Record<number, string | Component>) | (() => (string | Component)[] | Record<number, string | Component>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>[], boolean>;
    readonly voidIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
    readonly disabledVoidIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
    readonly disabled: BooleanConstructor;
    readonly allowHalf: BooleanConstructor;
    readonly showText: BooleanConstructor;
    readonly showScore: BooleanConstructor;
    readonly textColor: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly texts: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => ["Extremely bad", "Disappointed", "Fair", "Satisfied", "Surprise"], boolean>;
    readonly scoreTemplate: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "{value}", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly clearable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}>> & {
    onChange?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}, {
    readonly label: string;
    readonly max: number;
    readonly modelValue: number;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly disabled: boolean;
    readonly id: string;
    readonly textColor: string;
    readonly showText: boolean;
    readonly icons: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | Component)[] | Record<number, string | Component>) | (() => (string | Component)[] | Record<number, string | Component>) | ((new (...args: any[]) => (string | Component)[] | Record<number, string | Component>) | (() => (string | Component)[] | Record<number, string | Component>))[], unknown, unknown>;
    readonly lowThreshold: number;
    readonly highThreshold: number;
    readonly colors: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string[] | Record<number, string>) | (() => string[] | Record<number, string>) | ((new (...args: any[]) => string[] | Record<number, string>) | (() => string[] | Record<number, string>))[], unknown, unknown>;
    readonly voidColor: string;
    readonly disabledVoidColor: string;
    readonly voidIcon: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
    readonly disabledVoidIcon: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>;
    readonly texts: string[];
    readonly scoreTemplate: string;
    readonly clearable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly allowHalf: boolean;
    readonly showScore: boolean;
}, {}>;
export default _default;
