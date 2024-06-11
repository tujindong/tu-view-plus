import type { ExtractPropTypes, PropType } from 'vue';
import type { Color, HSV } from './interface';
export declare const colorPickerInputRgbProps: {
    readonly color: {
        readonly type: PropType<Color>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly alpha: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly disabledAlpha: BooleanConstructor;
    readonly onHsvChange: {
        readonly type: PropType<(value: HSV) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onAlphaChange: {
        readonly type: PropType<(value: number) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type ColorPickerInputRgbProps = ExtractPropTypes<typeof colorPickerInputRgbProps>;
