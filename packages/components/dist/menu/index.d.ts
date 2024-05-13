export declare const TuMenu: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "pop" | "horizontal" | "vertical" | "popButton") | (() => "pop" | "horizontal" | "vertical" | "popButton") | ((new (...args: any[]) => "pop" | "horizontal" | "vertical" | "popButton") | (() => "pop" | "horizontal" | "vertical" | "popButton"))[], unknown, unknown, "vertical", boolean>;
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "" | "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "" | "flat" | "inset" | "outset" | "bordered" | "outlined") | ((new (...args: any[]) => "" | "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "" | "flat" | "inset" | "outset" | "bordered" | "outlined"))[], "" | "flat" | "inset" | "outset" | "bordered" | "outlined", unknown, "outset", boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "pop" | "horizontal" | "vertical" | "popButton") | (() => "pop" | "horizontal" | "vertical" | "popButton") | ((new (...args: any[]) => "pop" | "horizontal" | "vertical" | "popButton") | (() => "pop" | "horizontal" | "vertical" | "popButton"))[], unknown, unknown, "vertical", boolean>;
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "" | "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "" | "flat" | "inset" | "outset" | "bordered" | "outlined") | ((new (...args: any[]) => "" | "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "" | "flat" | "inset" | "outset" | "bordered" | "outlined"))[], "" | "flat" | "inset" | "outset" | "bordered" | "outlined", unknown, "outset", boolean>;
}>>, {
    readonly mode: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "pop" | "horizontal" | "vertical" | "popButton") | (() => "pop" | "horizontal" | "vertical" | "popButton") | ((new (...args: any[]) => "pop" | "horizontal" | "vertical" | "popButton") | (() => "pop" | "horizontal" | "vertical" | "popButton"))[], unknown, unknown>;
    readonly effect: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "" | "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "" | "flat" | "inset" | "outset" | "bordered" | "outlined") | ((new (...args: any[]) => "" | "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "" | "flat" | "inset" | "outset" | "bordered" | "outlined"))[], "" | "flat" | "inset" | "outset" | "bordered" | "outlined", unknown>;
}, {}>> & Record<string, any>;
export declare const TuMenuItem: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly key: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}, {
    menuContext: Partial<Readonly<Pick<import("./src/interface").InternalMenuProps, "mode" | "triggerProps" | "popupMaxHeight" | "levelIndent" | "autoScrollIntoView" | "scrollConfig" | "inTrigger" | "tooltipProps"> & {
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
}, {}>> & Record<string, any>;
export declare const TuMenuItemGroup: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>>, {
        readonly [x: number]: string;
    } | {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>>, {}, {}, {}, {}, {
        readonly [x: number]: string;
    } | {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly [x: number]: string;
} | {}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TuSubMenu: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly key: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly title: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly selectable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly popup: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((level: number) => boolean)) | (() => boolean | ((level: number) => boolean)) | ((new (...args: any[]) => boolean | ((level: number) => boolean)) | (() => boolean | ((level: number) => boolean)))[], unknown, unknown, false, boolean>;
    readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | boolean) | (() => number | boolean) | ((new (...args: any[]) => number | boolean) | (() => number | boolean))[], unknown, unknown, undefined, boolean>;
}, {
    subMenuKeys: import("vue").ComputedRef<string[]>;
    menuItemKeys: import("vue").ComputedRef<string[]>;
    isChildrenSelected: import("vue").ComputedRef<boolean>;
    props: import("./src/sub-menu").SubMenuProps;
    attrs: {
        [x: string]: unknown;
    };
    computedKey: import("vue").ComputedRef<string>;
    computedPopup: import("vue").ComputedRef<boolean>;
    expandIconDown: import("vue").Ref<(() => import("vue").VNodeTypes) | undefined>;
    expandIconRight: import("vue").Ref<(() => import("vue").VNodeTypes) | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly key: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly title: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly selectable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly popup: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((level: number) => boolean)) | (() => boolean | ((level: number) => boolean)) | ((new (...args: any[]) => boolean | ((level: number) => boolean)) | (() => boolean | ((level: number) => boolean)))[], unknown, unknown, false, boolean>;
    readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | boolean) | (() => number | boolean) | ((new (...args: any[]) => number | boolean) | (() => number | boolean))[], unknown, unknown, undefined, boolean>;
}>>, {
    readonly popup: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((level: number) => boolean)) | (() => boolean | ((level: number) => boolean)) | ((new (...args: any[]) => boolean | ((level: number) => boolean)) | (() => boolean | ((level: number) => boolean)))[], unknown, unknown>;
    readonly popupMaxHeight: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | boolean) | (() => number | boolean) | ((new (...args: any[]) => number | boolean) | (() => number | boolean))[], unknown, unknown>;
    readonly selectable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>> & Record<string, any>;
export default TuMenu;
export * from './src/menu';
