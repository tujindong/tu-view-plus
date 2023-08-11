import type { ExtractPropTypes, PropType } from 'vue';
export declare const sliderMarksProps: {
    readonly marks: {
        readonly type: PropType<{
            key: number;
            content?: string | undefined;
        }[]>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly min: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly max: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("horizontal" | "vertical") & {}) | (() => "horizontal" | "vertical") | ((new (...args: any[]) => ("horizontal" | "vertical") & {}) | (() => "horizontal" | "vertical"))[], unknown, unknown, "horizontal", boolean>;
};
export declare type SliderMarksProps = ExtractPropTypes<typeof sliderMarksProps>;
