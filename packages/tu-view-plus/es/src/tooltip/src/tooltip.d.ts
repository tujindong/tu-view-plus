import type { ExtractPropTypes } from 'vue';
import type Tooltip from './tooltip.vue';
export declare const tooltipProps: {
    type: {
        readonly type: import("vue").PropType<{
            type: unknown;
            required: true;
        }>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare type TooltipProps = ExtractPropTypes<typeof tooltipProps>;
export declare type TooltipInstance = InstanceType<typeof Tooltip>;
