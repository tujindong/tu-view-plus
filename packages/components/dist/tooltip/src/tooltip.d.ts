import { CSSProperties } from 'vue';
import { ClassName } from '@tu-view-plus/utils';
import type { ExtractPropTypes, PropType } from 'vue';
import type Tooltip from './tooltip.vue';
export declare const tooltipProps: {
    popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    content: StringConstructor;
    position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | ((new (...args: any[]) => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb") | (() => "br" | "rt" | "tr" | "bottom" | "left" | "right" | "top" | "rb" | "tl" | "bl" | "lt" | "lb"))[], unknown, unknown, string, boolean>;
    size: {
        default: string;
        type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "large" | "medium", never>>;
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
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => ClassName) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => ClassName))[], unknown, unknown>>;
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
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => ClassName) | ((new (...args: any[]) => string | Record<string, boolean> | (string | Record<string, boolean>)[]) | (() => ClassName))[], unknown, unknown>>;
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
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
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
export type TooltipProps = ExtractPropTypes<typeof tooltipProps>;
export type TooltipInstance = InstanceType<typeof Tooltip>;
export type TooltipEmits = typeof tooltipEmits;
