import type { ExtractPropTypes, PropType } from 'vue';
import type { Color } from './interface';
export declare const colorPickerControlBarProps: {
    readonly x: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly color: {
        readonly type: PropType<Color>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly colorString: StringConstructor;
    readonly type: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "alpha" | "hue") | (() => "alpha" | "hue") | ((new (...args: any[]) => "alpha" | "hue") | (() => "alpha" | "hue"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onChange: {
        readonly type: PropType<(x: number) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type ColorPickerControlBarProps = ExtractPropTypes<typeof colorPickerControlBarProps>;
