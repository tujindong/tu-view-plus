import type { ExtractPropTypes, PropType } from 'vue';
import type Space from './space.vue';
import { SpaceSize } from './constants';
export declare const spaceProps: {
    readonly align: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "center" | "end" | "start" | "baseline") | (() => "center" | "end" | "start" | "baseline") | ((new (...args: any[]) => "center" | "end" | "start" | "baseline") | (() => "center" | "end" | "start" | "baseline"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, "horizontal", boolean>;
    readonly size: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | "small" | "large" | "medium" | "mini" | [SpaceSize, SpaceSize]) | (() => SpaceSize | [SpaceSize, SpaceSize]) | ((new (...args: any[]) => number | "small" | "large" | "medium" | "mini" | [SpaceSize, SpaceSize]) | (() => SpaceSize | [SpaceSize, SpaceSize]))[], unknown, unknown, "small", boolean>;
    readonly wrap: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly fill: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type SpaceProps = ExtractPropTypes<typeof spaceProps>;
export type SpaceInstance = InstanceType<typeof Space>;
