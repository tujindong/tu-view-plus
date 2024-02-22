import type { ExtractPropTypes } from 'vue';
import type TreeExpandTransition from './tree-expand-transition.vue';
export declare const treeExpandTransitionProps: {
    readonly expanded: BooleanConstructor;
};
export declare const treeExpandTransitionEmits: string[];
export type TreeExpandTransitionProps = ExtractPropTypes<typeof treeExpandTransitionProps>;
export type TreeExpandTransitionInstance = InstanceType<typeof TreeExpandTransition>;
