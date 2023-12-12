export declare const TuDrawer: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
            readonly width: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
            readonly mask: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly visible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly footer: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly header: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly popupContainer: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>;
            readonly closable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly unmountOnClose: boolean;
            readonly renderToBody: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly placement: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top"))[], unknown, unknown>;
            readonly maskClosable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly okLoading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly escToClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly hideCancel: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }> & Omit<{
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
            readonly width: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
            readonly mask: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly visible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly footer: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly header: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly popupContainer: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>;
            readonly closable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly unmountOnClose: boolean;
            readonly renderToBody: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly placement: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top"))[], unknown, unknown>;
            readonly maskClosable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly okLoading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly escToClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly hideCancel: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly title?: string | undefined;
            readonly okButtonProps?: import("../button").ButtonProps | undefined;
            readonly cancelButtonProps?: import("../button").ButtonProps | undefined;
            readonly drawerStyle?: import("vue").CSSProperties | undefined;
            readonly onBeforeOk?: ((done: (closed: boolean) => void) => boolean | void | Promise<boolean | void>) | undefined;
            readonly onBeforeCancel?: (() => boolean) | undefined;
            readonly okText?: string | undefined;
            readonly cancelText?: string | undefined;
            onClose?: (() => any) | undefined;
            onCancel?: ((e: Event) => any) | undefined;
            onOk?: ((e: Event) => any) | undefined;
            onOpen?: (() => any) | undefined;
            "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
            onBeforeOpen?: (() => any) | undefined;
            onBeforeClose?: (() => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly visible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly defaultVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly placement: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top"))[], unknown, unknown, "right", boolean>;
            readonly title: StringConstructor;
            readonly mask: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly maskClosable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly closable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly okText: StringConstructor;
            readonly cancelText: StringConstructor;
            readonly okLoading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly okButtonProps: {
                readonly type: import("vue").PropType<import("../button").ButtonProps>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly cancelButtonProps: {
                readonly type: import("vue").PropType<import("../button").ButtonProps>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly unmountOnClose: BooleanConstructor;
            readonly width: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 250, boolean>;
            readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 250, boolean>;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly popupContainer: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
            readonly drawerStyle: {
                readonly type: import("vue").PropType<import("vue").CSSProperties>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly onBeforeOk: {
                readonly type: import("vue").PropType<(done: (closed: boolean) => void) => boolean | void | Promise<boolean | void>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly onBeforeCancel: {
                readonly type: import("vue").PropType<() => boolean>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly escToClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly renderToBody: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly header: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly footer: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly hideCancel: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        }>> & {
            onClose?: (() => any) | undefined;
            onCancel?: ((e: Event) => any) | undefined;
            onOk?: ((e: Event) => any) | undefined;
            onOpen?: (() => any) | undefined;
            "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
            onBeforeOpen?: (() => any) | undefined;
            onBeforeClose?: (() => any) | undefined;
        }, "height" | "width" | "mask" | "visible" | "size" | "footer" | "header" | "popupContainer" | "closable" | "unmountOnClose" | "renderToBody" | "defaultVisible" | "placement" | "maskClosable" | "okLoading" | "escToClose" | "hideCancel">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "open") => void) & ((event: "cancel", e: Event) => void) & ((event: "close") => void) & ((event: "update:visible", visible: boolean) => void) & ((event: "ok", e: Event) => void) & ((event: "beforeOpen") => void) & ((event: "beforeClose") => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly visible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly defaultVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly placement: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top"))[], unknown, unknown, "right", boolean>;
            readonly title: StringConstructor;
            readonly mask: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly maskClosable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly closable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly okText: StringConstructor;
            readonly cancelText: StringConstructor;
            readonly okLoading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly okButtonProps: {
                readonly type: import("vue").PropType<import("../button").ButtonProps>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly cancelButtonProps: {
                readonly type: import("vue").PropType<import("../button").ButtonProps>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly unmountOnClose: BooleanConstructor;
            readonly width: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 250, boolean>;
            readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 250, boolean>;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly popupContainer: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
            readonly drawerStyle: {
                readonly type: import("vue").PropType<import("vue").CSSProperties>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly onBeforeOk: {
                readonly type: import("vue").PropType<(done: (closed: boolean) => void) => boolean | void | Promise<boolean | void>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly onBeforeCancel: {
                readonly type: import("vue").PropType<() => boolean>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly escToClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly renderToBody: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly header: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly footer: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly hideCancel: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        }>> & {
            onClose?: (() => any) | undefined;
            onCancel?: ((e: Event) => any) | undefined;
            onOk?: ((e: Event) => any) | undefined;
            onOpen?: (() => any) | undefined;
            "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
            onBeforeOpen?: (() => any) | undefined;
            onBeforeClose?: (() => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            open: () => void;
            cancel: (e: Event) => void;
            close: () => void;
            "update:visible": (visible: boolean) => void;
            ok: (e: Event) => void;
            beforeOpen: () => void;
            beforeClose: () => void;
        }, string, {
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
            readonly width: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
            readonly mask: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly visible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly footer: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly header: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly popupContainer: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>;
            readonly closable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly unmountOnClose: boolean;
            readonly renderToBody: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly placement: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top"))[], unknown, unknown>;
            readonly maskClosable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly okLoading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly escToClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly hideCancel: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        readonly visible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly defaultVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly placement: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top"))[], unknown, unknown, "right", boolean>;
        readonly title: StringConstructor;
        readonly mask: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly maskClosable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly closable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly okText: StringConstructor;
        readonly cancelText: StringConstructor;
        readonly okLoading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly okButtonProps: {
            readonly type: import("vue").PropType<import("../button").ButtonProps>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly cancelButtonProps: {
            readonly type: import("vue").PropType<import("../button").ButtonProps>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly unmountOnClose: BooleanConstructor;
        readonly width: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 250, boolean>;
        readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 250, boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly popupContainer: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
        readonly drawerStyle: {
            readonly type: import("vue").PropType<import("vue").CSSProperties>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly onBeforeOk: {
            readonly type: import("vue").PropType<(done: (closed: boolean) => void) => boolean | void | Promise<boolean | void>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly onBeforeCancel: {
            readonly type: import("vue").PropType<() => boolean>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly escToClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly renderToBody: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly header: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly footer: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly hideCancel: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    }>> & {
        onClose?: (() => any) | undefined;
        onCancel?: ((e: Event) => any) | undefined;
        onOk?: ((e: Event) => any) | undefined;
        onOpen?: (() => any) | undefined;
        "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
        onBeforeOpen?: (() => any) | undefined;
        onBeforeClose?: (() => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly visible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly defaultVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly placement: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top"))[], unknown, unknown, "right", boolean>;
    readonly title: StringConstructor;
    readonly mask: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly maskClosable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly closable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly okText: StringConstructor;
    readonly cancelText: StringConstructor;
    readonly okLoading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly okButtonProps: {
        readonly type: import("vue").PropType<import("../button").ButtonProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly cancelButtonProps: {
        readonly type: import("vue").PropType<import("../button").ButtonProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly unmountOnClose: BooleanConstructor;
    readonly width: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 250, boolean>;
    readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 250, boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly popupContainer: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
    readonly drawerStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onBeforeOk: {
        readonly type: import("vue").PropType<(done: (closed: boolean) => void) => boolean | void | Promise<boolean | void>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onBeforeCancel: {
        readonly type: import("vue").PropType<() => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly escToClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly renderToBody: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly header: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly footer: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly hideCancel: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}>> & {
    onClose?: (() => any) | undefined;
    onCancel?: ((e: Event) => any) | undefined;
    onOk?: ((e: Event) => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
    onBeforeOpen?: (() => any) | undefined;
    onBeforeClose?: (() => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    open: () => void;
    cancel: (e: Event) => void;
    close: () => void;
    "update:visible": (visible: boolean) => void;
    ok: (e: Event) => void;
    beforeOpen: () => void;
    beforeClose: () => void;
}, string, {
    readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
    readonly width: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
    readonly mask: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly visible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly footer: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly header: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly popupContainer: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>;
    readonly closable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly unmountOnClose: boolean;
    readonly renderToBody: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly placement: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top"))[], unknown, unknown>;
    readonly maskClosable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly okLoading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly escToClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly hideCancel: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        header?(_: {}): any;
        title?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TuDrawerBox: import("@tu-view-plus/utils").SFCInstallWithContext<import("./src/interface").DrawerMethod>;
export default TuDrawer;
export * from './src/drawer';
