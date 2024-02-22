declare const _default: import("vue").DefineComponent<{
    readonly loading: BooleanConstructor;
    readonly showLine: BooleanConstructor;
    readonly treeNodeData: {
        readonly type: import("vue").PropType<import("./interface").TreeNodeData>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly icons: {
        readonly type: import("vue").PropType<Record<string, (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | undefined>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly nodeStatus: {
        readonly type: import("vue").PropType<{
            loading?: boolean | undefined;
            checked?: boolean | undefined;
            selected?: boolean | undefined;
            expanded?: boolean | undefined;
            indeterminate?: boolean | undefined;
            isLeaf?: boolean | undefined;
        }>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {
    getSwitcherIcon: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined;
    getLoadingIcon: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined;
    onClick(e: Event): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly loading: BooleanConstructor;
    readonly showLine: BooleanConstructor;
    readonly treeNodeData: {
        readonly type: import("vue").PropType<import("./interface").TreeNodeData>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly icons: {
        readonly type: import("vue").PropType<Record<string, (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | undefined>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly nodeStatus: {
        readonly type: import("vue").PropType<{
            loading?: boolean | undefined;
            checked?: boolean | undefined;
            selected?: boolean | undefined;
            expanded?: boolean | undefined;
            indeterminate?: boolean | undefined;
            isLeaf?: boolean | undefined;
        }>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    readonly loading: boolean;
    readonly showLine: boolean;
}, {}>;
export default _default;
