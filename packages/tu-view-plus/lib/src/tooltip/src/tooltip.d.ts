import type { ExtractPropTypes } from 'vue';
import type Tooltip from './tooltip.vue';
export declare const tooltipProps: {
    popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    content: StringConstructor;
    position: import("@tu-view-plus/utils").EpPropFinalized<PropType<TriggerPosition>, unknown, unknown, string, boolean>;
    mini: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    backgroundColor: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    contentClass: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    contentStyle: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    arrowClass: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    arrowStyle: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    popupContainer: {
        readonly type: import("vue").PropType<any>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare type TooltipProps = ExtractPropTypes<typeof tooltipProps>;
export declare type TooltipInstance = InstanceType<typeof Tooltip>;
