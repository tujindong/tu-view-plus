export declare const TuSelect: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
    id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    autocomplete: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    multiple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    modelValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => import("./src/constants").SelectValueType) | ((new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => import("./src/constants").SelectValueType))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    defaultValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => import("./src/constants").SelectValueType) | ((new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => import("./src/constants").SelectValueType))[], unknown, unknown, (props: Record<string, any>) => "" | never[], boolean>;
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
    filterOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)))[], unknown, unknown, boolean, boolean>;
    options: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[]) | (() => (string | number | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[]) | ((new (...args: any[]) => (string | number | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[]) | (() => (string | number | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[]))[], unknown, unknown, () => never[], boolean>;
    virtualListProps: {
        readonly type: import("vue").PropType<import("../virtual-list").VirtualListProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    triggerProps: {
        readonly type: import("vue").PropType<import("../trigger").TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    formatLabel: {
        readonly type: import("vue").PropType<(data: import("./src/interface").SelectOptionData) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    showExtraOptions: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    valueKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    searchDelay: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    limit: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    fieldNames: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").FieldString<import("./src/interface").SelectOptionData>>;
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
    } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps) | ((new (...args: any[]) => boolean | ({
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
    } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps))[], unknown, unknown, boolean, boolean>;
    fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)))[], unknown, unknown, boolean, boolean>;
    showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, boolean, boolean>;
    showFooterOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, boolean, boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("./src/constants").SelectValueType) => boolean;
    change: (value: import("./src/constants").SelectValueType) => boolean;
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => import("./src/constants").SelectValueType) | ((new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => import("./src/constants").SelectValueType))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    defaultValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => import("./src/constants").SelectValueType) | ((new (...args: any[]) => string | number | Record<string, any> | (string | number | Record<string, any>)[]) | (() => import("./src/constants").SelectValueType))[], unknown, unknown, (props: Record<string, any>) => "" | never[], boolean>;
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
    filterOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)))[], unknown, unknown, boolean, boolean>;
    options: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[]) | (() => (string | number | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[]) | ((new (...args: any[]) => (string | number | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[]) | (() => (string | number | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[]))[], unknown, unknown, () => never[], boolean>;
    virtualListProps: {
        readonly type: import("vue").PropType<import("../virtual-list").VirtualListProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    triggerProps: {
        readonly type: import("vue").PropType<import("../trigger").TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    formatLabel: {
        readonly type: import("vue").PropType<(data: import("./src/interface").SelectOptionData) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    showExtraOptions: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    valueKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    searchDelay: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    limit: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    fieldNames: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").FieldString<import("./src/interface").SelectOptionData>>;
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
    } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps) | ((new (...args: any[]) => boolean | ({
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
    } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps))[], unknown, unknown, boolean, boolean>;
    fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)))[], unknown, unknown, boolean, boolean>;
    showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, boolean, boolean>;
    showFooterOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, boolean, boolean>;
}>> & {
    onChange?: ((value: import("./src/constants").SelectValueType) => any) | undefined;
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./src/constants").SelectValueType) => any) | undefined;
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
    options: (string | number | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[];
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
    } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps) | ((new (...args: any[]) => boolean | ({
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
    } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps))[], unknown, unknown>;
    error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    autocomplete: string;
    name: string;
    id: string;
    loading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    unmountOnClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    bordered: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    defaultValue: import("./src/constants").SelectValueType;
    defaultInputValue: string;
    maxTagCount: number;
    showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown>;
    showFooterOnEmpty: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown>;
    valueKey: string;
    filterOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)))[], unknown, unknown>;
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
    fallbackOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)))[], unknown, unknown>;
}, {}>> & {
    SelectOption: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly disabled: boolean;
                readonly value: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
                readonly internal: boolean;
            }> & Omit<{
                readonly disabled: boolean;
                readonly internal: boolean;
                readonly label?: string | undefined;
                readonly value?: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown> | undefined;
                readonly index?: number | undefined;
                readonly extra?: Record<string, any> | undefined;
                readonly tagProps?: {
                    readonly color: string;
                    readonly round: boolean;
                    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                    readonly closable: boolean;
                    readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>;
                    readonly disableTransitions: boolean;
                    readonly hit: boolean;
                } | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
                readonly value: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
                readonly label: StringConstructor;
                readonly disabled: BooleanConstructor;
                readonly tagProps: {
                    readonly type: import("vue").PropType<{
                        readonly color: string;
                        readonly round: boolean;
                        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                        readonly closable: boolean;
                        readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>;
                        readonly disableTransitions: boolean;
                        readonly hit: boolean;
                    }>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly extra: {
                    readonly type: import("vue").PropType<Record<string, any>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly index: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly internal: BooleanConstructor;
            }>>, "disabled" | "value" | "internal">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot<any> | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                readonly value: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
                readonly label: StringConstructor;
                readonly disabled: BooleanConstructor;
                readonly tagProps: {
                    readonly type: import("vue").PropType<{
                        readonly color: string;
                        readonly round: boolean;
                        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                        readonly closable: boolean;
                        readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>;
                        readonly disableTransitions: boolean;
                        readonly hit: boolean;
                    }>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly extra: {
                    readonly type: import("vue").PropType<Record<string, any>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly index: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly internal: BooleanConstructor;
            }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                readonly disabled: boolean;
                readonly value: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
                readonly internal: boolean;
            }, {}, string, {}> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            readonly value: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
            readonly label: StringConstructor;
            readonly disabled: BooleanConstructor;
            readonly tagProps: {
                readonly type: import("vue").PropType<{
                    readonly color: string;
                    readonly round: boolean;
                    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                    readonly closable: boolean;
                    readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>;
                    readonly disableTransitions: boolean;
                    readonly hit: boolean;
                }>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly extra: {
                readonly type: import("vue").PropType<Record<string, any>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly index: {
                readonly type: import("vue").PropType<number>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly internal: BooleanConstructor;
        }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        readonly value: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
        readonly label: StringConstructor;
        readonly disabled: BooleanConstructor;
        readonly tagProps: {
            readonly type: import("vue").PropType<{
                readonly color: string;
                readonly round: boolean;
                readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                readonly closable: boolean;
                readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>;
                readonly disableTransitions: boolean;
                readonly hit: boolean;
            }>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly extra: {
            readonly type: import("vue").PropType<Record<string, any>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly index: {
            readonly type: import("vue").PropType<number>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly internal: BooleanConstructor;
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        readonly disabled: boolean;
        readonly value: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
        readonly internal: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            icon?(_: {}): any;
            default?(_: {}): any;
            suffix?(_: {}): any;
        };
    });
};
export declare const TuSelectOption: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly disabled: boolean;
            readonly value: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
            readonly internal: boolean;
        }> & Omit<{
            readonly disabled: boolean;
            readonly internal: boolean;
            readonly label?: string | undefined;
            readonly value?: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown> | undefined;
            readonly index?: number | undefined;
            readonly extra?: Record<string, any> | undefined;
            readonly tagProps?: {
                readonly color: string;
                readonly round: boolean;
                readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                readonly closable: boolean;
                readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>;
                readonly disableTransitions: boolean;
                readonly hit: boolean;
            } | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly value: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
            readonly label: StringConstructor;
            readonly disabled: BooleanConstructor;
            readonly tagProps: {
                readonly type: import("vue").PropType<{
                    readonly color: string;
                    readonly round: boolean;
                    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                    readonly closable: boolean;
                    readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>;
                    readonly disableTransitions: boolean;
                    readonly hit: boolean;
                }>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly extra: {
                readonly type: import("vue").PropType<Record<string, any>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly index: {
                readonly type: import("vue").PropType<number>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly internal: BooleanConstructor;
        }>>, "disabled" | "value" | "internal">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly value: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
            readonly label: StringConstructor;
            readonly disabled: BooleanConstructor;
            readonly tagProps: {
                readonly type: import("vue").PropType<{
                    readonly color: string;
                    readonly round: boolean;
                    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                    readonly closable: boolean;
                    readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>;
                    readonly disableTransitions: boolean;
                    readonly hit: boolean;
                }>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly extra: {
                readonly type: import("vue").PropType<Record<string, any>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly index: {
                readonly type: import("vue").PropType<number>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly internal: BooleanConstructor;
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            readonly disabled: boolean;
            readonly value: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
            readonly internal: boolean;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        readonly value: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
        readonly label: StringConstructor;
        readonly disabled: BooleanConstructor;
        readonly tagProps: {
            readonly type: import("vue").PropType<{
                readonly color: string;
                readonly round: boolean;
                readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                readonly closable: boolean;
                readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>;
                readonly disableTransitions: boolean;
                readonly hit: boolean;
            }>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly extra: {
            readonly type: import("vue").PropType<Record<string, any>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly index: {
            readonly type: import("vue").PropType<number>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly internal: BooleanConstructor;
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly value: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
    readonly label: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly tagProps: {
        readonly type: import("vue").PropType<{
            readonly color: string;
            readonly round: boolean;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly closable: boolean;
            readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>;
            readonly disableTransitions: boolean;
            readonly hit: boolean;
        }>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly extra: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly index: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly internal: BooleanConstructor;
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly disabled: boolean;
    readonly value: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
    readonly internal: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        icon?(_: {}): any;
        default?(_: {}): any;
        suffix?(_: {}): any;
    };
})>;
export declare const TuSelectGroup: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<{
            readonly label?: string | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly label: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly label: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        readonly label: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly label: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        label?(_: {}): any;
        default?(_: {}): any;
    };
})>;
export default TuSelect;
export * from './src/select';
