import type { ExtractPropTypes, PropType } from 'vue';
import type Slider from './slider.vue';
export declare const sliderProps: {
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | [number, number]) | (() => number | [number, number]) | ((new (...args: any[]) => number | [number, number]) | (() => number | [number, number]))[], unknown, unknown, undefined, boolean>;
    readonly defaultValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | [number, number]) | (() => number | [number, number]) | ((new (...args: any[]) => number | [number, number]) | (() => number | [number, number]))[], unknown, unknown, 0, boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly step: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    readonly min: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly marks: {
        readonly type: PropType<Record<number, string>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly max: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 100, boolean>;
    readonly direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, "horizontal", boolean>;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showTicks: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showInput: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly range: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly formatTooltip: {
        readonly type: PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showTooltip: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
export declare const sliderEmits: {
    "update:modelValue": (value: number | [
        number,
        number
    ]) => boolean;
    change: (value: number | [
        number,
        number
    ]) => boolean;
};
export type SliderProps = ExtractPropTypes<typeof sliderProps>;
export type SliderInstance = InstanceType<typeof Slider>;
export type SliderEmits = typeof sliderEmits;
