export declare const TuSelect: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            defaultValue: import("./src/constants").SelectValueType;
            allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "large" | "medium", never>;
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
            multiple: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            autocomplete: string;
            name: string;
            id: string;
            loading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            unmountOnClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            bordered: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            defaultInputValue: string;
            maxTagCount: number;
            options: (string | number | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[];
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
            filterOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)))[], unknown, unknown>;
            fallbackOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)))[], unknown, unknown>;
            showExtraOptions: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            valueKey: string;
            searchDelay: number;
            limit: number;
        }> & Omit<{
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultValue: import("./src/constants").SelectValueType;
            readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "large" | "medium", never>;
            readonly scrollbar: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ({
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
            readonly multiple: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly autocomplete: string;
            readonly loading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly unmountOnClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly bordered: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultInputValue: string;
            readonly maxTagCount: number;
            readonly options: (string | number | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[];
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
            readonly defaultActiveFirstOption: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly filterOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)))[], unknown, unknown>;
            readonly fallbackOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)))[], unknown, unknown>;
            readonly showExtraOptions: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly valueKey: string;
            readonly searchDelay: number;
            readonly limit: number;
            readonly placeholder?: string | undefined;
            readonly name?: string | undefined;
            readonly popupContainer?: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown> | undefined;
            readonly id?: string | undefined;
            readonly popupVisible?: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            readonly modelValue?: import("./src/constants").SelectValueType | undefined;
            readonly fieldNames?: import("@tu-view-plus/utils").FieldString<import("./src/interface").SelectOptionData> | undefined;
            readonly inputValue?: string | undefined;
            readonly virtualListProps?: import("../virtual-list").VirtualListProps | undefined;
            readonly triggerProps?: import("../trigger").TriggerProps | undefined;
            readonly formatLabel?: ((data: import("./src/interface").SelectOptionData) => string) | undefined;
            onChange?: ((value: import("./src/constants").SelectValueType) => any) | undefined;
            "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
            onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((value: import("./src/constants").SelectValueType) => any) | undefined;
            onClear?: ((ev: Event) => any) | undefined;
            onRemove?: ((removed: string | number | Record<string, any> | undefined) => any) | undefined;
            "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
            onInputValueChange?: ((inputValue: string) => any) | undefined;
            onSearch?: ((inputValue: string) => any) | undefined;
            onDropdownScroll?: ((ev: Event) => any) | undefined;
            onDropdownReachBottom?: ((ev: Event) => any) | undefined;
            onExceedLimit?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
                type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "large" | "medium", never>>;
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
            fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)))[], unknown, unknown, boolean, boolean>;
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
        }>> & {
            onChange?: ((value: import("./src/constants").SelectValueType) => any) | undefined;
            "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
            onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((value: import("./src/constants").SelectValueType) => any) | undefined;
            onClear?: ((ev: Event) => any) | undefined;
            onRemove?: ((removed: string | number | Record<string, any> | undefined) => any) | undefined;
            "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
            onInputValueChange?: ((inputValue: string) => any) | undefined;
            onSearch?: ((inputValue: string) => any) | undefined;
            onDropdownScroll?: ((ev: Event) => any) | undefined;
            onDropdownReachBottom?: ((ev: Event) => any) | undefined;
            onExceedLimit?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
        }, "disabled" | "defaultValue" | "allowClear" | "size" | "scrollbar" | "multiple" | "error" | "autocomplete" | "name" | "id" | "loading" | "popupVisible" | "defaultPopupVisible" | "unmountOnClose" | "bordered" | "defaultInputValue" | "maxTagCount" | "options" | "allowSearch" | "allowCreate" | "defaultActiveFirstOption" | "filterOption" | "fallbackOption" | "showExtraOptions" | "valueKey" | "searchDelay" | "limit">;
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
        $emit: ((event: "search", inputValue: string) => void) & ((event: "clear", ev: Event) => void) & ((event: "change", value: import("./src/constants").SelectValueType) => void) & ((event: "update:modelValue", value: import("./src/constants").SelectValueType) => void) & ((event: "remove", removed: string | number | Record<string, any> | undefined) => void) & ((event: "update:popupVisible", visible: boolean) => void) & ((event: "popupVisibleChange", visible: boolean) => void) & ((event: "update:inputValue", inputValue: string) => void) & ((event: "inputValueChange", inputValue: string) => void) & ((event: "dropdownScroll", ev: Event) => void) & ((event: "dropdownReachBottom", ev: Event) => void) & ((event: "exceedLimit", value: string | number | Record<string, any> | undefined, ev: Event) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
                type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "large" | "medium", never>>;
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
            fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)))[], unknown, unknown, boolean, boolean>;
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
        }>> & {
            onChange?: ((value: import("./src/constants").SelectValueType) => any) | undefined;
            "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
            onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((value: import("./src/constants").SelectValueType) => any) | undefined;
            onClear?: ((ev: Event) => any) | undefined;
            onRemove?: ((removed: string | number | Record<string, any> | undefined) => any) | undefined;
            "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
            onInputValueChange?: ((inputValue: string) => any) | undefined;
            onSearch?: ((inputValue: string) => any) | undefined;
            onDropdownScroll?: ((ev: Event) => any) | undefined;
            onDropdownReachBottom?: ((ev: Event) => any) | undefined;
            onExceedLimit?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            search: (inputValue: string) => void;
            clear: (ev: Event) => void;
            change: (value: import("./src/constants").SelectValueType) => void;
            "update:modelValue": (value: import("./src/constants").SelectValueType) => void;
            remove: (removed: string | number | Record<string, any> | undefined) => void;
            "update:popupVisible": (visible: boolean) => void;
            popupVisibleChange: (visible: boolean) => void;
            "update:inputValue": (inputValue: string) => void;
            inputValueChange: (inputValue: string) => void;
            dropdownScroll: (ev: Event) => void;
            dropdownReachBottom: (ev: Event) => void;
            exceedLimit: (value: string | number | Record<string, any> | undefined, ev: Event) => void;
        }, string, {
            disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            defaultValue: import("./src/constants").SelectValueType;
            allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "large" | "medium", never>;
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
            multiple: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            autocomplete: string;
            name: string;
            id: string;
            loading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            unmountOnClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            bordered: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            defaultInputValue: string;
            maxTagCount: number;
            options: (string | number | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[];
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
            filterOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)))[], unknown, unknown>;
            fallbackOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)))[], unknown, unknown>;
            showExtraOptions: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            valueKey: string;
            searchDelay: number;
            limit: number;
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
            type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "large" | "medium", never>>;
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
        fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)))[], unknown, unknown, boolean, boolean>;
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
    }>> & {
        onChange?: ((value: import("./src/constants").SelectValueType) => any) | undefined;
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./src/constants").SelectValueType) => any) | undefined;
        onClear?: ((ev: Event) => any) | undefined;
        onRemove?: ((removed: string | number | Record<string, any> | undefined) => any) | undefined;
        "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
        onInputValueChange?: ((inputValue: string) => any) | undefined;
        onSearch?: ((inputValue: string) => any) | undefined;
        onDropdownScroll?: ((ev: Event) => any) | undefined;
        onDropdownReachBottom?: ((ev: Event) => any) | undefined;
        onExceedLimit?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "large" | "medium", never>>;
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
    fallbackOption: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)))[], unknown, unknown, boolean, boolean>;
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
}>> & {
    onChange?: ((value: import("./src/constants").SelectValueType) => any) | undefined;
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./src/constants").SelectValueType) => any) | undefined;
    onClear?: ((ev: Event) => any) | undefined;
    onRemove?: ((removed: string | number | Record<string, any> | undefined) => any) | undefined;
    "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
    onInputValueChange?: ((inputValue: string) => any) | undefined;
    onSearch?: ((inputValue: string) => any) | undefined;
    onDropdownScroll?: ((ev: Event) => any) | undefined;
    onDropdownReachBottom?: ((ev: Event) => any) | undefined;
    onExceedLimit?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    search: (inputValue: string) => void;
    clear: (ev: Event) => void;
    change: (value: import("./src/constants").SelectValueType) => void;
    "update:modelValue": (value: import("./src/constants").SelectValueType) => void;
    remove: (removed: string | number | Record<string, any> | undefined) => void;
    "update:popupVisible": (visible: boolean) => void;
    popupVisibleChange: (visible: boolean) => void;
    "update:inputValue": (inputValue: string) => void;
    inputValueChange: (inputValue: string) => void;
    dropdownScroll: (ev: Event) => void;
    dropdownReachBottom: (ev: Event) => void;
    exceedLimit: (value: string | number | Record<string, any> | undefined, ev: Event) => void;
}, string, {
    disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    defaultValue: import("./src/constants").SelectValueType;
    allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "large" | "medium", never>;
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
    multiple: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    autocomplete: string;
    name: string;
    id: string;
    loading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    unmountOnClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    bordered: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    defaultInputValue: string;
    maxTagCount: number;
    options: (string | number | import("./src/interface").SelectOptionData | import("./src/interface").SelectOptionGroup)[];
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
    filterOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | ((new (...args: any[]) => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)) | (() => boolean | ((inputValue: string, option: import("./src/interface").SelectOptionData) => boolean)))[], unknown, unknown>;
    fallbackOption: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | ((new (...args: any[]) => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)) | (() => boolean | ((value: string | number | Record<string, unknown>) => import("./src/interface").SelectOptionData)))[], unknown, unknown>;
    showExtraOptions: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    valueKey: string;
    searchDelay: number;
    limit: number;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & {
    SelectOption: import("vue").DefineComponent<Readonly<import("vue").ComponentPropsOptions<{
        [x: string]: unknown;
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>>, {
        [x: number]: string;
    } | {}, {}>;
};
export declare const TuSelectOption: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<Readonly<import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>>, {
    [x: number]: string;
} | {}, {}>>;
export default TuSelect;
export * from './src/select';
