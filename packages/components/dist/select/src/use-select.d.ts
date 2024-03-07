import type { ComponentPublicInstance, Ref } from 'vue';
import { FilterOption, SelectOption, SelectFieldNames } from './interface';
import { VirtualListRef } from '../../virtual-list/src/interface';
export declare const useSelect: ({ selectSize, multiple, options, extraOptions, inputValue, filterOption, showExtraOptions, component, valueKey, fieldNames, loading, popupVisible, valueKeys, dropdownRef, optionRefs, virtualListRef, onSelect, onPopupVisibleChange, enterToOpen, defaultActiveFirstOption }: {
    selectSize?: Ref<string> | undefined;
    multiple?: Ref<boolean> | undefined;
    options?: Ref<SelectOption[]> | undefined;
    extraOptions?: Ref<SelectOption[]> | undefined;
    inputValue?: Ref<string> | undefined;
    filterOption?: Ref<FilterOption> | undefined;
    showExtraOptions?: Ref<boolean> | undefined;
    component?: Ref<"div" | "li"> | undefined;
    valueKey?: Ref<string> | undefined;
    fieldNames?: Ref<import("@tu-view-plus/utils").FieldString<import("./interface").SelectOptionData> | undefined> | undefined;
    loading?: Ref<boolean> | undefined;
    popupVisible: Ref<boolean>;
    valueKeys: Ref<string[]>;
    dropdownRef?: Ref<ComponentPublicInstance | undefined> | undefined;
    optionRefs?: Ref<Record<string | number, HTMLElement>> | undefined;
    virtualListRef?: Ref<VirtualListRef> | undefined;
    onSelect: (key: string, ev: Event) => void;
    onPopupVisibleChange: (visible: boolean) => void;
    enterToOpen?: boolean | undefined;
    defaultActiveFirstOption?: Ref<boolean> | undefined;
}) => {
    validOptions: import("vue").ComputedRef<(import("./interface").SelectOptionInfo | import("./interface").SelectOptionGroupInfo)[]>;
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
    activeKey: Ref<string | undefined>;
    setActiveKey: (key?: string) => void;
    addSlotOptionInfo: (id: number, optionInfo: import("./interface").SelectOptionInfo) => void;
    removeSlotOptionInfo: (id: number) => void;
    getNextActiveKey: (direction: 'up' | 'down') => string | undefined;
    scrollIntoView: (key: string) => void;
    handleKeyDown: (event: KeyboardEvent) => void;
};