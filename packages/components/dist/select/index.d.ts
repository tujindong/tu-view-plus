export declare const TuSelect: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly multiple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) | (() => string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) | ((new (...args: any[]) => string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) | (() => string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]))[], unknown, unknown, undefined, boolean>;
    readonly defaultValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]) | (() => string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]) | ((new (...args: any[]) => string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]) | (() => string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]))[], unknown, unknown, (props: import("@tu-view-plus/utils").Data) => "" | never[], boolean>;
    readonly inputValue: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultInputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
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
    }))[], unknown, unknown, (props: import("@tu-view-plus/utils").Data) => boolean, boolean>;
    readonly allowCreate: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly maxTagCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly popupContainer: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly bordered: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly defaultActiveFirstOption: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly unmountOnClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly filterOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)))[], unknown, unknown, true, boolean>;
    readonly options: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | boolean | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[]) | (() => (string | number | boolean | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[]) | ((new (...args: any[]) => (string | number | boolean | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[]) | (() => (string | number | boolean | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[]))[], unknown, unknown, () => never[], boolean>;
    readonly virtualListProps: {
        readonly type: import("vue").PropType<import("../virtual-list").VirtualListProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly triggerProps: {
        readonly type: import("vue").PropType<import("../trigger").TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly formatLabel: {
        readonly type: import("vue").PropType<(data: import("./src/interface").SelectOptionData) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)))[], unknown, unknown, true, boolean>;
    readonly showExtraOptions: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly valueKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "value", boolean>;
    readonly searchDelay: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 500, boolean>;
    readonly limit: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly fieldNames: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").FieldString<import("./src/interface").SelectOptionData>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly scrollbar: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly tag: string;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps) | ((new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly tag: string;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps))[], unknown, unknown, true, boolean>;
    readonly showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
    readonly showFooterOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => boolean;
    'update:inputValue': (inputValue: string) => boolean;
    'update:popupVisible': (visible: boolean) => boolean;
    change: (value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => boolean;
    inputValueChange: (inputValue: string) => boolean;
    popupVisibleChange: (visible: boolean) => boolean;
    clear: (ev: Event) => boolean;
    remove: (removed: string | number | boolean | Record<string, any> | undefined) => boolean;
    search: (inputValue: string) => boolean;
    dropdownScroll: (ev: Event) => boolean;
    dropdownReachBottom: (ev: Event) => boolean;
    exceedLimit: (value: string | number | boolean | Record<string, any> | undefined, ev: Event) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly multiple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) | (() => string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) | ((new (...args: any[]) => string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) | (() => string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]))[], unknown, unknown, undefined, boolean>;
    readonly defaultValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]) | (() => string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]) | ((new (...args: any[]) => string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]) | (() => string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]))[], unknown, unknown, (props: import("@tu-view-plus/utils").Data) => "" | never[], boolean>;
    readonly inputValue: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultInputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
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
    }))[], unknown, unknown, (props: import("@tu-view-plus/utils").Data) => boolean, boolean>;
    readonly allowCreate: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly maxTagCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly popupContainer: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly bordered: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly defaultActiveFirstOption: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly unmountOnClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly filterOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)))[], unknown, unknown, true, boolean>;
    readonly options: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | boolean | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[]) | (() => (string | number | boolean | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[]) | ((new (...args: any[]) => (string | number | boolean | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[]) | (() => (string | number | boolean | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[]))[], unknown, unknown, () => never[], boolean>;
    readonly virtualListProps: {
        readonly type: import("vue").PropType<import("../virtual-list").VirtualListProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly triggerProps: {
        readonly type: import("vue").PropType<import("../trigger").TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly formatLabel: {
        readonly type: import("vue").PropType<(data: import("./src/interface").SelectOptionData) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)))[], unknown, unknown, true, boolean>;
    readonly showExtraOptions: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly valueKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "value", boolean>;
    readonly searchDelay: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 500, boolean>;
    readonly limit: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly fieldNames: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").FieldString<import("./src/interface").SelectOptionData>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly scrollbar: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly tag: string;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps) | ((new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly tag: string;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps))[], unknown, unknown, true, boolean>;
    readonly showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
    readonly showFooterOnEmpty: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown, false, boolean>;
}>> & {
    onChange?: ((value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => any) | undefined;
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => any) | undefined;
    onClear?: ((ev: Event) => any) | undefined;
    "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
    onInputValueChange?: ((inputValue: string) => any) | undefined;
    onRemove?: ((removed: string | number | boolean | Record<string, any> | undefined) => any) | undefined;
    onSearch?: ((inputValue: string) => any) | undefined;
    onDropdownScroll?: ((ev: Event) => any) | undefined;
    onDropdownReachBottom?: ((ev: Event) => any) | undefined;
    onExceedLimit?: ((value: string | number | boolean | Record<string, any> | undefined, ev: Event) => any) | undefined;
}, {
    readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) | (() => string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) | ((new (...args: any[]) => string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) | (() => string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]))[], unknown, unknown>;
    readonly scrollbar: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly tag: string;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps) | ((new (...args: any[]) => boolean | ({
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import("vue").StyleValue;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly tag: string;
        readonly minSize: number;
        readonly noresize: boolean;
    } & {})) | (() => boolean | import("../scrollbar").ScrollbarProps))[], unknown, unknown>;
    readonly multiple: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly loading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly bordered: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly unmountOnClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly options: (string | number | boolean | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[];
    readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]) | (() => string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]) | ((new (...args: any[]) => string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]) | (() => string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]))[], unknown, unknown>;
    readonly defaultInputValue: string;
    readonly allowSearch: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | {
        retainInputValue?: boolean | undefined;
    }) | (() => boolean | {
        retainInputValue?: boolean | undefined;
    }) | ((new (...args: any[]) => boolean | {
        retainInputValue?: boolean | undefined;
    }) | (() => boolean | {
        retainInputValue?: boolean | undefined;
    }))[], unknown, unknown>;
    readonly allowCreate: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly maxTagCount: number;
    readonly defaultActiveFirstOption: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly filterOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)))[], unknown, unknown>;
    readonly fallbackOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | boolean | Record<string, unknown>) => import("./src/interface").SelectOptionData)))[], unknown, unknown>;
    readonly showExtraOptions: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly valueKey: string;
    readonly searchDelay: number;
    readonly limit: number;
    readonly showHeaderOnEmpty: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown>;
    readonly showFooterOnEmpty: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean) | ((new (...args: any[]) => boolean) | (() => boolean))[], unknown, unknown>;
}, {}>> & {
    SelectOption: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            readonly value: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
            readonly label: StringConstructor;
            readonly disabled: BooleanConstructor;
            readonly tagProps: {
                readonly type: import("vue").PropType<{
                    readonly color: string;
                    readonly round: boolean;
                    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                    readonly closable: boolean;
                    readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "inset" | "outset" | "dark" | "light" | "plain", unknown>;
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
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly value: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
            readonly label: StringConstructor;
            readonly disabled: BooleanConstructor;
            readonly tagProps: {
                readonly type: import("vue").PropType<{
                    readonly color: string;
                    readonly round: boolean;
                    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                    readonly closable: boolean;
                    readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "inset" | "outset" | "dark" | "light" | "plain", unknown>;
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
        }>>, {
            readonly value: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
            readonly disabled: boolean;
            readonly internal: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            readonly value: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
            readonly label: StringConstructor;
            readonly disabled: BooleanConstructor;
            readonly tagProps: {
                readonly type: import("vue").PropType<{
                    readonly color: string;
                    readonly round: boolean;
                    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                    readonly closable: boolean;
                    readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "inset" | "outset" | "dark" | "light" | "plain", unknown>;
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
        }>>, {}, {}, {}, {}, {
            readonly value: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
            readonly disabled: boolean;
            readonly internal: boolean;
        }>;
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
                readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "inset" | "outset" | "dark" | "light" | "plain", unknown>;
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
        readonly value: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
        readonly disabled: boolean;
        readonly internal: boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            icon?(_: {}): any;
            default?(_: {}): any;
            suffix?(_: {}): any;
        };
    });
    SelectGroup: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            readonly label: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly label: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, {}, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            readonly label: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, {}, {}, {}, {}, {}>;
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
    });
};
export declare const TuSelectOption: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly value: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
        readonly label: StringConstructor;
        readonly disabled: BooleanConstructor;
        readonly tagProps: {
            readonly type: import("vue").PropType<{
                readonly color: string;
                readonly round: boolean;
                readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                readonly closable: boolean;
                readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "inset" | "outset" | "dark" | "light" | "plain", unknown>;
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
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly value: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
        readonly label: StringConstructor;
        readonly disabled: BooleanConstructor;
        readonly tagProps: {
            readonly type: import("vue").PropType<{
                readonly color: string;
                readonly round: boolean;
                readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                readonly closable: boolean;
                readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "inset" | "outset" | "dark" | "light" | "plain", unknown>;
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
    }>>, {
        readonly value: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
        readonly disabled: boolean;
        readonly internal: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly value: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
        readonly label: StringConstructor;
        readonly disabled: BooleanConstructor;
        readonly tagProps: {
            readonly type: import("vue").PropType<{
                readonly color: string;
                readonly round: boolean;
                readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                readonly closable: boolean;
                readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "inset" | "outset" | "dark" | "light" | "plain", unknown>;
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
    }>>, {}, {}, {}, {}, {
        readonly value: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
        readonly disabled: boolean;
        readonly internal: boolean;
    }>;
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
            readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "inset" | "outset" | "dark" | "light" | "plain", unknown>;
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
    readonly value: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
    readonly disabled: boolean;
    readonly internal: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        icon?(_: {}): any;
        default?(_: {}): any;
        suffix?(_: {}): any;
    };
})>;
export declare const TuSelectGroup: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly label: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly label: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly label: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>>, {}, {}, {}, {}, {}>;
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
