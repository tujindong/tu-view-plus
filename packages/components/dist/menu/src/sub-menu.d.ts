import type { ExtractPropTypes, PropType } from 'vue';
import type SubMenu from './sub-menu.vue';
export declare const subMenuProps: {
    readonly key: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly title: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly selectable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly popup: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((level: number) => boolean)) | (() => boolean | ((level: number) => boolean)) | ((new (...args: any[]) => boolean | ((level: number) => boolean)) | (() => boolean | ((level: number) => boolean)))[], unknown, unknown, false, boolean>;
    readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | boolean) | (() => number | boolean) | ((new (...args: any[]) => number | boolean) | (() => number | boolean))[], unknown, unknown, undefined, boolean>;
};
export type SubMenuProps = ExtractPropTypes<typeof subMenuProps>;
export type SubMenuInstance = InstanceType<typeof SubMenu>;
