import { SelectOptionData } from './interface';
declare const _default: import("vue").DefineComponent<{
    id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    autocomplete: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    multiple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    modelValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => import("./constants").SelectValueType) | ((new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => import("./constants").SelectValueType))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    defaultValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => import("./constants").SelectValueType) | ((new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => import("./constants").SelectValueType))[], unknown, unknown, (props: Record<string, any>) => "" | never[], boolean>;
    inputValue: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    defaultInputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    size: {
        default: string;
        type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    bordered: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    defaultActiveFirstOption: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    unmountOnClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    filterOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((inputValue: string, option: SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: SelectOptionData) => boolean)))[], unknown, unknown, boolean, boolean>;
    options: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | SelectOptionData | import("./interface").SelectOptionGroup)[]) | (() => (string | number | SelectOptionData | import("./interface").SelectOptionGroup)[]) | ((new (...args: any[]) => (string | number | SelectOptionData | import("./interface").SelectOptionGroup)[]) | (() => (string | number | SelectOptionData | import("./interface").SelectOptionGroup)[]))[], unknown, unknown, () => never[], boolean>;
    virtualListProps: {
        readonly type: import("vue").PropType<import("../../virtual-list").VirtualListProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    triggerProps: {
        readonly type: import("vue").PropType<import("../../trigger").TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    formatLabel: {
        readonly type: import("vue").PropType<(data: SelectOptionData) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    showExtraOptions: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    valueKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    searchDelay: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    limit: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    fieldNames: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").FieldString<SelectOptionData>>;
        readonly required: false;
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
    } & {})) | (() => boolean | import("../../scrollbar").ScrollbarProps) | ((new (...args: any[]) => boolean | ({
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
    } & {})) | (() => boolean | import("../../scrollbar").ScrollbarProps))[], unknown, unknown, boolean, boolean>;
    fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)))[], unknown, unknown, boolean, boolean>;
    showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, boolean, boolean>;
    showFooterOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, boolean, boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("./constants").SelectValueType) => boolean;
    change: (value: import("./constants").SelectValueType) => boolean;
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
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    autocomplete: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    multiple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    modelValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => import("./constants").SelectValueType) | ((new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => import("./constants").SelectValueType))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    defaultValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => import("./constants").SelectValueType) | ((new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => import("./constants").SelectValueType))[], unknown, unknown, (props: Record<string, any>) => "" | never[], boolean>;
    inputValue: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    defaultInputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    size: {
        default: string;
        type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    bordered: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    defaultActiveFirstOption: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    unmountOnClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    filterOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((inputValue: string, option: SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: SelectOptionData) => boolean)))[], unknown, unknown, boolean, boolean>;
    options: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | SelectOptionData | import("./interface").SelectOptionGroup)[]) | (() => (string | number | SelectOptionData | import("./interface").SelectOptionGroup)[]) | ((new (...args: any[]) => (string | number | SelectOptionData | import("./interface").SelectOptionGroup)[]) | (() => (string | number | SelectOptionData | import("./interface").SelectOptionGroup)[]))[], unknown, unknown, () => never[], boolean>;
    virtualListProps: {
        readonly type: import("vue").PropType<import("../../virtual-list").VirtualListProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    triggerProps: {
        readonly type: import("vue").PropType<import("../../trigger").TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    formatLabel: {
        readonly type: import("vue").PropType<(data: SelectOptionData) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    showExtraOptions: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    valueKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    searchDelay: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    limit: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    fieldNames: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").FieldString<SelectOptionData>>;
        readonly required: false;
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
    } & {})) | (() => boolean | import("../../scrollbar").ScrollbarProps) | ((new (...args: any[]) => boolean | ({
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
    } & {})) | (() => boolean | import("../../scrollbar").ScrollbarProps))[], unknown, unknown, boolean, boolean>;
    fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)))[], unknown, unknown, boolean, boolean>;
    showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, boolean, boolean>;
    showFooterOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, boolean, boolean>;
}>> & {
    onChange?: ((value: import("./constants").SelectValueType) => any) | undefined;
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./constants").SelectValueType) => any) | undefined;
    onClear?: ((ev: Event) => any) | undefined;
    "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
    onInputValueChange?: ((inputValue: string) => any) | undefined;
    onRemove?: ((removed: string | number | Record<string, any> | undefined) => any) | undefined;
    onSearch?: ((inputValue: string) => any) | undefined;
    onDropdownScroll?: ((ev: Event) => any) | undefined;
    onDropdownReachBottom?: ((ev: Event) => any) | undefined;
    onExceedLimit?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
}, {
    disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    options: (string | number | SelectOptionData | import("./interface").SelectOptionGroup)[];
    allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    multiple: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    scrollbar: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ({
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
    } & {})) | (() => boolean | import("../../scrollbar").ScrollbarProps) | ((new (...args: any[]) => boolean | ({
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
    } & {})) | (() => boolean | import("../../scrollbar").ScrollbarProps))[], unknown, unknown>;
    error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    autocomplete: string;
    name: string;
    id: string;
    loading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    unmountOnClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    bordered: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    defaultValue: import("./constants").SelectValueType;
    defaultInputValue: string;
    maxTagCount: number;
    showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown>;
    showFooterOnEmpty: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown>;
    valueKey: string;
    filterOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((inputValue: string, option: SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: SelectOptionData) => boolean)))[], unknown, unknown>;
    allowSearch: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | {
        retainInputValue?: boolean | undefined;
    }) | (() => boolean | {
        retainInputValue?: boolean | undefined;
    }) | ((new (...args: any[]) => boolean | {
        retainInputValue?: boolean | undefined;
    }) | (() => boolean | {
        retainInputValue?: boolean | undefined;
    }))[], unknown, unknown>;
    allowCreate: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    defaultActiveFirstOption: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    showExtraOptions: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    searchDelay: number;
    limit: number;
    fallbackOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)))[], unknown, unknown>;
}, {}>;
export default _default;
