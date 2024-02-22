import { VNode } from 'vue';
import type { ExtractPropTypes, PropType } from 'vue';
import type TreeNodeSwitcher from './tree-node-switcher.vue';
import type { TreeNodeData } from './interface';
export declare const treeNodeSwitcherProps: {
    readonly loading: BooleanConstructor;
    readonly showLine: BooleanConstructor;
    readonly treeNodeData: {
        readonly type: PropType<TreeNodeData>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly icons: {
        readonly type: PropType<Record<string, (() => VNode) | undefined>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly nodeStatus: {
        readonly type: PropType<{
            loading?: boolean | undefined;
            checked?: boolean | undefined;
            selected?: boolean | undefined;
            expanded?: boolean | undefined;
            indeterminate?: boolean | undefined;
            isLeaf?: boolean | undefined;
        }>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const treeNodeSwitcherEmits: string[];
export type TreeNodeSwitcherProps = ExtractPropTypes<typeof treeNodeSwitcherProps>;
export type TreeNodeSwitcherInstance = InstanceType<typeof TreeNodeSwitcher>;
