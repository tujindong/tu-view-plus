export declare const TuTrigger: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
    popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown, string, boolean>;
    position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown, string, boolean>;
    disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    popupOffset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    popupTranslate: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => [number, number] | {
            br?: [number, number] | undefined;
            rt?: [number, number] | undefined;
            tr?: [number, number] | undefined;
            bottom?: [number, number] | undefined;
            left?: [number, number] | undefined;
            right?: [number, number] | undefined;
            top?: [number, number] | undefined;
            rb?: [number, number] | undefined;
            tl?: [number, number] | undefined;
            bl?: [number, number] | undefined;
            lt?: [number, number] | undefined;
            lb?: [number, number] | undefined;
        }) | (() => import("./src/trigger").TriggerPopupTranslate) | ((new (...args: any[]) => [number, number] | {
            br?: [number, number] | undefined;
            rt?: [number, number] | undefined;
            tr?: [number, number] | undefined;
            bottom?: [number, number] | undefined;
            left?: [number, number] | undefined;
            right?: [number, number] | undefined;
            top?: [number, number] | undefined;
            rb?: [number, number] | undefined;
            tl?: [number, number] | undefined;
            bl?: [number, number] | undefined;
            lt?: [number, number] | undefined;
            lb?: [number, number] | undefined;
        }) | (() => import("./src/trigger").TriggerPopupTranslate))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    showArrow: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    alignPoint: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    popupHoverStay: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    blurToClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    clickToClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    clickOutsideToClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    unmountOnClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    contentClass: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(ArrayConstructor | ObjectConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    contentStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    arrowClass: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(ArrayConstructor | ObjectConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    arrowStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    popupStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    animationName: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    duration: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | {
            enter: number;
            leave: number;
        }) | (() => number | {
            enter: number;
            leave: number;
        }) | ((new (...args: any[]) => number | {
            enter: number;
            leave: number;
        }) | (() => number | {
            enter: number;
            leave: number;
        }))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    mouseEnterDelay: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    mouseLeaveDelay: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    focusDelay: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    autoFitPopupWidth: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    autoFitPopupMinWidth: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    autoFixPosition: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    popupContainer: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    updateAtScroll: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    autoFitTransformOrigin: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    hideEmpty: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    openedClass: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(ArrayConstructor | ObjectConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    autoFitPosition: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    renderToBody: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    preventFocus: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    size: {
        default: string;
        type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:popupVisible': (visible: boolean) => boolean;
    popupVisibleChange: (visible: boolean) => boolean;
    show: () => boolean;
    hide: () => boolean;
    resize: () => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown, string, boolean>;
    position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown, string, boolean>;
    disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    popupOffset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    popupTranslate: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => [number, number] | {
            br?: [number, number] | undefined;
            rt?: [number, number] | undefined;
            tr?: [number, number] | undefined;
            bottom?: [number, number] | undefined;
            left?: [number, number] | undefined;
            right?: [number, number] | undefined;
            top?: [number, number] | undefined;
            rb?: [number, number] | undefined;
            tl?: [number, number] | undefined;
            bl?: [number, number] | undefined;
            lt?: [number, number] | undefined;
            lb?: [number, number] | undefined;
        }) | (() => import("./src/trigger").TriggerPopupTranslate) | ((new (...args: any[]) => [number, number] | {
            br?: [number, number] | undefined;
            rt?: [number, number] | undefined;
            tr?: [number, number] | undefined;
            bottom?: [number, number] | undefined;
            left?: [number, number] | undefined;
            right?: [number, number] | undefined;
            top?: [number, number] | undefined;
            rb?: [number, number] | undefined;
            tl?: [number, number] | undefined;
            bl?: [number, number] | undefined;
            lt?: [number, number] | undefined;
            lb?: [number, number] | undefined;
        }) | (() => import("./src/trigger").TriggerPopupTranslate))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    showArrow: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    alignPoint: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    popupHoverStay: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    blurToClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    clickToClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    clickOutsideToClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    unmountOnClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    contentClass: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(ArrayConstructor | ObjectConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    contentStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    arrowClass: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(ArrayConstructor | ObjectConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    arrowStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    popupStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    animationName: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    duration: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | {
            enter: number;
            leave: number;
        }) | (() => number | {
            enter: number;
            leave: number;
        }) | ((new (...args: any[]) => number | {
            enter: number;
            leave: number;
        }) | (() => number | {
            enter: number;
            leave: number;
        }))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    mouseEnterDelay: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    mouseLeaveDelay: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    focusDelay: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    autoFitPopupWidth: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    autoFitPopupMinWidth: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    autoFixPosition: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    popupContainer: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    updateAtScroll: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    autoFitTransformOrigin: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    hideEmpty: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    openedClass: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(ArrayConstructor | ObjectConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    autoFitPosition: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    renderToBody: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    preventFocus: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    size: {
        default: string;
        type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & {
    onResize?: (() => any) | undefined;
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    onHide?: (() => any) | undefined;
    onShow?: (() => any) | undefined;
}, {
    disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    animationName: string;
    position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown>;
    size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown>;
    renderToBody: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    unmountOnClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    popupOffset: number;
    showArrow: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    alignPoint: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    popupHoverStay: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    blurToClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    clickToClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    clickOutsideToClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    focusDelay: number;
    autoFitPopupWidth: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    autoFitPopupMinWidth: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    autoFixPosition: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    updateAtScroll: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    autoFitTransformOrigin: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    hideEmpty: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    autoFitPosition: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    preventFocus: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>> & Record<string, any>;
export * from './src/trigger';
