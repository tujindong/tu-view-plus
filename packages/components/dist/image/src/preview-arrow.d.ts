import type { ExtractPropTypes } from 'vue';
import type PreviewArrow from './preview-arrow.vue';
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
export type PreviewArrowInstance = InstanceType<typeof PreviewArrow>;
