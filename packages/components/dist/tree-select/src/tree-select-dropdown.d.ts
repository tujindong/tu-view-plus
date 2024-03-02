import type { ExtractPropTypes, PropType } from 'vue';
import type TreeSelectDropdown from './tree-select-dropdown.vue';
import type { TreeProps, TreeNodeKey } from '../../tree/src/interface';
import type { ScrollbarProps } from '../../scrollbar';
export declare const treeSelectDropdownProps: {
    readonly treeProps: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => Partial<TreeProps>) | (() => Partial<TreeProps>) | ((new (...args: any[]) => Partial<TreeProps>) | (() => Partial<TreeProps>))[], unknown, unknown, () => {}, boolean>;
    readonly selectedKeys: {
        readonly type: PropType<TreeNodeKey[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showCheckable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly treeSlots: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>) | (() => Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>) | ((new (...args: any[]) => Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>) | (() => Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>))[], unknown, unknown, () => {}, boolean>;
    readonly scrollbar: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly tag: string;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | ScrollbarProps) | ((new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly tag: string;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | ScrollbarProps))[], unknown, unknown, true, boolean>;
    readonly size: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const treeSelectDropdownEmits: string[];
export type TreeSelectDropdownProps = ExtractPropTypes<typeof treeSelectDropdownProps>;
export type TreeSelectDropdownInstance = InstanceType<typeof TreeSelectDropdown>;
