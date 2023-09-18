import type { ExtractPropTypes, PropType } from 'vue';
import type Divider from './divider.vue';
export declare const dividerProps: {
    direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("horizontal" | "vertical") & {}) | (() => "horizontal" | "vertical") | ((new (...args: any[]) => ("horizontal" | "vertical") & {}) | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
    orientation: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("left" | "right" | "center") & {}) | (() => "left" | "right" | "center") | ((new (...args: any[]) => ("left" | "right" | "center") & {}) | (() => "left" | "right" | "center"))[], unknown, unknown, string, boolean>;
    type: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ("dashed" | "dotted" | "double" | "solid") & {}) | (() => "dashed" | "dotted" | "double" | "solid") | ((new (...args: any[]) => ("dashed" | "dotted" | "double" | "solid") & {}) | (() => "dashed" | "dotted" | "double" | "solid"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    margin: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare type DividerProps = ExtractPropTypes<typeof dividerProps>;
export declare type DividerInstance = InstanceType<typeof Divider>;
