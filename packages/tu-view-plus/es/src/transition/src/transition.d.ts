import type { ExtractPropTypes } from 'vue';
import type Transition from './transition.vue';
export declare const transitionProps: {
    name: StringConstructor;
};
export declare type TransitionProps = ExtractPropTypes<typeof transitionProps>;
export declare type TransitionInstance = InstanceType<typeof Transition>;
