import type { ExtractPropTypes } from 'vue';
import type Empty from './empty.vue';
export declare const emptyProps: {
    readonly description: StringConstructor;
};
export declare type EmptyProps = ExtractPropTypes<typeof emptyProps>;
export declare type EmptyInstance = InstanceType<typeof Empty>;
