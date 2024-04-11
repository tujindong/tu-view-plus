import type { ExtractPropTypes } from 'vue';
export declare const layoutProps: {
    readonly hasSider: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type LayoutProps = ExtractPropTypes<typeof layoutProps>;
