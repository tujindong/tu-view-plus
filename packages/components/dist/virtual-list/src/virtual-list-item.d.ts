import type { ExtractPropTypes } from 'vue';
export declare const virtualListItemProps: {
    readonly hasItemSize: {
        readonly type: import("vue").PropType<Function>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly setItemSize: {
        readonly type: import("vue").PropType<Function>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type VirtualListItemProps = ExtractPropTypes<typeof virtualListItemProps>;
