import type { ExtractPropTypes } from 'vue';
export declare const previewArrowProps: {
    onPrev: {
        readonly type: import("vue").PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onNext: {
        readonly type: import("vue").PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type PreviewArrowProps = ExtractPropTypes<typeof previewArrowProps>;
