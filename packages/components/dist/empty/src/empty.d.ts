import type { ExtractPropTypes } from 'vue';
import type Empty from './empty.vue';
export declare const emptyProps: {
    readonly image: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly imageSize: NumberConstructor;
    readonly description: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
};
export type EmptyProps = ExtractPropTypes<typeof emptyProps>;
export type EmptyInstance = InstanceType<typeof Empty>;
