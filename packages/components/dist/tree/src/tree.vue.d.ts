import { TreeNodeKey, TreeNodeData, CheckedStrategy } from './interface';
declare function toggleCheck(key: TreeNodeKey, e: Event): void;
/**
 * @zh 虚拟列表滚动某个元素
 * @en Virtual list scroll to an element
 * @param {{ index?: number; key?: number | string; align: 'auto' | 'top' | 'bottom'}} options
 * @public
 */
declare function scrollIntoView(options: ScrollIntoViewOptions): void;
/**
 * @zh 获取选中的节点
 * @en Get selected nodes
 * @returns {TreeNodeData[]}
 * @public
 */
declare function getSelectedNodes(): (TreeNodeData | undefined)[];
/**
 * @zh 获取选中复选框的节点。支持传入 `checkedStrategy`，没有传则取组件的配置。
 * @en Get checked nodes. Supports passing in `checkedStrategy`, if not passed, the configuration of the component is taken.
 * @param { checkedStrategy?: 'all' | 'parent' | 'child'; includeHalfChecked?: boolean; } options
 * @returns {TreeNodeData[]}
 * @public
 */
declare function getCheckedNodes(options?: {
    checkedStrategy?: CheckedStrategy;
    includeHalfChecked?: boolean;
}): (TreeNodeData | undefined)[];
/**
 * @zh 获取复选框半选的节点
 * @en Get half checked nodes
 * @returns {TreeNodeData[]}
 * @public
 */
declare function getHalfCheckedNodes(): (TreeNodeData | undefined)[];
/**
 * @zh 获取展开的节点
 * @en Get expanded nodes
 * @returns {TreeNodeData[]}
 * @public
 */
declare function getExpandedNodes(): (TreeNodeData | undefined)[];
/**
 * @zh 设置全部节点的复选框状态
 * @en Set the checkbox state of all nodes
 * @param { boolean } checked
 * @public
 */
declare function checkAll(checked?: boolean): void;
/**
 * @zh 设置指定节点的复选框状态
 * @en Sets the checkbox state of the specified node
 * @param { TreeNodeKey | TreeNodeKey[] } key
 * @param { boolean } checked
 * @param { boolean } onlyCheckLeaf
 * @public
 */
