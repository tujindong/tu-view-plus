import type { ExtractPropTypes, PropType } from 'vue';
import type { Color, HSV } from './interface';
export declare const colorPickerPanelProps: {
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
    readonly colorString: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly disabledAlpha: BooleanConstructor;
    readonly showHistory: BooleanConstructor;
    readonly showPreset: BooleanConstructor;
    readonly format: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "hex" | "rgb") | (() => "hex" | "rgb") | ((new (...args: any[]) => "hex" | "rgb") | (() => "hex" | "rgb"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly historyColors: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => never[], boolean>;
    readonly presetColors: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => never[], boolean>;
    readonly onAlphaChange: {
        readonly type: PropType<(alpha: number) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onHsvChange: {
        readonly type: PropType<(hsv: HSV) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type ColorPickerPanelProps = ExtractPropTypes<typeof colorPickerPanelProps>;
