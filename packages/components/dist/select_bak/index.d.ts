export declare const TuSelect: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly clearable: boolean;
            readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<readonly [ArrayConstructor, StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly multiple: boolean;
            readonly disabled: boolean;
            readonly autocomplete: string;
            readonly loading: boolean;
            readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly unmountOnClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly suffixIcon: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>;
            readonly allowCreate: boolean;
            readonly valueKey: string;
            readonly remote: boolean;
            readonly popperClass: string;
            readonly popperOptions: Record<string, any>;
            readonly multipleLimit: number;
            readonly reserveKeyword: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly collapseTagsTooltip: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly maxCollapseTags: number;
            readonly persistent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly clearIcon: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>;
            readonly fitInputWidth: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly tagType: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>;
            readonly remoteShowSuffix: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly suffixTransition: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly automaticDropdown: boolean;
            readonly filterable: boolean;
            readonly defaultFirstOption: boolean;
            readonly collapseTags: boolean;
        }> & Omit<{
            readonly clearable: boolean;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly multiple: boolean;
            readonly disabled: boolean;
            readonly autocomplete: string;
            readonly loading: boolean;
            readonly unmountOnClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly suffixIcon: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>;
            readonly allowCreate: boolean;
            readonly valueKey: string;
            readonly remote: boolean;
            readonly popperClass: string;
            readonly popperOptions: Record<string, any>;
            readonly multipleLimit: number;
            readonly reserveKeyword: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly collapseTagsTooltip: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly maxCollapseTags: number;
            readonly persistent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly clearIcon: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>;
            readonly fitInputWidth: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly tagType: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>;
            readonly remoteShowSuffix: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly suffixTransition: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly automaticDropdown: boolean;
            readonly filterable: boolean;
            readonly defaultFirstOption: boolean;
            readonly collapseTags: boolean;
            readonly placeholder?: string | undefined;
            readonly modelValue?: import("@tu-view-plus/utils").EpPropMergeType<readonly [ArrayConstructor, StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown> | undefined;
            readonly name?: string | undefined;
            readonly popupContainer?: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown> | undefined;
            readonly id?: string | undefined;
            readonly popupVisible?: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            readonly loadingText?: string | undefined;
            readonly noMatchText?: string | undefined;
            readonly noDataText?: string | undefined;
            readonly remoteMethod?: Function | undefined;
            readonly filterMethod?: Function | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly name: StringConstructor;
            readonly id: StringConstructor;
            readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [ArrayConstructor, StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
            readonly autocomplete: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
            readonly automaticDropdown: BooleanConstructor;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly clearable: BooleanConstructor;
            readonly filterable: BooleanConstructor;
            readonly allowCreate: BooleanConstructor;
            readonly loading: BooleanConstructor;
            readonly popperClass: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly popperOptions: import("@tu-view-plus/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => void, boolean>;
            readonly remote: BooleanConstructor;
            readonly loadingText: StringConstructor;
            readonly noMatchText: StringConstructor;
            readonly noDataText: StringConstructor;
            readonly remoteMethod: FunctionConstructor;
            readonly filterMethod: FunctionConstructor;
            readonly multiple: BooleanConstructor;
            readonly multipleLimit: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            readonly placeholder: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly defaultFirstOption: BooleanConstructor;
            readonly reserveKeyword: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly valueKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "value", boolean>;
            readonly collapseTags: BooleanConstructor;
            readonly collapseTagsTooltip: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly maxCollapseTags: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
            readonly persistent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly clearIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown, import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
            readonly fitInputWidth: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly suffixIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown, import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
            readonly tagType: {
                readonly default: "up";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly remoteShowSuffix: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly suffixTransition: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly unmountOnClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly popupContainer: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        }>>, "clearable" | "modelValue" | "size" | "multiple" | "disabled" | "autocomplete" | "loading" | "popupVisible" | "unmountOnClose" | "validateEvent" | "suffixIcon" | "allowCreate" | "valueKey" | "remote" | "popperClass" | "popperOptions" | "multipleLimit" | "reserveKeyword" | "collapseTagsTooltip" | "maxCollapseTags" | "persistent" | "clearIcon" | "fitInputWidth" | "tagType" | "remoteShowSuffix" | "suffixTransition" | "automaticDropdown" | "filterable" | "defaultFirstOption" | "collapseTags">;
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
            readonly name: StringConstructor;
            readonly id: StringConstructor;
            readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [ArrayConstructor, StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
            readonly autocomplete: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
            readonly automaticDropdown: BooleanConstructor;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly clearable: BooleanConstructor;
            readonly filterable: BooleanConstructor;
            readonly allowCreate: BooleanConstructor;
            readonly loading: BooleanConstructor;
            readonly popperClass: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly popperOptions: import("@tu-view-plus/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => void, boolean>;
            readonly remote: BooleanConstructor;
            readonly loadingText: StringConstructor;
            readonly noMatchText: StringConstructor;
            readonly noDataText: StringConstructor;
            readonly remoteMethod: FunctionConstructor;
            readonly filterMethod: FunctionConstructor;
            readonly multiple: BooleanConstructor;
            readonly multipleLimit: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            readonly placeholder: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly defaultFirstOption: BooleanConstructor;
            readonly reserveKeyword: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly valueKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "value", boolean>;
            readonly collapseTags: BooleanConstructor;
            readonly collapseTagsTooltip: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly maxCollapseTags: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
            readonly persistent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly clearIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown, import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
            readonly fitInputWidth: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly suffixIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown, import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
            readonly tagType: {
                readonly default: "up";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly remoteShowSuffix: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly suffixTransition: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly unmountOnClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly popupContainer: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            [x: string]: (...args: any[]) => void;
        }, string, {
            readonly clearable: boolean;
            readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<readonly [ArrayConstructor, StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly multiple: boolean;
            readonly disabled: boolean;
            readonly autocomplete: string;
            readonly loading: boolean;
            readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly unmountOnClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly suffixIcon: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>;
            readonly allowCreate: boolean;
            readonly valueKey: string;
            readonly remote: boolean;
            readonly popperClass: string;
            readonly popperOptions: Record<string, any>;
            readonly multipleLimit: number;
            readonly reserveKeyword: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly collapseTagsTooltip: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly maxCollapseTags: number;
            readonly persistent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly clearIcon: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>;
            readonly fitInputWidth: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly tagType: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>;
            readonly remoteShowSuffix: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly suffixTransition: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly automaticDropdown: boolean;
            readonly filterable: boolean;
            readonly defaultFirstOption: boolean;
            readonly collapseTags: boolean;
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
        readonly name: StringConstructor;
        readonly id: StringConstructor;
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [ArrayConstructor, StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
        readonly autocomplete: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
        readonly automaticDropdown: BooleanConstructor;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
        readonly clearable: BooleanConstructor;
        readonly filterable: BooleanConstructor;
        readonly allowCreate: BooleanConstructor;
        readonly loading: BooleanConstructor;
        readonly popperClass: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly popperOptions: import("@tu-view-plus/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => void, boolean>;
        readonly remote: BooleanConstructor;
        readonly loadingText: StringConstructor;
        readonly noMatchText: StringConstructor;
        readonly noDataText: StringConstructor;
        readonly remoteMethod: FunctionConstructor;
        readonly filterMethod: FunctionConstructor;
        readonly multiple: BooleanConstructor;
        readonly multipleLimit: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        readonly placeholder: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly defaultFirstOption: BooleanConstructor;
        readonly reserveKeyword: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly valueKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "value", boolean>;
        readonly collapseTags: BooleanConstructor;
        readonly collapseTagsTooltip: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly maxCollapseTags: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
        readonly persistent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly clearIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown, import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
        readonly fitInputWidth: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly suffixIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown, import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
        readonly tagType: {
            readonly default: "up";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly remoteShowSuffix: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly suffixTransition: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly unmountOnClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly popupContainer: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly name: StringConstructor;
    readonly id: StringConstructor;
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [ArrayConstructor, StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown, undefined, boolean>;
    readonly autocomplete: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
    readonly automaticDropdown: BooleanConstructor;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly filterable: BooleanConstructor;
    readonly allowCreate: BooleanConstructor;
    readonly loading: BooleanConstructor;
    readonly popperClass: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly popperOptions: import("@tu-view-plus/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => void, boolean>;
    readonly remote: BooleanConstructor;
    readonly loadingText: StringConstructor;
    readonly noMatchText: StringConstructor;
    readonly noDataText: StringConstructor;
    readonly remoteMethod: FunctionConstructor;
    readonly filterMethod: FunctionConstructor;
    readonly multiple: BooleanConstructor;
    readonly multipleLimit: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly placeholder: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultFirstOption: BooleanConstructor;
    readonly reserveKeyword: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly valueKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "value", boolean>;
    readonly collapseTags: BooleanConstructor;
    readonly collapseTagsTooltip: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly maxCollapseTags: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    readonly persistent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly clearIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown, import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
    readonly fitInputWidth: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly suffixIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown, import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
    readonly tagType: {
        readonly default: "up";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly remoteShowSuffix: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly suffixTransition: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly unmountOnClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly popupContainer: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, {
    readonly clearable: boolean;
    readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<readonly [ArrayConstructor, StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly multiple: boolean;
    readonly disabled: boolean;
    readonly autocomplete: string;
    readonly loading: boolean;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly unmountOnClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly suffixIcon: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>;
    readonly allowCreate: boolean;
    readonly valueKey: string;
    readonly remote: boolean;
    readonly popperClass: string;
    readonly popperOptions: Record<string, any>;
    readonly multipleLimit: number;
    readonly reserveKeyword: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly collapseTagsTooltip: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly maxCollapseTags: number;
    readonly persistent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly clearIcon: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>;
    readonly fitInputWidth: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly tagType: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "up" | "down", unknown>;
    readonly remoteShowSuffix: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly suffixTransition: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly automaticDropdown: boolean;
    readonly filterable: boolean;
    readonly defaultFirstOption: boolean;
    readonly collapseTags: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix?(_: {}): any;
        default?(_: {}): any;
    };
})> & {
    SelectOption: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly created: boolean;
                readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }> & Omit<{
                readonly value: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
                readonly created: boolean;
                readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly label?: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
                readonly value: {
                    readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly label: {
                    readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly created: BooleanConstructor;
                readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            }>>, "created" | "disabled">;
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
                readonly value: {
                    readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly label: {
                    readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly created: BooleanConstructor;
                readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                readonly created: boolean;
                readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
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
            readonly value: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>>;
                readonly required: true;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly label: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly created: BooleanConstructor;
            readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        readonly value: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>>;
            readonly required: true;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly label: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly created: BooleanConstructor;
        readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        readonly created: boolean;
        readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};
export declare const TuSelectOption: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly created: boolean;
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }> & Omit<{
            readonly value: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>;
            readonly created: boolean;
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly label?: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly value: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>>;
                readonly required: true;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly label: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly created: BooleanConstructor;
            readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        }>>, "created" | "disabled">;
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
            readonly value: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>>;
                readonly required: true;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly label: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly created: BooleanConstructor;
            readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            readonly created: boolean;
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
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
        readonly value: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>>;
            readonly required: true;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly label: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly created: BooleanConstructor;
        readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly value: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, ObjectConstructor], unknown, unknown>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly label: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly created: BooleanConstructor;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly created: boolean;
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
export default TuSelect;
export * from './src/select';
