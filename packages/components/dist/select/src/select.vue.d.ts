declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
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
        type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
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
    filterOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((inputValue: string, option: import("./interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./interface").SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: import("./interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./interface").SelectOptionData) => boolean)))[], unknown, unknown, boolean, boolean>;
    options: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | import("./interface").SelectOptionData | import("./interface").SelectOptionGroup)[]) | (() => (string | number | import("./interface").SelectOptionData | import("./interface").SelectOptionGroup)[]) | ((new (...args: any[]) => (string | number | import("./interface").SelectOptionData | import("./interface").SelectOptionGroup)[]) | (() => (string | number | import("./interface").SelectOptionData | import("./interface").SelectOptionGroup)[]))[], unknown, unknown, () => never[], boolean>;
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
        readonly type: import("vue").PropType<(data: import("./interface").SelectOptionData) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./interface").SelectOptionData)))[], unknown, unknown, boolean, boolean>;
    showExtraOptions: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    valueKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    searchDelay: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    limit: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    fieldNames: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").FieldString<import("./interface").SelectOptionData>>;
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    search: (inputValue: string) => void;
    clear: (ev: Event) => void;
    "update:modelValue": (value: import("./constants").SelectValueType) => void;
    change: (value: import("./constants").SelectValueType) => void;
    "update:popupVisible": (visible: boolean) => void;
    popupVisibleChange: (visible: boolean) => void;
    remove: (removed: string | number | Record<string, any> | undefined) => void;
    inputValueChange: (inputValue: string) => void;
    dropdownScroll: (ev: Event) => void;
    dropdownReachBottom: (ev: Event) => void;
    exceedLimit: (value: string | number | Record<string, any> | undefined, ev: Event) => void;
    "update:inputValue": (inputValue: string) => void;
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
        type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
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
    filterOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((inputValue: string, option: import("./interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./interface").SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: import("./interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./interface").SelectOptionData) => boolean)))[], unknown, unknown, boolean, boolean>;
    options: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | import("./interface").SelectOptionData | import("./interface").SelectOptionGroup)[]) | (() => (string | number | import("./interface").SelectOptionData | import("./interface").SelectOptionGroup)[]) | ((new (...args: any[]) => (string | number | import("./interface").SelectOptionData | import("./interface").SelectOptionGroup)[]) | (() => (string | number | import("./interface").SelectOptionData | import("./interface").SelectOptionGroup)[]))[], unknown, unknown, () => never[], boolean>;
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
        readonly type: import("vue").PropType<(data: import("./interface").SelectOptionData) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./interface").SelectOptionData)))[], unknown, unknown, boolean, boolean>;
    showExtraOptions: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    valueKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    searchDelay: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    limit: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    fieldNames: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").FieldString<import("./interface").SelectOptionData>>;
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
}>> & {
    onChange?: ((value: import("./constants").SelectValueType) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./constants").SelectValueType) => any) | undefined;
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    onClear?: ((ev: Event) => any) | undefined;
    onRemove?: ((removed: string | number | Record<string, any> | undefined) => any) | undefined;
    onSearch?: ((inputValue: string) => any) | undefined;
    onInputValueChange?: ((inputValue: string) => any) | undefined;
    onDropdownScroll?: ((ev: Event) => any) | undefined;
    onDropdownReachBottom?: ((ev: Event) => any) | undefined;
    onExceedLimit?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
    "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
}, {
    disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>;
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
    multiple: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    id: string;
    name: string;
    loading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    unmountOnClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    autocomplete: string;
    options: (string | number | import("./interface").SelectOptionData | import("./interface").SelectOptionGroup)[];
    bordered: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    defaultValue: import("./constants").SelectValueType;
    defaultInputValue: string;
    allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
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
    maxTagCount: number;
    defaultActiveFirstOption: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    filterOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((inputValue: string, option: import("./interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./interface").SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: import("./interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./interface").SelectOptionData) => boolean)))[], unknown, unknown>;
    fallbackOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./interface").SelectOptionData)))[], unknown, unknown>;
    showExtraOptions: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    valueKey: string;
    searchDelay: number;
    limit: number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
