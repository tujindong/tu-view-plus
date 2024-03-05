import { VirtualListProps } from '../../virtual-list';
import type { ExtractPropTypes, PropType } from 'vue';
import type Tree from './tree.vue';
import type { TreeNodeData, TreeFieldNames, FilterTreeNode } from './interface';
export declare const treeProps: {
    readonly size: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        /**
         * @zh 是否展示连接线
         * @en Whether to display the connection line
         * */
        __epPropKey: true;
    };
    readonly blockNode: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        /**
         * @zh 是否展示连接线
         * @en Whether to display the connection line
         * */
        __epPropKey: true;
    };
    readonly defaultExpandAll: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly multiple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly checkable: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((node: TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | (() => boolean | ((node: TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | ((new (...args: any[]) => boolean | ((node: TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | (() => boolean | ((node: TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)))[], unknown, unknown, false, boolean>;
    readonly selectable: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((node: TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | (() => boolean | ((node: TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | ((new (...args: any[]) => boolean | ((node: TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | (() => boolean | ((node: TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)))[], unknown, unknown, true, boolean>;
    readonly checkStrictly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly checkedStrategy: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent") | ((new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent"))[], unknown, unknown, "all", boolean>;
    readonly defaultSelectedKeys: {
        readonly type: PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        /**
         * @zh 是否展示连接线
         * @en Whether to display the connection line
         * */
        __epPropKey: true;
    };
    readonly selectedKeys: {
        readonly type: PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        /**
         * @zh 是否展示连接线
         * @en Whether to display the connection line
         * */
        __epPropKey: true;
    };
    readonly defaultCheckedKeys: {
        readonly type: PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        /**
         * @zh 是否展示连接线
         * @en Whether to display the connection line
         * */
        __epPropKey: true;
    };
    readonly checkedKeys: {
        readonly type: PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        /**
         * @zh 是否展示连接线
         * @en Whether to display the connection line
         * */
        __epPropKey: true;
    };
    readonly defaultExpandedKeys: {
        readonly type: PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        /**
         * @zh 是否展示连接线
         * @en Whether to display the connection line
         * */
        __epPropKey: true;
    };
    readonly expandedKeys: {
        readonly type: PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        /**
         * @zh 是否展示连接线
         * @en Whether to display the connection line
         * */
        __epPropKey: true;
    };
    readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => TreeNodeData[]) | (() => TreeNodeData[]) | ((new (...args: any[]) => TreeNodeData[]) | (() => TreeNodeData[]))[], unknown, unknown, () => never[], boolean>;
    readonly fieldNames: {
        readonly type: PropType<TreeFieldNames>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        /**
         * @zh 是否展示连接线
         * @en Whether to display the connection line
         * */
        __epPropKey: true;
    };
    readonly showLine: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly loadMore: {
        readonly type: PropType<(node: TreeNodeData) => Promise<void>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        /**
         * @zh 是否展示连接线
         * @en Whether to display the connection line
         * */
        __epPropKey: true;
    };
    readonly draggable: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        /**
         * @zh 是否展示连接线
         * @en Whether to display the connection line
         * */
        __epPropKey: true;
    };
    readonly allowDrop: {
        readonly type: PropType<(options: {
            dropNode: TreeNodeData;
            dropPosition: -1 | 0 | 1;
        }) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        /**
         * @zh 是否展示连接线
         * @en Whether to display the connection line
         * */
        __epPropKey: true;
    };
    readonly filterTreeNode: {
        readonly type: PropType<FilterTreeNode>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        /**
         * @zh 是否展示连接线
         * @en Whether to display the connection line
         * */
        __epPropKey: true;
    };
    readonly searchValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly virtualListProps: {
        readonly type: PropType<VirtualListProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        /**
         * @zh 是否展示连接线
         * @en Whether to display the connection line
         * */
        __epPropKey: true;
    };
    readonly defaultExpandSelected: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly defaultExpandChecked: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly autoExpandParent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly halfCheckedKeys: {
        readonly type: PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        /**
         * @zh 是否展示连接线
         * @en Whether to display the connection line
         * */
        __epPropKey: true;
    };
    readonly onlyCheckLeaf: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly animation: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly actionOnNodeClick: {
        readonly type: PropType<"expand">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        /**
         * @zh 是否展示连接线
         * @en Whether to display the connection line
         * */
        __epPropKey: true;
    };
    readonly disableSelectActionOnly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
};
export declare const treeEmits: {
    /**
     * @zh 点击树节点时触发
     * @en Triggered when the tree node is clicked
     * @param {Array<string | number>} selectedKeys
     * @param {{ selected?: boolean; selectedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }} data
     */
    select: (selectedKeys: (string | number)[], data: {
        selected?: boolean;
        selectedNodes: TreeNodeData[];
        node?: TreeNodeData;
        e?: Event;
    }) => boolean;
    'update:selectedKeys': (selectedKeys: (string | number)[]) => boolean;
    /**
     * @zh 点击树节点复选框时触发。
     * @en Triggered when the tree node checkbox is clicked.
     * @param {Array<string | number>} checkedKeys
     * @param {{ checked?: boolean; checkedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; halfCheckedKeys: (string | number)[]; halfCheckedNodes: TreeNodeData[]; }} data
     */
    check: (checkedKeys: (string | number)[], data: {
        checked?: boolean;
        checkedNodes: TreeNodeData[];
        node?: TreeNodeData;
        halfCheckedKeys: (string | number)[];
        halfCheckedNodes: TreeNodeData[];
        e?: Event;
    }) => boolean;
    'update:checkedKeys': (checkedKeys: (string | number)[]) => boolean;
    'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => boolean;
    /**
     * @zh 展开/关闭
     * @en Expand/close
     * @param {Array<string | number>} expandKeys
     * @param {{ expanded?: boolean; expandNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }} data
     */
    expand: (expandKeys: (string | number)[], data: {
        expanded?: boolean;
        expandedNodes: TreeNodeData[];
        node?: TreeNodeData;
        e?: Event;
    }) => boolean;
    'update:expandedKeys': (expandKeys: (string | number)[]) => boolean;
    /**
     * @zh 节点开始拖拽
     * @en Node starts dragging
     */
    dragStart: (ev: DragEvent, node: TreeNodeData) => boolean;
    /**
     * @zh 节点结束拖拽
     * @en Node end drag
     * @param {DragEvent} ev
     * @param {TreeNodeData} node
     */
    dragEnd: (ev: DragEvent, node: TreeNodeData) => boolean;
    /**
     * @zh 节点被拖拽至可释放目标
     * @en The node is dragged to the releasable target
     * @param {DragEvent} ev
     * @param {TreeNodeData} node
     */
    dragOver: (ev: DragEvent, node: TreeNodeData) => boolean;
    /**
     * @zh 节点离开可释放目标
     * @en Node leaves to release the target
     * @param {DragEvent} ev
     * @param {TreeNodeData} node
     */
    dragLeave: (ev: DragEvent, node: TreeNodeData) => boolean;
    /**
     * @zh 节点在可释放目标上释放
     * @en The node is released on a releasable target
     * @param {{ e: DragEvent; dragNode: TreeNodeData; dropNode: TreeNodeData; dropPosition: number; }} data
     */
    drop: (data: {
        e: DragEvent;
        dragNode: TreeNodeData;
        dropNode: TreeNodeData;
        dropPosition: number;
    }) => boolean;
};
export type TreeProps = ExtractPropTypes<typeof treeProps>;
export type TreeInstance = InstanceType<typeof Tree>;
