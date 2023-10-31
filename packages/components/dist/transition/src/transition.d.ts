import type { ExtractPropTypes } from 'vue';
import type Transition from './transition.vue';
export declare const transitionProps: {
    name: StringConstructor;
};
export type TransitionProps = ExtractPropTypes<typeof transitionProps>;
export type TransitionInstance = InstanceType<typeof Transition>;
