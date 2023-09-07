import type { ExtractPropTypes, PropType, CSSProperties } from 'vue';
import type Popover from './popover.vue';
import type { ClassName } from '@tu-view-plus/utils';
export declare const popoverProps: {
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly title: StringConstructor;
    readonly content: StringConstructor;
    readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[]) & {}) | (() => "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[]) | ((new (...args: any[]) => ("hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[]) & {}) | (() => "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[]))[], unknown, unknown, "hover", boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb") & {}) | (() => "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb") | ((new (...args: any[]) => ("top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb") & {}) | (() => "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb"))[], unknown, unknown, "top", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly contentClass: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ClassName & {}) | (() => ClassName) | ((new (...args: any[]) => ClassName & {}) | (() => ClassName))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly contentStyle: {
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly arrowClass: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ClassName & {}) | (() => ClassName) | ((new (...args: any[]) => ClassName & {}) | (() => ClassName))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly arrowStyle: {
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popupContainer: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const popoverEmits: {
    'update:popupVisible': (visible: boolean) => boolean;
    popupVisibleChange: (visible: boolean) => boolean;
};
export declare type PopoverProps = ExtractPropTypes<typeof popoverProps>;
export declare type PopoverInstance = InstanceType<typeof Popover>;
export declare type PopoverEmits = typeof popoverEmits;
