import type { ExtractPropTypes, PropType } from 'vue';
export declare const colorPickerInputAlphaProps: {
    readonly value: {
        readonly type: PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly onChange: {
        readonly type: PropType<(value: number) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type ColorPickerInputAlphaProps = ExtractPropTypes<typeof colorPickerInputAlphaProps>;
