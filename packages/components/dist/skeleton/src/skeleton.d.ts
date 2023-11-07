import type { ExtractPropTypes } from 'vue';
import type Skeleton from './skeleton.vue';
export declare const skeletonProps: {
    loading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    animation: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
};
export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;
export type SkeletonInstance = InstanceType<typeof Skeleton>;
