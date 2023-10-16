import type { ExtractPropTypes, PropType } from 'vue';
import type TimelineItem from './timeline-item.vue';
export declare const timelineItemProps: {
    dotColor: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    dotType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("solid" | "hollow") & {}) | (() => "solid" | "hollow") | ((new (...args: any[]) => ("solid" | "hollow") & {}) | (() => "solid" | "hollow"))[], unknown, unknown, string, boolean>;
    lineType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("dashed" | "dotted" | "solid") & {}) | (() => "dashed" | "dotted" | "solid") | ((new (...args: any[]) => ("dashed" | "dotted" | "solid") & {}) | (() => "dashed" | "dotted" | "solid"))[], unknown, unknown, string, boolean>;
    lineColor: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    label: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    position: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ("top" | "bottom" | "left" | "right") & {}) | (() => "top" | "bottom" | "left" | "right") | ((new (...args: any[]) => ("top" | "bottom" | "left" | "right") & {}) | (() => "top" | "bottom" | "left" | "right"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>;
export declare type TimelineItemInstance = InstanceType<typeof TimelineItem>;
