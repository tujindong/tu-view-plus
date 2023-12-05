import type { SelectOptionState } from './constants';
import type { SelectOptionProps } from './select-option';
export declare function useOption(props: SelectOptionProps, states: SelectOptionState): {
    select: import("./constants").SelectContext | undefined;
    currentLabel: import("vue").ComputedRef<string | number | boolean | Record<string, any>>;
    currentValue: import("vue").ComputedRef<true | Record<string, any> | import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
    itemSelected: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    hoverItem: () => void;
};
