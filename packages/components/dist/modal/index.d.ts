export declare const TuModal: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly visible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly width: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly top: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly mask: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly title: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly titleAlign: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "center" | "start") | (() => "center" | "start") | ((new (...args: any[]) => "center" | "start") | (() => "center" | "start"))[], unknown, unknown, "start", boolean>;
        readonly alignCenter: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly unmountOnClose: BooleanConstructor;
        readonly maskClosable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly hideCancel: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly simple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, (props: any) => any, boolean>;
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
        readonly footer: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly renderToBody: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly popupContainer: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
        readonly maskStyle: {
            readonly type: import("vue").PropType<import("vue").CSSProperties>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly modalClass: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | any[]) | (() => string | any[]) | ((new (...args: any[]) => string | any[]) | (() => string | any[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly modalStyle: {
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
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly draggable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly fullscreen: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly maskAnimationName: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, (props: Record<string, any>) => "fade-in-standard" | "fade-modal", boolean>;
        readonly modalAnimationName: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, (props: Record<string, any>) => "zoom-in" | "zoom-modal", boolean>;
        readonly bodyClass: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | any[]) | (() => string | any[]) | ((new (...args: any[]) => string | any[]) | (() => string | any[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly bodyStyle: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly messageType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], "error" | "success" | "warning" | "info", unknown, "", boolean>;
    }>> & {
        onClose?: (() => any) | undefined;
        onOk?: ((e: Event) => any) | undefined;
        onCancel?: ((e: Event) => any) | undefined;
        onOpen?: (() => any) | undefined;
        "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
        onBeforeOpen?: (() => any) | undefined;
        onBeforeClose?: (() => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        open: () => void;
        cancel: (e: Event) => void;
        close: () => void;
        ok: (e: Event) => void;
        "update:visible": (visible: boolean) => void;
        beforeOpen: () => void;
        beforeClose: () => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly visible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly width: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly top: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly mask: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly title: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly titleAlign: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "center" | "start") | (() => "center" | "start") | ((new (...args: any[]) => "center" | "start") | (() => "center" | "start"))[], unknown, unknown, "start", boolean>;
        readonly alignCenter: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly unmountOnClose: BooleanConstructor;
        readonly maskClosable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly hideCancel: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly simple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, (props: any) => any, boolean>;
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
        readonly footer: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly renderToBody: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly popupContainer: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
        readonly maskStyle: {
            readonly type: import("vue").PropType<import("vue").CSSProperties>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly modalClass: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | any[]) | (() => string | any[]) | ((new (...args: any[]) => string | any[]) | (() => string | any[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly modalStyle: {
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
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly draggable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly fullscreen: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly maskAnimationName: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, (props: Record<string, any>) => "fade-in-standard" | "fade-modal", boolean>;
        readonly modalAnimationName: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, (props: Record<string, any>) => "zoom-in" | "zoom-modal", boolean>;
        readonly bodyClass: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | any[]) | (() => string | any[]) | ((new (...args: any[]) => string | any[]) | (() => string | any[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly bodyStyle: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly messageType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], "error" | "success" | "warning" | "info", unknown, "", boolean>;
    }>> & {
        onClose?: (() => any) | undefined;
        onOk?: ((e: Event) => any) | undefined;
        onCancel?: ((e: Event) => any) | undefined;
        onOpen?: (() => any) | undefined;
        "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
        onBeforeOpen?: (() => any) | undefined;
        onBeforeClose?: (() => any) | undefined;
    }, {
        readonly footer: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly mask: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly visible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly popupContainer: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>;
        readonly draggable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly closable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly unmountOnClose: boolean;
        readonly renderToBody: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly defaultVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly maskClosable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly okLoading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly escToClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly hideCancel: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly titleAlign: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "center" | "start") | (() => "center" | "start") | ((new (...args: any[]) => "center" | "start") | (() => "center" | "start"))[], unknown, unknown>;
        readonly alignCenter: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly simple: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly fullscreen: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly maskAnimationName: string;
        readonly modalAnimationName: string;
        readonly messageType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], "error" | "success" | "warning" | "info", unknown>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly visible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly width: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly top: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly mask: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly title: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly titleAlign: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "center" | "start") | (() => "center" | "start") | ((new (...args: any[]) => "center" | "start") | (() => "center" | "start"))[], unknown, unknown, "start", boolean>;
        readonly alignCenter: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly unmountOnClose: BooleanConstructor;
        readonly maskClosable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly hideCancel: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly simple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, (props: any) => any, boolean>;
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
        readonly footer: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly renderToBody: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly popupContainer: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
        readonly maskStyle: {
            readonly type: import("vue").PropType<import("vue").CSSProperties>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly modalClass: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | any[]) | (() => string | any[]) | ((new (...args: any[]) => string | any[]) | (() => string | any[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly modalStyle: {
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
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly draggable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly fullscreen: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly maskAnimationName: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, (props: Record<string, any>) => "fade-in-standard" | "fade-modal", boolean>;
        readonly modalAnimationName: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, (props: Record<string, any>) => "zoom-in" | "zoom-modal", boolean>;
        readonly bodyClass: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | any[]) | (() => string | any[]) | ((new (...args: any[]) => string | any[]) | (() => string | any[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly bodyStyle: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly messageType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], "error" | "success" | "warning" | "info", unknown, "", boolean>;
    }>> & {
        onClose?: (() => any) | undefined;
        onOk?: ((e: Event) => any) | undefined;
        onCancel?: ((e: Event) => any) | undefined;
        onOpen?: (() => any) | undefined;
        "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
        onBeforeOpen?: (() => any) | undefined;
        onBeforeClose?: (() => any) | undefined;
    }, {}, {}, {}, {}, {
        readonly footer: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly mask: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly visible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly popupContainer: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>;
        readonly draggable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly closable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly unmountOnClose: boolean;
        readonly renderToBody: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly defaultVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly maskClosable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly okLoading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly escToClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly hideCancel: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly titleAlign: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "center" | "start") | (() => "center" | "start") | ((new (...args: any[]) => "center" | "start") | (() => "center" | "start"))[], unknown, unknown>;
        readonly alignCenter: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly simple: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly fullscreen: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly maskAnimationName: string;
        readonly modalAnimationName: string;
        readonly messageType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], "error" | "success" | "warning" | "info", unknown>;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly visible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly width: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly top: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly mask: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly title: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly titleAlign: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "center" | "start") | (() => "center" | "start") | ((new (...args: any[]) => "center" | "start") | (() => "center" | "start"))[], unknown, unknown, "start", boolean>;
    readonly alignCenter: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly unmountOnClose: BooleanConstructor;
    readonly maskClosable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly hideCancel: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly simple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, (props: any) => any, boolean>;
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
    readonly footer: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly renderToBody: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly popupContainer: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
    readonly maskStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly modalClass: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | any[]) | (() => string | any[]) | ((new (...args: any[]) => string | any[]) | (() => string | any[]))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly modalStyle: {
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
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly draggable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly fullscreen: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly maskAnimationName: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, (props: Record<string, any>) => "fade-in-standard" | "fade-modal", boolean>;
    readonly modalAnimationName: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, (props: Record<string, any>) => "zoom-in" | "zoom-modal", boolean>;
    readonly bodyClass: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | any[]) | (() => string | any[]) | ((new (...args: any[]) => string | any[]) | (() => string | any[]))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly bodyStyle: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly messageType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], "error" | "success" | "warning" | "info", unknown, "", boolean>;
}>> & {
    onClose?: (() => any) | undefined;
    onOk?: ((e: Event) => any) | undefined;
    onCancel?: ((e: Event) => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
    onBeforeOpen?: (() => any) | undefined;
    onBeforeClose?: (() => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    open: () => void;
    cancel: (e: Event) => void;
    close: () => void;
    ok: (e: Event) => void;
    "update:visible": (visible: boolean) => void;
    beforeOpen: () => void;
    beforeClose: () => void;
}, string, {
    readonly footer: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly mask: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly visible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly popupContainer: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>;
    readonly draggable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly closable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly unmountOnClose: boolean;
    readonly renderToBody: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly maskClosable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly okLoading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly escToClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly hideCancel: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly titleAlign: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "center" | "start") | (() => "center" | "start") | ((new (...args: any[]) => "center" | "start") | (() => "center" | "start"))[], unknown, unknown>;
    readonly alignCenter: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly simple: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly fullscreen: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly maskAnimationName: string;
    readonly modalAnimationName: string;
    readonly messageType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info") | ((new (...args: any[]) => "error" | "success" | "warning" | "info") | (() => "error" | "success" | "warning" | "info"))[], "error" | "success" | "warning" | "info", unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        title?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TuModalBox: import("@tu-view-plus/utils").SFCInstallWithContext<import("./src/interface").ModalMethod>;
export default TuModalBox;
export * from './src/modal';
