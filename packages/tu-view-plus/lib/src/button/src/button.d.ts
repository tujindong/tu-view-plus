import type { PropType, ExtractPropTypes } from 'vue';
import type Button from './button.vue';
export declare const buttonTypes: readonly ["default", "primary", "success", "warning", "info", "danger", "text", ""];
export declare const buttonNativeTypes: readonly ["button", "submit", "reset"];
export declare const buttonProps: {
    disabled: BooleanConstructor;
    size: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("mini" | "small" | "medium" | "large") & {}) | (() => "mini" | "small" | "medium" | "large") | ((new (...args: any[]) => ("mini" | "small" | "medium" | "large") & {}) | (() => "mini" | "small" | "medium" | "large"))[], "mini" | "small" | "medium" | "large", unknown, string, boolean>;
    type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, string, boolean>;
    icon: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    nativeType: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, string, boolean>;
    loading: BooleanConstructor;
    loadingIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => any, boolean>;
    text: BooleanConstructor;
    autofocus: BooleanConstructor;
    round: BooleanConstructor;
    circle: BooleanConstructor;
};
export declare const buttonEmits: {
    click: (evt: MouseEvent) => boolean;
};
export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export declare type ButtonEmits = typeof buttonEmits;
export declare type ButtonInstance = InstanceType<typeof Button>;
