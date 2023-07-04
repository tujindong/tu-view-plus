import { CSSProperties } from 'vue';
import { ClassName } from '@tu-view-plus/utils';
import type { ExtractPropTypes, PropType } from 'vue';
import type Tooltip from './tooltip.vue';
export declare const tooltipProps: {
    popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    content: StringConstructor;
    position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb") & {}) | (() => "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb") | ((new (...args: any[]) => ("top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb") & {}) | (() => "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb"))[], unknown, unknown, string, boolean>;
    size: {
        default: string;
        type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    backgroundColor: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    contentClass: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ClassName & {}) | (() => ClassName) | ((new (...args: any[]) => ClassName & {}) | (() => ClassName))[], unknown, unknown>>;
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
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ClassName & {}) | (() => ClassName) | ((new (...args: any[]) => ClassName & {}) | (() => ClassName))[], unknown, unknown>>;
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
    popupContainer: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const tooltipEmits: {
    'update:popupVisible': (visible: boolean) => boolean;
    /**
     * @zh 文字气泡显示状态改变时触发
     * @en Emitted when the tooltip display status changes
     * @param {boolean} visible
     */
    popupVisibleChange: (visible: boolean) => boolean;
};
export declare type TooltipProps = ExtractPropTypes<typeof tooltipProps>;
export declare type TooltipInstance = InstanceType<typeof Tooltip>;
export declare type TooltipEmits = typeof tooltipEmits;
