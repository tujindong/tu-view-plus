import type { ExtractPropTypes, PropType } from 'vue';
export declare const dropdownItemProps: {
    readonly value: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, ObjectConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly active: BooleanConstructor;
    readonly uninjectContext: BooleanConstructor;
};
export declare const dropdownItemEmits: {
    click: (ev: MouseEvent) => boolean;
};
export type DropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>;
export type DropdownItemEmits = typeof dropdownItemEmits;
