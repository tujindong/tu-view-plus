import { TriggerPopupTranslate } from './constant';
import type { ExtractPropTypes, PropType, CSSProperties } from 'vue';
import type Trigger from './trigger';
export declare const triggerProps: {
    popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) & {}) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => ("click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) & {}) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown, string, boolean>;
    position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("bottom" | "left" | "right" | "top" | "tl" | "tr" | "bl" | "br" | "lt" | "lb" | "rt" | "rb") & {}) | (() => "bottom" | "left" | "right" | "top" | "tl" | "tr" | "bl" | "br" | "lt" | "lb" | "rt" | "rb") | ((new (...args: any[]) => ("bottom" | "left" | "right" | "top" | "tl" | "tr" | "bl" | "br" | "lt" | "lb" | "rt" | "rb") & {}) | (() => "bottom" | "left" | "right" | "top" | "tl" | "tr" | "bl" | "br" | "lt" | "lb" | "rt" | "rb"))[], unknown, unknown, string, boolean>;
    disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    popupOffset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    popupTranslate: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => [number, number] | {
            bottom?: [number, number] | undefined;
            left?: [number, number] | undefined;
            right?: [number, number] | undefined;
            top?: [number, number] | undefined;
            tl?: [number, number] | undefined;
            tr?: [number, number] | undefined;
            bl?: [number, number] | undefined;
            br?: [number, number] | undefined;
            lt?: [number, number] | undefined;
            lb?: [number, number] | undefined;
            rt?: [number, number] | undefined;
            rb?: [number, number] | undefined;
        }) | (() => TriggerPopupTranslate) | ((new (...args: any[]) => [number, number] | {
            bottom?: [number, number] | undefined;
            left?: [number, number] | undefined;
            right?: [number, number] | undefined;
            top?: [number, number] | undefined;
            tl?: [number, number] | undefined;
            tr?: [number, number] | undefined;
            bl?: [number, number] | undefined;
            br?: [number, number] | undefined;
            lt?: [number, number] | undefined;
            lb?: [number, number] | undefined;
            rt?: [number, number] | undefined;
            rb?: [number, number] | undefined;
        }) | (() => TriggerPopupTranslate))[], unknown, unknown>>;
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
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(ArrayConstructor | ObjectConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    contentStyle: {
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    arrowClass: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(ArrayConstructor | ObjectConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    arrowStyle: {
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    popupStyle: {
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    animationName: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    duration: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (number | {
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
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    updateAtScroll: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    autoFitTransformOrigin: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    hideEmpty: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    openedClass: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(ArrayConstructor | ObjectConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    autoFitPosition: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    renderToBody: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    preventFocus: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
};
export declare type TriggerInstance = InstanceType<typeof Trigger>;
export declare type TriggerProps = ExtractPropTypes<typeof triggerProps>;
