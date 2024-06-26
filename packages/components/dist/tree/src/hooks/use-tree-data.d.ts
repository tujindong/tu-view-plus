import { TreeFieldNames, TreeNodeData, Node, LoadMore, CheckableType, SelectableType } from '../interface';
export declare function useTreeData(props: {
    treeData: TreeNodeData[];
    fieldNames?: TreeFieldNames;
    selectable?: SelectableType;
    showLine?: boolean;
    blockNode?: boolean;
    checkable?: CheckableType;
    loadMore?: LoadMore;
    draggable?: boolean;
}): {
    treeData: import("vue").Ref<{
        key: import("../interface").TreeNodeKey;
        treeNodeProps: {
            selectable: boolean;
            disabled: boolean;
            disableCheckbox: boolean;
            checkable: boolean;
            draggable: boolean;
            isLeaf: boolean;
            isTail: boolean;
            blockNode: boolean;
            showLine: boolean;
            level: number;
            lineless: boolean[];
            title?: string | undefined;
            key?: string | number | undefined;
            icon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) | undefined;
            loadingIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) | undefined;
            switcherIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) | undefined;
            dragIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) | undefined;
        };
        treeNodeData: {
            key?: string | number | undefined;
            title?: string | undefined;
            selectable?: boolean | undefined;
            disabled?: boolean | undefined;
            disableCheckbox?: boolean | undefined;
            checkable?: boolean | undefined;
            draggable?: boolean | undefined;
            isLeaf?: boolean | undefined;
            icon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) | undefined;
            switcherIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) | undefined;
            loadingIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) | undefined;
            dragIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) | undefined;
            children?: any[] | undefined;
        };
        parent?: any | undefined;
        parentKey?: import("../interface").TreeNodeKey | undefined;
        pathParentKeys: import("../interface").TreeNodeKey[];
        children?: any[] | undefined;
        selectable: boolean;
        disabled: boolean;
        disableCheckbox: boolean;
        checkable: boolean;
        draggable: boolean;
        isLeaf: boolean;
        isTail: boolean;
        blockNode: boolean;
        showLine: boolean;
        level: number;
        lineless: boolean[];
        title?: string | undefined;
        icon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | undefined;
        loadingIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | undefined;
        switcherIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | undefined;
        dragIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | undefined;
    }[]>;
    flattenTreeData: import("vue").ComputedRef<Node[]>;
    key2TreeNode: import("vue").ComputedRef<import("../interface").Key2TreeNode>;
};
