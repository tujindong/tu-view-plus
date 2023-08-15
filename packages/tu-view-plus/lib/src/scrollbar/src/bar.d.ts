import type { ExtractPropTypes } from 'vue';
import type Bar from './bar.vue';
export declare const barProps: {
    readonly always: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly width: StringConstructor;
    readonly height: StringConstructor;
    readonly ratioX: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    readonly ratioY: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
};
export declare type BarProps = ExtractPropTypes<typeof barProps>;
export declare type BarInstance = InstanceType<typeof Bar>;
