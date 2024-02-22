import type { ExtractPropTypes, PropType } from 'vue';
import type TreeTransitionNodeList from './tree-transition-node-list.vue';
export declare const treeTransitionNodeListProps: {
    readonly nodeKey: {
        readonly type: PropType<any>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type TreeTransitionNodeListProps = ExtractPropTypes<typeof treeTransitionNodeListProps>;
export type TreeTransitionNodeListInstance = InstanceType<typeof TreeTransitionNodeList>;
