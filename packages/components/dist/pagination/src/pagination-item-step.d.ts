import type { ExtractPropTypes } from 'vue';
import type PaginationItemStep from './pagination-item-step.vue';
export declare const paginationItemStepProps: {
    readonly pages: {
        readonly type: import("vue").PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly current: {
        readonly type: import("vue").PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly type: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly simple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
};
export declare const paginationItemStepEmits: string[];
export type PaginationItemStepProps = ExtractPropTypes<typeof paginationItemStepProps>;
export type PaginationItemStepInstance = InstanceType<typeof PaginationItemStep>;
