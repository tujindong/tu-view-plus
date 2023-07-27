import type { ExtractPropTypes } from 'vue';
import type { Language } from '@tu-view-plus/locale';
import type { ButtonConfigContext } from '../../button';
import type { MessageConfigContext } from '../../message';
export declare type ExperimentalFeatures = {};
export declare const configProviderProps: {
    readonly a11y: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly locale: {
        readonly type: import("vue").PropType<Language>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly button: {
        readonly type: import("vue").PropType<ButtonConfigContext>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly experimentalFeatures: {
        readonly type: import("vue").PropType<ExperimentalFeatures>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly keyboardNavigation: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly message: {
        readonly type: import("vue").PropType<MessageConfigContext>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly zIndex: NumberConstructor;
    readonly namespace: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "tu", boolean>;
};
export declare type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;
