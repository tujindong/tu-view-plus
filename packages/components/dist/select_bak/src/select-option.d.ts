import type { ExtractPropTypes } from 'vue';
export declare const selectOptionProps: {
    readonly value: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly label: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly created: BooleanConstructor;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
};
export type SelectOptionProps = ExtractPropTypes<typeof selectOptionProps>;
