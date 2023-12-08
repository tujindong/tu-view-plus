import { Data } from '@tu-view-plus/utils';
import { TriggerProps } from '../../trigger';
import { ScrollbarProps } from '../../scrollbar';
import { SelectOptionData, SelectOptionGroup } from './interface';
import type { ExtractPropTypes, PropType } from 'vue';
import type Select from './select.vue';
import type { VirtualListProps } from '../../virtual-list';
export declare const selectProps: {
    readonly multiple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) | (() => string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) | ((new (...args: any[]) => string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) | (() => string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]))[], unknown, unknown, undefined, boolean>;
    readonly defaultValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]) | (() => string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]) | ((new (...args: any[]) => string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]) | (() => string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]))[], unknown, unknown, (props: Data) => "" | never[], boolean>;
    readonly inputValue: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultInputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly placeholder: StringConstructor;
    readonly loading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly error: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly allowSearch: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
        retainInputValue?: boolean | undefined;
    }) | (() => boolean | {
        retainInputValue?: boolean | undefined;
    }) | ((new (...args: any[]) => boolean | {
        retainInputValue?: boolean | undefined;
    }) | (() => boolean | {
        retainInputValue?: boolean | undefined;
    }))[], unknown, unknown, (props: Data) => boolean, boolean>;
    readonly allowCreate: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly maxTagCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly popupContainer: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly bordered: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly defaultActiveFirstOption: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly unmountOnClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly filterOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((inputValue: string, option: SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: SelectOptionData) => boolean)))[], unknown, unknown, true, boolean>;
    readonly options: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | boolean | SelectOptionData | SelectOptionGroup)[]) | (() => (string | number | boolean | SelectOptionData | SelectOptionGroup)[]) | ((new (...args: any[]) => (string | number | boolean | SelectOptionData | SelectOptionGroup)[]) | (() => (string | number | boolean | SelectOptionData | SelectOptionGroup)[]))[], unknown, unknown, () => never[], boolean>;
    readonly virtualListProps: {
        readonly type: PropType<VirtualListProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly triggerProps: {
        readonly type: PropType<TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly formatLabel: {
        readonly type: PropType<(data: SelectOptionData) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)))[], unknown, unknown, true, boolean>;
    readonly showExtraOptions: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly valueKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "value", boolean>;
    readonly searchDelay: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 500, boolean>;
    readonly limit: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly fieldNames: {
        readonly type: PropType<import("@tu-view-plus/utils").FieldString<SelectOptionData>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly scrollbar: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly tag: string;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | ScrollbarProps) | ((new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly tag: string;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | ScrollbarProps))[], unknown, unknown, true, boolean>;
    readonly showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
    readonly showFooterOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
};
export declare const selectEmits: {
    'update:modelValue': (value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => boolean;
    'update:inputValue': (inputValue: string) => boolean;
    'update:popupVisible': (visible: boolean) => boolean;
    /**
     * @zh 值发生改变时触发
     * @en Triggered when the value changes
     * @param { string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[] } value
     */
    change: (value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => boolean;
    /**
     * @zh 输入框的值发生改变时触发
     * @en Triggered when the value of the input changes
     * @param {string} inputValue
     */
    inputValueChange: (inputValue: string) => boolean;
    /**
     * @zh 下拉框的显示状态改变时触发
     * @en Triggered when the display state of the drop-down box changes
     * @param {boolean} visible
     */
    popupVisibleChange: (visible: boolean) => boolean;
    /**
     * @zh 点击清除按钮时触发
     * @en Triggered when the clear button is clicked
     */
    clear: (ev: Event) => boolean;
    /**
     * @zh 点击标签的删除按钮时触发
     * @en Triggered when the delete button of the label is clicked
     * @param {string | number | boolean | Record<string, any> | undefined} removed
     */
    remove: (removed: string | number | boolean | Record<string, any> | undefined) => boolean;
    /**
     * @zh 用户搜索时触发
     * @en Triggered when the user searches
     * @param {string} inputValue
     */
    search: (inputValue: string) => boolean;
    /**
     * @zh 下拉菜单发生滚动时触发
     * @en Triggered when the drop-down scrolls
     */
    dropdownScroll: (ev: Event) => boolean;
    /**
     * @zh 下拉菜单滚动到底部时触发
     * @en Triggered when the drop-down menu is scrolled to the bottom
     */
    dropdownReachBottom: (ev: Event) => boolean;
    /**
     * @zh 多选超出限制时触发
     * @en Triggered when multiple selection exceeds the limit
     * @param {string | number | boolean | Record<string, any> | undefined} value
     * @param {Event} ev
     * @version 2.18.0
     */
    exceedLimit: (value: string | number | boolean | Record<string, any> | undefined, ev: Event) => boolean;
};
export type SelectProps = ExtractPropTypes<typeof selectProps>;
export type SelectInstance = InstanceType<typeof Select>;
export type SelectEmits = typeof selectEmits;
