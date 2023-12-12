import type { Arrayable } from '@tu-view-plus/utils';
import type { FormItemRule } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly label: StringConstructor;
    readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly prop: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import("./form-item").FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import("./form-item").FormItemProp))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly required: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly rules: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => Arrayable<FormItemRule>) | ((new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => Arrayable<FormItemRule>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly error: StringConstructor;
    readonly validateStatus: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly for: StringConstructor;
    readonly inlineMessage: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
    readonly showMessage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {
    size: import("vue").ComputedRef<"" | "small" | "medium" | "large" | "mini">;
    validateMessage: import("vue").Ref<string>;
    validateState: import("vue").Ref<"" | "error" | "success" | "validating">;
    validate: (trigger: string, callback?: import("./types").FormValidateCallback | undefined) => import("./types").FormValidationResult;
    clearValidate: () => void;
    resetField: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly label: StringConstructor;
    readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly prop: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import("./form-item").FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import("./form-item").FormItemProp))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly required: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly rules: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => Arrayable<FormItemRule>) | ((new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => Arrayable<FormItemRule>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly error: StringConstructor;
    readonly validateStatus: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly for: StringConstructor;
    readonly inlineMessage: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
    readonly showMessage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>>, {
    readonly required: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly labelWidth: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly inlineMessage: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
    readonly showMessage: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>, {
    label?(_: {
        label: string;
    }): any;
    default?(_: {}): any;
    error?(_: {
        error: string;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
