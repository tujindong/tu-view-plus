import type { ExtractPropTypes } from 'vue';
import type Spin from './spin.vue';
export declare const spinProps: {
    size: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    loading: BooleanConstructor;
    dot: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    tip: StringConstructor;
};
export type SpinProps = ExtractPropTypes<typeof spinProps>;
export type SpinInstance = InstanceType<typeof Spin>;
