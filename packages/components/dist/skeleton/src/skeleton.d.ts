import type { ExtractPropTypes } from 'vue';
import type Skeleton from './skeleton.vue';
export declare const skeletonProps: {
    readonly loading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly animation: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
};
export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;
export type SkeletonInstance = InstanceType<typeof Skeleton>;
