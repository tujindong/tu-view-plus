import type { ExtractPropTypes } from 'vue';
import type MenuItem from './menu-item.vue';
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
export type MenuItemInstance = InstanceType<typeof MenuItem>;
