import { Data } from '@tu-view-plus/utils';
import type { ExtractPropTypes, PropType, CSSProperties } from 'vue';
import type { LabelValue } from './interface';
import { TreeFieldNames, TreeNodeData, TreeProps } from '../../tree/src/interface';
import { TriggerProps } from '../../trigger';
import { ScrollbarProps } from '../../scrollbar';
export declare const treeSelectProps: {
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly loading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly error: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true; /**
         * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
         * @en Can accept Props of all [Trigger](/vue/component/trigger) components
         * */
    };
    readonly size: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true; /**
         * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
         * @en Can accept Props of all [Trigger](/vue/component/trigger) components
         * */
    };
    readonly border: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly allowSearch: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
        retainInputValue?: boolean | undefined;
    }) | (() => boolean | {
        retainInputValue?: boolean | undefined;
    }) | ((new (...args: any[]) => boolean | {
        retainInputValue?: boolean | undefined;
    }) | (() => boolean | {
        retainInputValue?: boolean | undefined;
    }))[], unknown, unknown, (props: Data) => boolean, boolean>;
    readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly placeholder: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true; /**
         * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
         * @en Can accept Props of all [Trigger](/vue/component/trigger) components
         * */
    };
    readonly maxTagCount: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true; /**
         * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
         * @en Can accept Props of all [Trigger](/vue/component/trigger) components
         * */
    };
    readonly multiple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly defaultValue: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | (string | number)[] | LabelValue | LabelValue[]) | (() => string | number | (string | number)[] | LabelValue | LabelValue[]) | ((new (...args: any[]) => string | number | (string | number)[] | LabelValue | LabelValue[]) | (() => string | number | (string | number)[] | LabelValue | LabelValue[]))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true; /**
         * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
         * @en Can accept Props of all [Trigger](/vue/component/trigger) components
         * */
    };
    readonly modelValue: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | (string | number)[] | LabelValue | LabelValue[]) | (() => string | number | (string | number)[] | LabelValue | LabelValue[]) | ((new (...args: any[]) => string | number | (string | number)[] | LabelValue | LabelValue[]) | (() => string | number | (string | number)[] | LabelValue | LabelValue[]))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true; /**
         * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
         * @en Can accept Props of all [Trigger](/vue/component/trigger) components
         * */
    };
    readonly fieldNames: {
        readonly type: PropType<TreeFieldNames>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true; /**
         * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
         * @en Can accept Props of all [Trigger](/vue/component/trigger) components
         * */
    };
    readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => TreeNodeData[]) | (() => TreeNodeData[]) | ((new (...args: any[]) => TreeNodeData[]) | (() => TreeNodeData[]))[], unknown, unknown, () => never[], boolean>;
    readonly labelInValue: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly treeCheckable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly treeCheckStrictly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly treeCheckedStrategy: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent") | ((new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent"))[], unknown, unknown, "all", boolean>;
    readonly treeProps: {
        readonly type: PropType<Partial<TreeProps>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true; /**
         * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
         * @en Can accept Props of all [Trigger](/vue/component/trigger) components
         * */
    };
    readonly triggerProps: {
        readonly type: PropType<Partial<TriggerProps>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true; /**
         * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
         * @en Can accept Props of all [Trigger](/vue/component/trigger) components
         * */
    };
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly dropdownStyle: {
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true; /**
         * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
         * @en Can accept Props of all [Trigger](/vue/component/trigger) components
         * */
    };
    readonly dropdownClassName: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => string | string[]) | ((new (...args: any[]) => string | string[]) | (() => string | string[]))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true; /**
         * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
         * @en Can accept Props of all [Trigger](/vue/component/trigger) components
         * */
    };
    readonly filterTreeNode: {
        readonly type: PropType<(searchKey: string, nodeData: TreeNodeData) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true; /**
         * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
         * @en Can accept Props of all [Trigger](/vue/component/trigger) components
         * */
    };
    readonly loadMore: {
        readonly type: PropType<(nodeData: TreeNodeData) => Promise<void>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true; /**
         * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
         * @en Can accept Props of all [Trigger](/vue/component/trigger) components
         * */
    };
    readonly disableFilter: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true; /**
         * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
         * @en Can accept Props of all [Trigger](/vue/component/trigger) components
         * */
    };
    readonly popupContainer: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true; /**
         * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
         * @en Can accept Props of all [Trigger](/vue/component/trigger) components
         * */
    };
    readonly fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((key: number | string) => TreeNodeData | boolean)) | (() => boolean | ((key: number | string) => TreeNodeData | boolean)) | ((new (...args: any[]) => boolean | ((key: number | string) => TreeNodeData | boolean)) | (() => boolean | ((key: number | string) => TreeNodeData | boolean)))[], unknown, unknown, true, boolean>;
    readonly selectable: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | "leaf" | ((node: TreeNodeData, info: {
        isLeaf: boolean;
        level: number;
    }) => boolean)) | (() => boolean | "leaf" | ((node: TreeNodeData, info: {
        isLeaf: boolean;
        level: number;
    }) => boolean)) | ((new (...args: any[]) => boolean | "leaf" | ((node: TreeNodeData, info: {
        isLeaf: boolean;
        level: number;
    }) => boolean)) | (() => boolean | "leaf" | ((node: TreeNodeData, info: {
        isLeaf: boolean;
        level: number;
    }) => boolean)))[], unknown, unknown, true, boolean>;
    readonly scrollbar: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly tag: string;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | ScrollbarProps) | ((new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly tag: string;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | ScrollbarProps))[], unknown, unknown, true, boolean>;
    readonly showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
    readonly showFooterOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
};
export declare const treeSelectEmits: {
    /**
     * @zh 值改变时触发
     * @en Trigger when the value changes
     * @param {string | number | LabelValue | Array<string | number> | LabelValue[] | undefined} value
     */
    change: (value: string | number | LabelValue | Array<string | number> | LabelValue[] | undefined) => boolean;
    'update:modelValue': (value: string | number | LabelValue | Array<string | number> | LabelValue[] | undefined) => boolean;
    /**
     * @zh 下拉框显示状态改变时触发
     * @en Triggered when the status of the drop-down box changes
     * @param {boolean} visible
     */
    'popup-visible-change': (visible: boolean) => boolean;
    'update:popupVisible': (visible: boolean) => boolean;
    /**
     * @zh 搜索值变化时触发
     * @en Triggered when the search value changes
     * @param {string} searchKey
     */
    search: (searchKey: string) => boolean;
    /**
     * @zh 点击清除时触发
     * @en Triggered when clear is clicked
     * */
    clear: () => boolean;
};
export type TreeSelectProps = ExtractPropTypes<typeof treeSelectProps>;
