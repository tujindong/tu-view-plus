import { FallbackOption, LabelValue, TreeSelectValue } from '../interface';
import { Key2TreeNode, TreeFieldNames, TreeNodeKey } from '../../../tree/src/interface';
export declare function useSelectedState(props: {
    defaultValue?: TreeSelectValue;
    modelValue?: TreeSelectValue;
    key2TreeNode: Key2TreeNode;
    multiple?: boolean;
    treeCheckable?: boolean;
    treeCheckStrictly?: boolean;
    fallbackOption?: FallbackOption;
    fieldNames?: TreeFieldNames;
}): {
    selectedKeys: import("vue").ComputedRef<TreeNodeKey[]>;
    selectedValue: import("vue").ComputedRef<LabelValue[]>;
    setLocalSelectedKeys(keys: TreeNodeKey[]): void;
    localSelectedKeys: import("vue").Ref<TreeNodeKey[]>;
    localSelectedValue: import("vue").Ref<{
        value: TreeNodeKey;
        label: string | number;
    }[]>;
};
