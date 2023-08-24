import type { ExtractPropTypes } from 'vue';
import type Spin from './spin.vue';
export declare const spinProps: {
    size: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    loading: BooleanConstructor;
    dot: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    tip: StringConstructor;
};
export declare type SpinProps = ExtractPropTypes<typeof spinProps>;
export declare type SpinInstance = InstanceType<typeof Spin>;
