import type { ExtractPropTypes } from 'vue';
import type Button from './button.vue';
export declare const buttonProps: {
    disabled: BooleanConstructor;
    size: {
        default: string;
        type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, string, boolean>;
    icon: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    nativeType: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "reset" | "submit" | "button", unknown, string, boolean>;
    loading: BooleanConstructor;
    loadingIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => any, boolean>;
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
export interface ButtonConfigContext {
}
