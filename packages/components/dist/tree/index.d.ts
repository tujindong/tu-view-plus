export declare const TuTree: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
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
    readonly checkable: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | (() => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | ((new (...args: any[]) => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | (() => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)))[], unknown, unknown, false, boolean>;
    readonly selectable: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | (() => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | ((new (...args: any[]) => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | (() => boolean | ((node: import("./src/interface").TreeNodeData, info: {
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
    readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/interface").TreeNodeData[]) | (() => import("./src/interface").TreeNodeData[]) | ((new (...args: any[]) => import("./src/interface").TreeNodeData[]) | (() => import("./src/interface").TreeNodeData[]))[], unknown, unknown, () => never[], boolean>;
    readonly fieldNames: {
        readonly type: import("vue").PropType<import("./src/interface").TreeFieldNames>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showLine: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly loadMore: {
        readonly type: import("vue").PropType<(node: import("./src/interface").TreeNodeData) => Promise<void>>;
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
            dropNode: import("./src/interface").TreeNodeData;
            dropPosition: 0 | 1 | -1;
        }) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly filterTreeNode: {
        readonly type: import("vue").PropType<import("./src/interface").FilterTreeNode>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly searchValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly virtualListProps: {
        readonly type: import("vue").PropType<import("../virtual-list").VirtualListProps>;
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
    toggleCheck: (key: import("./src/interface").TreeNodeKey, e: Event) => void;
    scrollIntoView: (options: ScrollIntoViewOptions) => void;
    getSelectedNodes: () => (import("./src/interface").TreeNodeData | undefined)[];
    getCheckedNodes: (options?: {
        checkedStrategy?: import("./src/interface").CheckedStrategy | undefined;
        includeHalfChecked?: boolean | undefined;
    }) => (import("./src/interface").TreeNodeData | undefined)[];
    getHalfCheckedNodes: () => (import("./src/interface").TreeNodeData | undefined)[];
    getExpandedNodes: () => (import("./src/interface").TreeNodeData | undefined)[];
    checkAll: (checked?: boolean) => void;
    checkNode: (key: import("./src/interface").TreeNodeKey | import("./src/interface").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean) => void;
    selectAll: (selected?: boolean) => void;
    selectNode: (key: import("./src/interface").TreeNodeKey | import("./src/interface").TreeNodeKey[], selected?: boolean) => void;
    expandAll: (expanded?: boolean) => void;
    expandNode: (key: import("./src/interface").TreeNodeKey | import("./src/interface").TreeNodeKey[], expanded?: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    drop: (data: {
        e: DragEvent;
        dragNode: import("./src/interface").TreeNodeData;
        dropNode: import("./src/interface").TreeNodeData;
        dropPosition: number;
    }) => void;
    select: (selectedKeys: (string | number)[], data: {
        selected?: boolean | undefined;
        selectedNodes: import("./src/interface").TreeNodeData[];
        node?: import("./src/interface").TreeNodeData | undefined;
        e?: Event | undefined;
    }) => void;
    expand: (expandKeys: (string | number)[], data: {
        expanded?: boolean | undefined;
        expandedNodes: import("./src/interface").TreeNodeData[];
        node?: import("./src/interface").TreeNodeData | undefined;
        e?: Event | undefined;
    }) => void;
    dragStart: (ev: DragEvent, node: import("./src/interface").TreeNodeData) => void;
    dragOver: (ev: DragEvent, node: import("./src/interface").TreeNodeData) => void;
    dragLeave: (ev: DragEvent, node: import("./src/interface").TreeNodeData) => void;
    dragEnd: (ev: DragEvent, node: import("./src/interface").TreeNodeData) => void;
    "update:selectedKeys": (selectedKeys: (string | number)[]) => void;
    check: (checkedKeys: (string | number)[], data: {
        checked?: boolean | undefined;
        checkedNodes: import("./src/interface").TreeNodeData[];
        node?: import("./src/interface").TreeNodeData | undefined;
        halfCheckedKeys: (string | number)[];
        halfCheckedNodes: import("./src/interface").TreeNodeData[];
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
    readonly checkable: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | (() => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | ((new (...args: any[]) => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | (() => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)))[], unknown, unknown, false, boolean>;
    readonly selectable: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | (() => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | ((new (...args: any[]) => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | (() => boolean | ((node: import("./src/interface").TreeNodeData, info: {
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
    readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/interface").TreeNodeData[]) | (() => import("./src/interface").TreeNodeData[]) | ((new (...args: any[]) => import("./src/interface").TreeNodeData[]) | (() => import("./src/interface").TreeNodeData[]))[], unknown, unknown, () => never[], boolean>;
    readonly fieldNames: {
        readonly type: import("vue").PropType<import("./src/interface").TreeFieldNames>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showLine: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly loadMore: {
        readonly type: import("vue").PropType<(node: import("./src/interface").TreeNodeData) => Promise<void>>;
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
            dropNode: import("./src/interface").TreeNodeData;
            dropPosition: 0 | 1 | -1;
        }) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly filterTreeNode: {
        readonly type: import("vue").PropType<import("./src/interface").FilterTreeNode>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly searchValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly virtualListProps: {
        readonly type: import("vue").PropType<import("../virtual-list").VirtualListProps>;
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
        selectedNodes: import("./src/interface").TreeNodeData[];
        node?: import("./src/interface").TreeNodeData | undefined;
        e?: Event | undefined;
    }) => any) | undefined;
    onDrop?: ((data: {
        e: DragEvent;
        dragNode: import("./src/interface").TreeNodeData;
        dropNode: import("./src/interface").TreeNodeData;
        dropPosition: number;
    }) => any) | undefined;
    onCheck?: ((checkedKeys: (string | number)[], data: {
        checked?: boolean | undefined;
        checkedNodes: import("./src/interface").TreeNodeData[];
        node?: import("./src/interface").TreeNodeData | undefined;
        halfCheckedKeys: (string | number)[];
        halfCheckedNodes: import("./src/interface").TreeNodeData[];
        e?: Event | undefined;
    }) => any) | undefined;
    onExpand?: ((expandKeys: (string | number)[], data: {
        expanded?: boolean | undefined;
        expandedNodes: import("./src/interface").TreeNodeData[];
        node?: import("./src/interface").TreeNodeData | undefined;
        e?: Event | undefined;
    }) => any) | undefined;
    onDragStart?: ((ev: DragEvent, node: import("./src/interface").TreeNodeData) => any) | undefined;
    onDragEnd?: ((ev: DragEvent, node: import("./src/interface").TreeNodeData) => any) | undefined;
    onDragOver?: ((ev: DragEvent, node: import("./src/interface").TreeNodeData) => any) | undefined;
    onDragLeave?: ((ev: DragEvent, node: import("./src/interface").TreeNodeData) => any) | undefined;
    "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
    "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
    "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
    "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
}, {
    readonly animation: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly multiple: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly data: import("./src/interface").TreeNodeData[];
    readonly selectable: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | (() => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | ((new (...args: any[]) => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | (() => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)))[], unknown, unknown>;
    readonly checkable: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | (() => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | ((new (...args: any[]) => boolean | ((node: import("./src/interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)) | (() => boolean | ((node: import("./src/interface").TreeNodeData, info: {
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
}, {}>> & Record<string, any>;
export default TuTree;
export * from './src/tree';
