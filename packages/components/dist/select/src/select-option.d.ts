import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';
export declare const selectOptionProps: {
    readonly value: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
    readonly label: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly tagProps: {
        readonly type: PropType<{
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly color: string;
            readonly round: boolean;
            readonly closable: boolean;
            readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "inset" | "outset" | "dark" | "light" | "plain", unknown>;
            readonly disableTransitions: boolean;
            readonly hit: boolean;
        }>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly extra: {
        readonly type: PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly index: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly internal: BooleanConstructor;
};
export type SelectOptionProps = ExtractPropTypes<typeof selectOptionProps>;
