import { TriggerProps } from '../../trigger';
import { ScrollbarProps } from '../../scrollbar';
import { SelectOptionData, SelectOptionGroup } from './interface';
import type { ExtractPropTypes, PropType } from 'vue';
import type Select from './select.vue';
import type { SelectValueType } from './constants';
import type { VirtualListProps } from '../../virtual-list';
export declare const selectProps: {
    id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    autocomplete: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    multiple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    modelValue: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => SelectValueType) | ((new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => SelectValueType))[], unknown, unknown>>;
        readonly required: false;
        /**
         * @zh 弹出框的挂载容器
         * @en Mount container for popup
         */
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    defaultValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => SelectValueType) | ((new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => SelectValueType))[], unknown, unknown, (props: Record<string, any>) => "" | never[], boolean>;
    inputValue: {
        readonly type: PropType<string>;
        readonly required: false;
        /**
         * @zh 弹出框的挂载容器
         * @en Mount container for popup
         */
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    defaultInputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    size: {
        default: string;
        type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    placeholder: StringConstructor;
    loading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    error: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    allowSearch: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
        retainInputValue?: boolean | undefined;
    }) | (() => boolean | {
        retainInputValue?: boolean | undefined;
    }) | ((new (...args: any[]) => boolean | {
        retainInputValue?: boolean | undefined;
    }) | (() => boolean | {
        retainInputValue?: boolean | undefined;
    }))[], unknown, unknown, (props: Record<string, any>) => boolean, boolean>;
    allowCreate: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    maxTagCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    popupContainer: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        /**
         * @zh 弹出框的挂载容器
         * @en Mount container for popup
         */
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    bordered: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    defaultActiveFirstOption: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    unmountOnClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    filterOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((inputValue: string, option: SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: SelectOptionData) => boolean)))[], unknown, unknown, boolean, boolean>;
    options: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | SelectOptionData | SelectOptionGroup)[]) | (() => (string | number | SelectOptionData | SelectOptionGroup)[]) | ((new (...args: any[]) => (string | number | SelectOptionData | SelectOptionGroup)[]) | (() => (string | number | SelectOptionData | SelectOptionGroup)[]))[], unknown, unknown, () => never[], boolean>;
    virtualListProps: {
        readonly type: PropType<VirtualListProps>;
        readonly required: false;
        /**
         * @zh 弹出框的挂载容器
         * @en Mount container for popup
         */
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    triggerProps: {
        readonly type: PropType<TriggerProps>;
        readonly required: false;
        /**
         * @zh 弹出框的挂载容器
         * @en Mount container for popup
         */
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    formatLabel: {
        readonly type: PropType<(data: SelectOptionData) => string>;
        readonly required: false;
        /**
         * @zh 弹出框的挂载容器
         * @en Mount container for popup
         */
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => SelectOptionData)))[], unknown, unknown, boolean, boolean>;
    showExtraOptions: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    valueKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    searchDelay: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    limit: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    fieldNames: {
        readonly type: PropType<import("@tu-view-plus/utils").FieldString<SelectOptionData>>;
        readonly required: false;
        /**
         * @zh 弹出框的挂载容器
         * @en Mount container for popup
         */
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    scrollbar: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ({
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
    } & {})) | (() => boolean | ScrollbarProps))[], unknown, unknown, boolean, boolean>;
};
export declare const selectEmits: {
    "update:modelValue": (value: SelectValueType) => boolean;
    change: (value: SelectValueType) => boolean;
    inputValueChange: (inputValue: string) => boolean;
    popupVisibleChange: (visible: boolean) => boolean;
    clear: (ev: Event) => boolean;
    remove: (removed: string | number | Record<string, any> | undefined) => boolean;
    search: (inputValue: string) => boolean;
    dropdownScroll: (ev: Event) => boolean;
    dropdownReachBottom: (ev: Event) => boolean;
    exceedLimit: (value: string | number | Record<string, any> | undefined, ev: Event) => boolean;
    'update:inputValue': (inputValue: string) => boolean;
    'update:popupVisible': (visible: boolean) => boolean;
};
export type SelectProps = ExtractPropTypes<typeof selectProps>;
export type SelectInstance = InstanceType<typeof Select>;
export type SelectEmits = typeof selectEmits;