declare function checkNode(key: TreeNodeKey | TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
/**
 * @zh 设置全部节点的选中状态
 * @en Set the selected state of all nodes
 * @param { boolean } selected
 * @public
 */
declare function selectAll(selected?: boolean): void;
/**
 * @zh 设置指定节点的选中状态
 * @en Sets the selected state of the specified node
 * @param { TreeNodeKey | TreeNodeKey[] } key
 * @param { boolean } selected
 * @public
 */
declare function selectNode(key: TreeNodeKey | TreeNodeKey[], selected?: boolean): void;
/**
 * @zh 设置全部节点的展开状态
 * @en Set the expanded state of all nodes
 * @param { boolean } expanded
 * @public
 */
declare function expandAll(expanded?: boolean): void;
/**
 * @zh 设置指定节点的展开状态
 * @en Sets the expanded state of the specified node
 * @param { TreeNodeKey | TreeNodeKey[] } key
 * @param { boolean } expanded
 * @public
 */
declare function expandNode(key: TreeNodeKey | TreeNodeKey[], expanded?: boolean): void;
declare const _default: import("vue").DefineComponent<{
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly blockNode: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
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
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly selectedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultCheckedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly checkedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultExpandedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly expandedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => TreeNodeData[]) | (() => TreeNodeData[]) | ((new (...args: any[]) => TreeNodeData[]) | (() => TreeNodeData[]))[], unknown, unknown, () => never[], boolean>;
    readonly fieldNames: {
        readonly type: import("vue").PropType<import("./interface").TreeFieldNames>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showLine: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly loadMore: {
        readonly type: import("vue").PropType<(node: TreeNodeData) => Promise<void>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly draggable: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly allowDrop: {
        readonly type: import("vue").PropType<(options: {
            dropNode: TreeNodeData;
            dropPosition: 0 | 1 | -1;
        }) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly filterTreeNode: {
        readonly type: import("vue").PropType<import("./interface").FilterTreeNode>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly searchValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly virtualListProps: {
        readonly type: import("vue").PropType<import("../../virtual-list").VirtualListProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultExpandSelected: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly defaultExpandChecked: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly autoExpandParent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly halfCheckedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onlyCheckLeaf: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly animation: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly actionOnNodeClick: {
        readonly type: import("vue").PropType<"expand">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disableSelectActionOnly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}, {
    toggleCheck: typeof toggleCheck;
    scrollIntoView: typeof scrollIntoView;
    getSelectedNodes: typeof getSelectedNodes;
    getCheckedNodes: typeof getCheckedNodes;
    getHalfCheckedNodes: typeof getHalfCheckedNodes;
    getExpandedNodes: typeof getExpandedNodes;
    checkAll: typeof checkAll;
    checkNode: typeof checkNode;
    selectAll: typeof selectAll;
    selectNode: typeof selectNode;
    expandAll: typeof expandAll;
    expandNode: typeof expandNode;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    drop: (data: {
        e: DragEvent;
        dragNode: TreeNodeData;
        dropNode: TreeNodeData;
        dropPosition: number;
    }) => void;
    select: (selectedKeys: (string | number)[], data: {
        selected?: boolean | undefined;
        selectedNodes: TreeNodeData[];
        node?: TreeNodeData | undefined;
        e?: Event | undefined;
    }) => void;
    "update:selectedKeys": (selectedKeys: (string | number)[]) => void;
    expand: (expandKeys: (string | number)[], data: {
        expanded?: boolean | undefined;
        expandedNodes: TreeNodeData[];
        node?: TreeNodeData | undefined;
        e?: Event | undefined;
    }) => void;
    dragStart: (ev: DragEvent, node: TreeNodeData) => void;
    dragOver: (ev: DragEvent, node: TreeNodeData) => void;
    dragLeave: (ev: DragEvent, node: TreeNodeData) => void;
    dragEnd: (ev: DragEvent, node: TreeNodeData) => void;
    check: (checkedKeys: (string | number)[], data: {
        checked?: boolean | undefined;
        checkedNodes: TreeNodeData[];
        node?: TreeNodeData | undefined;
        halfCheckedKeys: (string | number)[];
        halfCheckedNodes: TreeNodeData[];
        e?: Event | undefined;
    }) => void;
    "update:checkedKeys": (checkedKeys: (string | number)[]) => void;
    "update:halfCheckedKeys": (halfCheckedKeys: (string | number)[]) => void;
    "update:expandedKeys": (expandKeys: (string | number)[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly blockNode: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
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
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly selectedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultCheckedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly checkedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultExpandedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly expandedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => TreeNodeData[]) | (() => TreeNodeData[]) | ((new (...args: any[]) => TreeNodeData[]) | (() => TreeNodeData[]))[], unknown, unknown, () => never[], boolean>;
    readonly fieldNames: {
        readonly type: import("vue").PropType<import("./interface").TreeFieldNames>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showLine: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly loadMore: {
        readonly type: import("vue").PropType<(node: TreeNodeData) => Promise<void>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly draggable: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly allowDrop: {
        readonly type: import("vue").PropType<(options: {
            dropNode: TreeNodeData;
            dropPosition: 0 | 1 | -1;
        }) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly filterTreeNode: {
        readonly type: import("vue").PropType<import("./interface").FilterTreeNode>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly searchValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly virtualListProps: {
        readonly type: import("vue").PropType<import("../../virtual-list").VirtualListProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultExpandSelected: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly defaultExpandChecked: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly autoExpandParent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly halfCheckedKeys: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onlyCheckLeaf: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly animation: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly actionOnNodeClick: {
        readonly type: import("vue").PropType<"expand">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disableSelectActionOnly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}>> & {
    onSelect?: ((selectedKeys: (string | number)[], data: {
        selected?: boolean | undefined;
        selectedNodes: TreeNodeData[];
        node?: TreeNodeData | undefined;
        e?: Event | undefined;
    }) => any) | undefined;
    onDrop?: ((data: {
        e: DragEvent;
        dragNode: TreeNodeData;
        dropNode: TreeNodeData;
        dropPosition: number;
    }) => any) | undefined;
    onCheck?: ((checkedKeys: (string | number)[], data: {
        checked?: boolean | undefined;
        checkedNodes: TreeNodeData[];
        node?: TreeNodeData | undefined;
        halfCheckedKeys: (string | number)[];
        halfCheckedNodes: TreeNodeData[];
        e?: Event | undefined;
    }) => any) | undefined;
    onExpand?: ((expandKeys: (string | number)[], data: {
        expanded?: boolean | undefined;
        expandedNodes: TreeNodeData[];
        node?: TreeNodeData | undefined;
        e?: Event | undefined;
    }) => any) | undefined;
    onDragStart?: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
    onDragEnd?: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
    onDragOver?: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
    onDragLeave?: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
    "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
    "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
    "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
    "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
}, {
    readonly animation: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly multiple: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly data: TreeNodeData[];
    readonly selectable: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((node: TreeNodeData, info: {
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
    }) => boolean)))[], unknown, unknown>;
    readonly checkable: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((node: TreeNodeData, info: {
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
    }) => boolean)))[], unknown, unknown>;
    readonly showLine: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly checkStrictly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly onlyCheckLeaf: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultExpandAll: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly checkedStrategy: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent") | ((new (...args: any[]) => "all" | "child" | "parent") | (() => "all" | "child" | "parent"))[], unknown, unknown>;
    readonly searchValue: string;
    readonly defaultExpandSelected: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultExpandChecked: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly autoExpandParent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly disableSelectActionOnly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>;
export default _default;
