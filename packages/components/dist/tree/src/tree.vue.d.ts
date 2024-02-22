import { TreeNodeData } from './interface';
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
    "update:selectedKeys": (selectedKeys: (string | number)[]) => void;
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
