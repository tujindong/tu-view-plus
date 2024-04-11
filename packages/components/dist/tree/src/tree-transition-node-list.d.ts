import type { ExtractPropTypes, PropType } from 'vue';
import type { TreeNodeKey } from './interface';
export declare const treeTransitionNodeListProps: {
    readonly nodeKey: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => TreeNodeKey) | ((new (...args: any[]) => string | number) | (() => TreeNodeKey))[], unknown, unknown>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type TreeTransitionNodeListProps = ExtractPropTypes<typeof treeTransitionNodeListProps>;
