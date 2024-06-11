import type { ExtractPropTypes, PropType } from 'vue';
import type { Color } from './interface';
export declare const colorPickerPaletteProps: {
    readonly color: {
        readonly type: PropType<Color>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onChange: {
        readonly type: PropType<(s: number, v: number) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type ColorPickerPaletteProps = ExtractPropTypes<typeof colorPickerPaletteProps>;
