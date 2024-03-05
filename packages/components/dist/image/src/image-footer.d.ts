import type { ExtractPropTypes } from 'vue';
import type ImageFooter from './image-footer.vue';
export declare const imageFooterProps: {
    title: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    description: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type ImageFooterProps = ExtractPropTypes<typeof imageFooterProps>;
export type ImageFooterInstance = InstanceType<typeof ImageFooter>;
