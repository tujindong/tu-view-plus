import type { ExtractPropTypes } from 'vue';
import type { FormItemProp } from './form-item';
declare const formBaseProps: {
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
};
export declare const formProps: {
    readonly model: ObjectConstructor;
    readonly rules: {
        readonly type: import("vue").PropType<Partial<Record<string, import("@tu-view-plus/utils").Arrayable<import("./types").FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly labelPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
};
export declare type FormProps = ExtractPropTypes<typeof formProps>;
export declare type FormMetaProps = ExtractPropTypes<typeof formBaseProps>;
export declare const formEmits: {
    validate: (prop: FormItemProp, isValid: boolean, message: string) => boolean;
};
export declare type FormEmits = typeof formEmits;
export {};
