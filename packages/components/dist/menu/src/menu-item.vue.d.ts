declare const _default: import("vue").DefineComponent<{
    readonly key: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}, {
    menuContext: Partial<Readonly<Pick<import("./interface").InternalMenuProps, "mode" | "triggerProps" | "popupMaxHeight" | "levelIndent" | "autoScrollIntoView" | "scrollConfig" | "inTrigger" | "tooltipProps"> & {
        selectedKeys: string[];
        openKeys: string[];
        collapsed: boolean;
        expandIconDown?: (() => import("vue").VNodeTypes) | undefined;
        expandIconRight?: (() => import("vue").VNodeTypes) | undefined;
        onSubMenuClick?: ((key: string, level: number) => void) | undefined;
        onMenuItemClick?: ((key: string) => void) | undefined;
    }>>;
    level: import("vue").ComputedRef<number>;
    isSelected: import("vue").ComputedRef<boolean>;
    refItemElement: import("vue").Ref<HTMLDivElement | undefined>;
    onClick(e: MouseEvent): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly key: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>;
export default _default;
