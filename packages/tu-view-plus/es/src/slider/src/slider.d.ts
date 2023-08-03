import { Arrayable } from '@tu-view-plus/utils';
import type { ExtractPropTypes, PropType } from 'vue';
import type Slider from './slider.vue';
import type { MarkerProps } from './marker';
declare type Marks = Record<number, string | MarkerProps['mark']>;
export interface SliderInitData {
    firstValue: number;
    secondValue: number;
    oldValue?: Arrayable<number>;
    dragging: boolean;
    sliderSize: number;
}
export declare const sliderProps: {
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (number | [number, number]) & {}) | (() => number | [number, number]) | ((new (...args: any[]) => (number | [number, number]) & {}) | (() => number | [number, number]))[], unknown, unknown, 0, boolean>;
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly step: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    readonly min: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly max: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 100, boolean>;
    readonly showInput: BooleanConstructor;
    readonly showInputControls: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly inputSize: {
        readonly default: "medium";
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly showStops: BooleanConstructor;
    readonly showTooltip: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly formatTooltip: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (val: number) => number | string) | (() => (val: number) => number | string) | {
        (): (val: number) => number | string;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (val: number) => number | string) | (() => (val: number) => number | string) | {
        (): (val: number) => number | string;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, undefined, boolean>;
    readonly disabled: BooleanConstructor;
    readonly range: BooleanConstructor;
    readonly vertical: BooleanConstructor;
    readonly height: StringConstructor;
    readonly debounce: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 300, boolean>;
    readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly rangeStartLabel: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly rangeEndLabel: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly formatValueText: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (val: number) => string) | (() => (val: number) => string) | {
        (): (val: number) => string;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (val: number) => string) | (() => (val: number) => string) | {
        (): (val: number) => string;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, undefined, boolean>;
    readonly tooltipClass: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly placement: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb", unknown, "top", boolean>;
    readonly marks: {
        readonly type: PropType<Marks>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
export declare type SliderProps = ExtractPropTypes<typeof sliderProps>;
export declare type SliderInstance = InstanceType<typeof Slider>;
export {};
