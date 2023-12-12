import type { FilterOption, SelectOption, SelectOptionInfo, SelectFieldNames } from './interface';
import type { Ref } from 'vue';
export declare const useOptions: ({ options, extraOptions, inputValue, filterOption, showExtraOptions, valueKey, fieldNames }: {
    options?: Ref<SelectOption[]> | undefined;
    extraOptions?: Ref<SelectOption[]> | undefined;
    inputValue?: Ref<string> | undefined;
    filterOption?: Ref<FilterOption> | undefined;
    showExtraOptions?: Ref<boolean> | undefined;
    valueKey?: Ref<string> | undefined;
    fieldNames?: Ref<import("@tu-view-plus/utils").FieldString<import("./interface").SelectOptionData> | undefined> | undefined;
}) => {
    validOptions: import("vue").ComputedRef<(SelectOptionInfo | import("./interface").SelectOptionGroupInfo)[]>;
    optionInfoMap: Map<string, {
        [x: string]: any;
        raw: Record<string, unknown>;
        key: string;
        index?: number | undefined;
        origin: "slot" | "options" | "extraOptions";
        value: import("./interface").SelectOptionValue;
        label: string;
        disabled?: boolean | undefined;
        render?: import("vue").RenderFunction | undefined;
    }>;
    validOptionInfos: import("vue").ComputedRef<{
        [x: string]: any;
        raw: Record<string, unknown>;
        key: string;
        index?: number | undefined;
        origin: "slot" | "options" | "extraOptions";
        value: import("./interface").SelectOptionValue;
        label: string;
        disabled?: boolean | undefined;
        render?: import("vue").RenderFunction | undefined;
    }[]>;
    enabledOptionKeys: import("vue").ComputedRef<string[]>;
    getNextSlotOptionIndex: () => number;
    addSlotOptionInfo: (id: number, optionInfo: SelectOptionInfo) => void;
    removeSlotOptionInfo: (id: number) => void;
};
