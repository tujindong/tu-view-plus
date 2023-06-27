export declare const TuTrigger: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
    popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) & {}) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => ("click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) & {}) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown, string, boolean>;
    position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "tl" | "bl" | "lt" | "lb" | "rb") & {}) | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "tl" | "bl" | "lt" | "lb" | "rb") | ((new (...args: any[]) => ("br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "tl" | "bl" | "lt" | "lb" | "rb") & {}) | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "tl" | "bl" | "lt" | "lb" | "rb"))[], unknown, unknown, string, boolean>;
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
            tl?: [number, number] | undefined;
            bl?: [number, number] | undefined;
            lt?: [number, number] | undefined;
            lb?: [number, number] | undefined;
            rb?: [number, number] | undefined;
        }) | (() => import("./src/constant").TriggerPopupTranslate) | ((new (...args: any[]) => [number, number] | {
            br?: [number, number] | undefined;
            rt?: [number, number] | undefined;
            tr?: [number, number] | undefined;
            bottom?: [number, number] | undefined;
            left?: [number, number] | undefined;
            right?: [number, number] | undefined;
            top?: [number, number] | undefined;
            tl?: [number, number] | undefined;
            bl?: [number, number] | undefined;
            lt?: [number, number] | undefined;
            lb?: [number, number] | undefined;
            rb?: [number, number] | undefined;
        }) | (() => import("./src/constant").TriggerPopupTranslate))[], unknown, unknown>>;
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (number | {
            enter: number;
            leave: number;
        }) & {}) | (() => number | {
            enter: number;
            leave: number;
        }) | ((new (...args: any[]) => (number | {
            enter: number;
            leave: number;
        }) & {}) | (() => number | {
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown>>;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) & {}) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => ("click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) & {}) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown, string, boolean>;
    position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "tl" | "bl" | "lt" | "lb" | "rb") & {}) | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "tl" | "bl" | "lt" | "lb" | "rb") | ((new (...args: any[]) => ("br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "tl" | "bl" | "lt" | "lb" | "rb") & {}) | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "tl" | "bl" | "lt" | "lb" | "rb"))[], unknown, unknown, string, boolean>;
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
            tl?: [number, number] | undefined;
            bl?: [number, number] | undefined;
            lt?: [number, number] | undefined;
            lb?: [number, number] | undefined;
            rb?: [number, number] | undefined;
        }) | (() => import("./src/constant").TriggerPopupTranslate) | ((new (...args: any[]) => [number, number] | {
            br?: [number, number] | undefined;
            rt?: [number, number] | undefined;
            tr?: [number, number] | undefined;
            bottom?: [number, number] | undefined;
            left?: [number, number] | undefined;
            right?: [number, number] | undefined;
            top?: [number, number] | undefined;
            tl?: [number, number] | undefined;
            bl?: [number, number] | undefined;
            lt?: [number, number] | undefined;
            lb?: [number, number] | undefined;
            rb?: [number, number] | undefined;
        }) | (() => import("./src/constant").TriggerPopupTranslate))[], unknown, unknown>>;
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (number | {
            enter: number;
            leave: number;
        }) & {}) | (() => number | {
            enter: number;
            leave: number;
        }) | ((new (...args: any[]) => (number | {
            enter: number;
            leave: number;
        }) & {}) | (() => number | {
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown>>;
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
}>>, {
    animationName: string;
    position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ("br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "tl" | "bl" | "lt" | "lb" | "rb") & {}) | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "tl" | "bl" | "lt" | "lb" | "rb") | ((new (...args: any[]) => ("br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "tl" | "bl" | "lt" | "lb" | "rb") & {}) | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "tl" | "bl" | "lt" | "lb" | "rb"))[], unknown, unknown>;
    disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ("click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) & {}) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => ("click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) & {}) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown>;
    popupOffset: number;
    showArrow: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    alignPoint: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    popupHoverStay: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    blurToClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    clickToClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    clickOutsideToClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    unmountOnClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
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
    renderToBody: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    preventFocus: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}>> & Record<string, any>;
