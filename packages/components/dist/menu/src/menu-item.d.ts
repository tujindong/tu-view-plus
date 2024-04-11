import type { ExtractPropTypes } from 'vue';
export declare const menuItemProps: {
    readonly key: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
};
export declare const menuItemEmits: string[];
export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>;
