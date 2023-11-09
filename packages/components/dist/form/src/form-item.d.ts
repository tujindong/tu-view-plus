import type { ExtractPropTypes } from 'vue';
import type { Arrayable } from '@tu-view-plus/utils';
import type { FormItemRule } from './types';
export declare const formItemValidateStates: readonly ["", "error", "validating", "success"];
export type FormItemValidateState = (typeof formItemValidateStates)[number];
export type FormItemProp = Arrayable<string>;
export declare const formItemProps: {
    readonly label: StringConstructor;
    readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly prop: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => FormItemProp))[], unknown, unknown>>;
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
