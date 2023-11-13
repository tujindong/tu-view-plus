export declare const TuInputTag: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultValue: (string | number | import("./src/interface").TagData)[];
            readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly readonly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultInputValue: string;
            readonly maxTagCount: number;
            readonly retainInputValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }) | (() => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }) | ((new (...args: any[]) => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }) | (() => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }))[], unknown, unknown>;
            readonly uniqueValue: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly focused: boolean;
            readonly disabledInput: boolean;
            readonly uninjectFormItemContext: boolean;
        }> & Omit<{
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultValue: (string | number | import("./src/interface").TagData)[];
            readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly readonly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultInputValue: string;
            readonly maxTagCount: number;
            readonly retainInputValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }) | (() => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }) | ((new (...args: any[]) => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }) | (() => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }))[], unknown, unknown>;
            readonly uniqueValue: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly focused: boolean;
            readonly disabledInput: boolean;
            readonly uninjectFormItemContext: boolean;
            readonly placeholder?: string | undefined;
            readonly modelValue?: (string | number | import("./src/interface").TagData)[] | undefined;
            readonly formatTag?: ((data: import("./src/interface").TagData) => string) | undefined;
            readonly fieldNames?: import("@tu-view-plus/utils").FieldString<import("./src/interface").TagData> | undefined;
            readonly inputValue?: string | undefined;
            readonly baseCls?: string | undefined;
            onFocus?: ((ev: FocusEvent) => any) | undefined;
            onBlur?: ((ev: FocusEvent) => any) | undefined;
            onChange?: ((value: (string | number | import("./src/interface").TagData)[], ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: (string | number | import("./src/interface").TagData)[]) => any) | undefined;
            onClear?: ((ev: MouseEvent) => any) | undefined;
            onRemove?: ((removed: string | number, ev: Event) => any) | undefined;
            "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
            onInputValueChange?: ((inputValue: string, ev: Event) => any) | undefined;
            onPressEnter?: ((inputValue: string, ev: KeyboardEvent) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly modelValue: {
                readonly type: import("vue").PropType<(string | number | import("./src/interface").TagData)[]>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly defaultValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | import("./src/interface").TagData)[]) | (() => (string | number | import("./src/interface").TagData)[]) | ((new (...args: any[]) => (string | number | import("./src/interface").TagData)[]) | (() => (string | number | import("./src/interface").TagData)[]))[], unknown, unknown, () => never[], boolean>;
            readonly inputValue: StringConstructor;
            readonly defaultInputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly placeholder: StringConstructor;
            readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly error: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly readonly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly maxTagCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            readonly retainInputValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }) | (() => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }) | ((new (...args: any[]) => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }) | (() => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }))[], unknown, unknown, false, boolean>;
            readonly formatTag: {
                readonly type: import("vue").PropType<(data: import("./src/interface").TagData) => string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly uniqueValue: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly fieldNames: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").FieldString<import("./src/interface").TagData>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly baseCls: StringConstructor;
            readonly focused: BooleanConstructor;
            readonly disabledInput: BooleanConstructor;
            readonly uninjectFormItemContext: BooleanConstructor;
        }>> & {
            onFocus?: ((ev: FocusEvent) => any) | undefined;
            onBlur?: ((ev: FocusEvent) => any) | undefined;
            onChange?: ((value: (string | number | import("./src/interface").TagData)[], ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: (string | number | import("./src/interface").TagData)[]) => any) | undefined;
            onClear?: ((ev: MouseEvent) => any) | undefined;
            onRemove?: ((removed: string | number, ev: Event) => any) | undefined;
            "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
            onInputValueChange?: ((inputValue: string, ev: Event) => any) | undefined;
            onPressEnter?: ((inputValue: string, ev: KeyboardEvent) => any) | undefined;
        }, "disabled" | "defaultValue" | "allowClear" | "size" | "error" | "readonly" | "defaultInputValue" | "maxTagCount" | "retainInputValue" | "uniqueValue" | "focused" | "disabledInput" | "uninjectFormItemContext">;
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
        $emit: ((event: "clear", ev: MouseEvent) => void) & ((event: "blur", ev: FocusEvent) => void) & ((event: "change", value: (string | number | import("./src/interface").TagData)[], ev: Event) => void) & ((event: "focus", ev: FocusEvent) => void) & ((event: "update:modelValue", value: (string | number | import("./src/interface").TagData)[]) => void) & ((event: "remove", removed: string | number, ev: Event) => void) & ((event: "update:inputValue", inputValue: string) => void) & ((event: "inputValueChange", inputValue: string, ev: Event) => void) & ((event: "pressEnter", inputValue: string, ev: KeyboardEvent) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly modelValue: {
                readonly type: import("vue").PropType<(string | number | import("./src/interface").TagData)[]>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly defaultValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | import("./src/interface").TagData)[]) | (() => (string | number | import("./src/interface").TagData)[]) | ((new (...args: any[]) => (string | number | import("./src/interface").TagData)[]) | (() => (string | number | import("./src/interface").TagData)[]))[], unknown, unknown, () => never[], boolean>;
            readonly inputValue: StringConstructor;
            readonly defaultInputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly placeholder: StringConstructor;
            readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly error: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly readonly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly maxTagCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            readonly retainInputValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }) | (() => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }) | ((new (...args: any[]) => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }) | (() => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }))[], unknown, unknown, false, boolean>;
            readonly formatTag: {
                readonly type: import("vue").PropType<(data: import("./src/interface").TagData) => string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly uniqueValue: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly fieldNames: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").FieldString<import("./src/interface").TagData>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly baseCls: StringConstructor;
            readonly focused: BooleanConstructor;
            readonly disabledInput: BooleanConstructor;
            readonly uninjectFormItemContext: BooleanConstructor;
        }>> & {
            onFocus?: ((ev: FocusEvent) => any) | undefined;
            onBlur?: ((ev: FocusEvent) => any) | undefined;
            onChange?: ((value: (string | number | import("./src/interface").TagData)[], ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: (string | number | import("./src/interface").TagData)[]) => any) | undefined;
            onClear?: ((ev: MouseEvent) => any) | undefined;
            onRemove?: ((removed: string | number, ev: Event) => any) | undefined;
            "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
            onInputValueChange?: ((inputValue: string, ev: Event) => any) | undefined;
            onPressEnter?: ((inputValue: string, ev: KeyboardEvent) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            clear: (ev: MouseEvent) => void;
            blur: (ev: FocusEvent) => void;
            change: (value: (string | number | import("./src/interface").TagData)[], ev: Event) => void;
            focus: (ev: FocusEvent) => void;
            "update:modelValue": (value: (string | number | import("./src/interface").TagData)[]) => void;
            remove: (removed: string | number, ev: Event) => void;
            "update:inputValue": (inputValue: string) => void;
            inputValueChange: (inputValue: string, ev: Event) => void;
            pressEnter: (inputValue: string, ev: KeyboardEvent) => void;
        }, string, {
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultValue: (string | number | import("./src/interface").TagData)[];
            readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly readonly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly defaultInputValue: string;
            readonly maxTagCount: number;
            readonly retainInputValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }) | (() => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }) | ((new (...args: any[]) => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }) | (() => boolean | {
                create?: boolean | undefined;
                blur?: boolean | undefined;
            }))[], unknown, unknown>;
            readonly uniqueValue: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly focused: boolean;
            readonly disabledInput: boolean;
            readonly uninjectFormItemContext: boolean;
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
        readonly modelValue: {
            readonly type: import("vue").PropType<(string | number | import("./src/interface").TagData)[]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly defaultValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | import("./src/interface").TagData)[]) | (() => (string | number | import("./src/interface").TagData)[]) | ((new (...args: any[]) => (string | number | import("./src/interface").TagData)[]) | (() => (string | number | import("./src/interface").TagData)[]))[], unknown, unknown, () => never[], boolean>;
        readonly inputValue: StringConstructor;
        readonly defaultInputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly placeholder: StringConstructor;
        readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly error: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly readonly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly maxTagCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        readonly retainInputValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
            create?: boolean | undefined;
            blur?: boolean | undefined;
        }) | (() => boolean | {
            create?: boolean | undefined;
            blur?: boolean | undefined;
        }) | ((new (...args: any[]) => boolean | {
            create?: boolean | undefined;
            blur?: boolean | undefined;
        }) | (() => boolean | {
            create?: boolean | undefined;
            blur?: boolean | undefined;
        }))[], unknown, unknown, false, boolean>;
        readonly formatTag: {
            readonly type: import("vue").PropType<(data: import("./src/interface").TagData) => string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly uniqueValue: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly fieldNames: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").FieldString<import("./src/interface").TagData>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly baseCls: StringConstructor;
        readonly focused: BooleanConstructor;
        readonly disabledInput: BooleanConstructor;
        readonly uninjectFormItemContext: BooleanConstructor;
    }>> & {
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: (string | number | import("./src/interface").TagData)[], ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: (string | number | import("./src/interface").TagData)[]) => any) | undefined;
        onClear?: ((ev: MouseEvent) => any) | undefined;
        onRemove?: ((removed: string | number, ev: Event) => any) | undefined;
        "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
        onInputValueChange?: ((inputValue: string, ev: Event) => any) | undefined;
        onPressEnter?: ((inputValue: string, ev: KeyboardEvent) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<(string | number | import("./src/interface").TagData)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | import("./src/interface").TagData)[]) | (() => (string | number | import("./src/interface").TagData)[]) | ((new (...args: any[]) => (string | number | import("./src/interface").TagData)[]) | (() => (string | number | import("./src/interface").TagData)[]))[], unknown, unknown, () => never[], boolean>;
    readonly inputValue: StringConstructor;
    readonly defaultInputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly placeholder: StringConstructor;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly error: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly readonly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly maxTagCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly retainInputValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | (() => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | ((new (...args: any[]) => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | (() => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }))[], unknown, unknown, false, boolean>;
    readonly formatTag: {
        readonly type: import("vue").PropType<(data: import("./src/interface").TagData) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly uniqueValue: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly fieldNames: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").FieldString<import("./src/interface").TagData>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly baseCls: StringConstructor;
    readonly focused: BooleanConstructor;
    readonly disabledInput: BooleanConstructor;
    readonly uninjectFormItemContext: BooleanConstructor;
}>> & {
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: (string | number | import("./src/interface").TagData)[], ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: (string | number | import("./src/interface").TagData)[]) => any) | undefined;
    onClear?: ((ev: MouseEvent) => any) | undefined;
    onRemove?: ((removed: string | number, ev: Event) => any) | undefined;
    "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
    onInputValueChange?: ((inputValue: string, ev: Event) => any) | undefined;
    onPressEnter?: ((inputValue: string, ev: KeyboardEvent) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clear: (ev: MouseEvent) => void;
    blur: (ev: FocusEvent) => void;
    change: (value: (string | number | import("./src/interface").TagData)[], ev: Event) => void;
    focus: (ev: FocusEvent) => void;
    "update:modelValue": (value: (string | number | import("./src/interface").TagData)[]) => void;
    remove: (removed: string | number, ev: Event) => void;
    "update:inputValue": (inputValue: string) => void;
    inputValueChange: (inputValue: string, ev: Event) => void;
    pressEnter: (inputValue: string, ev: KeyboardEvent) => void;
}, string, {
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultValue: (string | number | import("./src/interface").TagData)[];
    readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly readonly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultInputValue: string;
    readonly maxTagCount: number;
    readonly retainInputValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | (() => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | ((new (...args: any[]) => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | (() => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }))[], unknown, unknown>;
    readonly uniqueValue: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly focused: boolean;
    readonly disabledInput: boolean;
    readonly uninjectFormItemContext: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix?(_: {}): any;
    };
})> & Record<string, any>;
export default TuInputTag;
export * from './src/input-tag';
