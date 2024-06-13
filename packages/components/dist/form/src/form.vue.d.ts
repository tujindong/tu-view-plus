import type { Arrayable } from '@tu-view-plus/utils';
import type { FormValidateCallback, FormValidationResult } from './types';
import type { FormItemProp } from './form-item';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly model: ObjectConstructor;
    readonly rules: {
        readonly type: import("vue").PropType<Partial<Record<string, Arrayable<import("./types").FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly labelPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "left" | "right" | "top", unknown, "right", boolean>;
    readonly requireAsteriskPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly labelSuffix: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly inline: BooleanConstructor;
    readonly inlineMessage: BooleanConstructor;
    readonly statusIcon: BooleanConstructor;
    readonly showMessage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly validateOnRuleChange: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly hideRequiredAsterisk: BooleanConstructor;
    readonly scrollToError: BooleanConstructor;
    readonly scrollIntoViewOptions: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
}, {
    validate: (callback?: FormValidateCallback | undefined) => FormValidationResult;
    validateField: (props?: Arrayable<FormItemProp> | undefined, callback?: FormValidateCallback | undefined) => FormValidationResult;
    resetFields: (props?: Arrayable<FormItemProp> | undefined) => void;
    clearValidate: (props?: Arrayable<FormItemProp> | undefined) => void;
    scrollToField: (prop: FormItemProp) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    validate: (prop: FormItemProp, isValid: boolean, message: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly model: ObjectConstructor;
    readonly rules: {
        readonly type: import("vue").PropType<Partial<Record<string, Arrayable<import("./types").FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly labelPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "left" | "right" | "top", unknown, "right", boolean>;
    readonly requireAsteriskPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly labelSuffix: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly inline: BooleanConstructor;
    readonly inlineMessage: BooleanConstructor;
    readonly statusIcon: BooleanConstructor;
    readonly showMessage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly validateOnRuleChange: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly hideRequiredAsterisk: BooleanConstructor;
    readonly scrollToError: BooleanConstructor;
    readonly scrollIntoViewOptions: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
}>> & {
    onValidate?: ((prop: FormItemProp, isValid: boolean, message: string) => any) | undefined;
}, {
    readonly disabled: boolean;
    readonly inline: boolean;
    readonly labelWidth: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly inlineMessage: boolean;
    readonly showMessage: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly labelPosition: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "left" | "right" | "top", unknown>;
    readonly requireAsteriskPosition: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "left" | "right", unknown>;
    readonly labelSuffix: string;
    readonly validateOnRuleChange: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly statusIcon: boolean;
    readonly hideRequiredAsterisk: boolean;
    readonly scrollToError: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
