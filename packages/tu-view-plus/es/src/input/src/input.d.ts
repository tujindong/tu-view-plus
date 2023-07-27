import type { ExtractPropTypes, StyleValue } from 'vue';
import type Input from './input.vue';
export declare const inputProps: {
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
    readonly autocomplete: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
    readonly formatter: {
        readonly type: import("vue").PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly parser: {
        readonly type: import("vue").PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly placeholder: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly form: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly readonly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly clearable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showPassword: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showWordLimit: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly suffixIcon: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly prefixIcon: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly containerRole: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly tabindex: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly inputStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => StyleValue & {}) | (() => StyleValue) | ((new (...args: any[]) => StyleValue & {}) | (() => StyleValue))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
};
export declare const inputEmits: {
    "update:modelValue": (value: string) => boolean;
    input: (value: string) => boolean;
    change: (value: string) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
    clear: () => boolean;
    mouseleave: (evt: MouseEvent) => boolean;
    mouseenter: (evt: MouseEvent) => boolean;
    keydown: (evt: KeyboardEvent | Event) => boolean;
    compositionstart: (evt: CompositionEvent) => boolean;
    compositionupdate: (evt: CompositionEvent) => boolean;
    compositionend: (evt: CompositionEvent) => boolean;
};
export declare type InputEmits = typeof inputEmits;
export declare type InputProps = ExtractPropTypes<typeof inputProps>;
export declare type InputInstance = InstanceType<typeof Input>;
