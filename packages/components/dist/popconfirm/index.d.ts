export declare const TuPopconfirm: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], unknown, unknown>;
            readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly okLoading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }> & Omit<{
            readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], unknown, unknown>;
            readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly okLoading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly content?: string | undefined;
            readonly popupContainer?: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>;
            readonly popupVisible?: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            readonly contentStyle?: import("vue").CSSProperties | undefined;
            readonly contentClass?: import("@tu-view-plus/utils").ClassName | undefined;
            readonly arrowClass?: import("@tu-view-plus/utils").ClassName | undefined;
            readonly arrowStyle?: import("vue").CSSProperties | undefined;
            readonly okButtonProps?: import("../button").ButtonProps | undefined;
            readonly cancelButtonProps?: import("../button").ButtonProps | undefined;
            readonly onBeforeOk?: ((done: (closed: boolean) => void) => boolean | void | Promise<boolean | void>) | undefined;
            readonly onBeforeCancel?: (() => boolean) | undefined;
            readonly okText?: string | undefined;
            readonly cancelText?: string | undefined;
            "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
            onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
            onCancel?: (() => any) | undefined;
            onOk?: (() => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly content: StringConstructor;
            readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown, "top", boolean>;
            readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
            readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], unknown, unknown, "", boolean>;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
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
            readonly contentClass: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => import("@tu-view-plus/utils").ClassName) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => import("@tu-view-plus/utils").ClassName))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly contentStyle: {
                readonly type: import("vue").PropType<import("vue").CSSProperties>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly arrowClass: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => import("@tu-view-plus/utils").ClassName) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => import("@tu-view-plus/utils").ClassName))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly arrowStyle: {
                readonly type: import("vue").PropType<import("vue").CSSProperties>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly popupContainer: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
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
        }>> & {
            "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
            onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
            onCancel?: (() => any) | undefined;
            onOk?: (() => any) | undefined;
        }, "position" | "size" | "type" | "popupVisible" | "defaultPopupVisible" | "okLoading">;
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
        $emit: ((event: "cancel") => void) & ((event: "update:popupVisible", visible: boolean) => void) & ((event: "popupVisibleChange", visible: boolean) => void) & ((event: "ok") => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly content: StringConstructor;
            readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown, "top", boolean>;
            readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
            readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], unknown, unknown, "", boolean>;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
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
            readonly contentClass: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => import("@tu-view-plus/utils").ClassName) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => import("@tu-view-plus/utils").ClassName))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly contentStyle: {
                readonly type: import("vue").PropType<import("vue").CSSProperties>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly arrowClass: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => import("@tu-view-plus/utils").ClassName) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => import("@tu-view-plus/utils").ClassName))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly arrowStyle: {
                readonly type: import("vue").PropType<import("vue").CSSProperties>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly popupContainer: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
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
        }>> & {
            "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
            onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
            onCancel?: (() => any) | undefined;
            onOk?: (() => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            cancel: () => void;
            "update:popupVisible": (visible: boolean) => void;
            popupVisibleChange: (visible: boolean) => void;
            ok: () => void;
        }, string, {
            readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], unknown, unknown>;
            readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly okLoading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
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
        readonly content: StringConstructor;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown, "top", boolean>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], unknown, unknown, "", boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
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
        readonly contentClass: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => import("@tu-view-plus/utils").ClassName) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => import("@tu-view-plus/utils").ClassName))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly contentStyle: {
            readonly type: import("vue").PropType<import("vue").CSSProperties>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly arrowClass: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => import("@tu-view-plus/utils").ClassName) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => import("@tu-view-plus/utils").ClassName))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly arrowStyle: {
            readonly type: import("vue").PropType<import("vue").CSSProperties>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly popupContainer: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
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
    }>> & {
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
        onCancel?: (() => any) | undefined;
        onOk?: (() => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly content: StringConstructor;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown, "top", boolean>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], unknown, unknown, "", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
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
    readonly contentClass: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => import("@tu-view-plus/utils").ClassName) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => import("@tu-view-plus/utils").ClassName))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly contentStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly arrowClass: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => import("@tu-view-plus/utils").ClassName) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => import("@tu-view-plus/utils").ClassName))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly arrowStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popupContainer: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
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
}>> & {
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    onCancel?: (() => any) | undefined;
    onOk?: (() => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    cancel: () => void;
    "update:popupVisible": (visible: boolean) => void;
    popupVisibleChange: (visible: boolean) => void;
    ok: () => void;
}, string, {
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "bottom" | "left" | "right" | "top" | "br" | "rt" | "tr" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown>;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], unknown, unknown>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly okLoading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        content?(_: {}): any;
    };
})> & Record<string, any>;
export default TuPopconfirm;
export * from './src/popconfirm';
