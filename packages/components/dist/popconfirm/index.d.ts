export declare const TuPopconfirm: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly content: StringConstructor;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown, "top", boolean>;
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
        onOk?: (() => any) | undefined;
        onCancel?: (() => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        cancel: () => void;
        "update:popupVisible": (visible: boolean) => void;
        popupVisibleChange: (visible: boolean) => void;
        ok: () => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly content: StringConstructor;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown, "top", boolean>;
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
        onOk?: (() => any) | undefined;
        onCancel?: (() => any) | undefined;
    }, {
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown>;
        readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], unknown, unknown>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly okLoading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly content: StringConstructor;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown, "top", boolean>;
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
        onOk?: (() => any) | undefined;
        onCancel?: (() => any) | undefined;
    }, {}, {}, {}, {}, {
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown>;
        readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], unknown, unknown>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly okLoading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly content: StringConstructor;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown, "top", boolean>;
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
    onOk?: (() => any) | undefined;
    onCancel?: (() => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    cancel: () => void;
    "update:popupVisible": (visible: boolean) => void;
    popupVisibleChange: (visible: boolean) => void;
    ok: () => void;
}, string, {
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown>;
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
