export declare const TuInputTag: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly readonly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
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
            readonly focused: boolean;
            readonly uninjectFormItemContext: boolean;
            readonly defaultValue: (string | number | import("./src/interface").TagData)[];
            readonly defaultInputValue: string;
            readonly maxTagCount: number;
            readonly uniqueValue: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly disabledInput: boolean;
        }> & Omit<{
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly readonly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
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
            readonly focused: boolean;
            readonly uninjectFormItemContext: boolean;
            readonly defaultValue: (string | number | import("./src/interface").TagData)[];
            readonly defaultInputValue: string;
            readonly maxTagCount: number;
            readonly uniqueValue: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly disabledInput: boolean;
            readonly size?: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never> | undefined;
            readonly placeholder?: string | undefined;
            readonly modelValue?: (string | number | import("./src/interface").TagData)[] | undefined;
            readonly inputValue?: string | undefined;
            readonly baseClass?: string | undefined;
            readonly formatTag?: ((data: import("./src/interface").TagData) => string) | undefined;
            readonly fieldNames?: import("@tu-view-plus/utils").FieldString<import("./src/interface").TagData> | undefined;
            onFocus?: ((evt: FocusEvent) => any) | undefined;
            onBlur?: ((evt: FocusEvent) => any) | undefined;
            onChange?: ((value: (string | number | import("./src/interface").TagData)[], evt: Event) => any) | undefined;
            onMouseenter?: ((evt: MouseEvent) => any) | undefined;
            onMouseleave?: ((evt: MouseEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: (string | number | import("./src/interface").TagData)[]) => any) | undefined;
            onClear?: ((evt: MouseEvent) => any) | undefined;
            "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
            onInputValueChange?: ((inputValue: string, evt: Event) => any) | undefined;
            onRemove?: ((removed: string | number, evt: Event) => any) | undefined;
            onPressEnter?: ((inputValue: string, evt: KeyboardEvent) => any) | undefined;
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
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
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
            readonly baseClass: StringConstructor;
            readonly focused: BooleanConstructor;
            readonly disabledInput: BooleanConstructor;
            readonly uninjectFormItemContext: BooleanConstructor;
        }>> & {
            onFocus?: ((evt: FocusEvent) => any) | undefined;
            onBlur?: ((evt: FocusEvent) => any) | undefined;
            onChange?: ((value: (string | number | import("./src/interface").TagData)[], evt: Event) => any) | undefined;
            onMouseenter?: ((evt: MouseEvent) => any) | undefined;
            onMouseleave?: ((evt: MouseEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: (string | number | import("./src/interface").TagData)[]) => any) | undefined;
            onClear?: ((evt: MouseEvent) => any) | undefined;
            "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
            onInputValueChange?: ((inputValue: string, evt: Event) => any) | undefined;
            onRemove?: ((removed: string | number, evt: Event) => any) | undefined;
            onPressEnter?: ((inputValue: string, evt: KeyboardEvent) => any) | undefined;
        }, "disabled" | "error" | "readonly" | "allowClear" | "retainInputValue" | "focused" | "uninjectFormItemContext" | "defaultValue" | "defaultInputValue" | "maxTagCount" | "uniqueValue" | "disabledInput">;
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
        $emit: ((event: "clear", evt: MouseEvent) => void) & ((event: "blur", evt: FocusEvent) => void) & ((event: "change", value: (string | number | import("./src/interface").TagData)[], evt: Event) => void) & ((event: "focus", evt: FocusEvent) => void) & ((event: "mouseenter", evt: MouseEvent) => void) & ((event: "mouseleave", evt: MouseEvent) => void) & ((event: "update:modelValue", value: (string | number | import("./src/interface").TagData)[]) => void) & ((event: "remove", removed: string | number, evt: Event) => void) & ((event: "update:inputValue", inputValue: string) => void) & ((event: "inputValueChange", inputValue: string, evt: Event) => void) & ((event: "pressEnter", inputValue: string, evt: KeyboardEvent) => void);
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
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
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
            readonly baseClass: StringConstructor;
            readonly focused: BooleanConstructor;
            readonly disabledInput: BooleanConstructor;
            readonly uninjectFormItemContext: BooleanConstructor;
        }>> & {
            onFocus?: ((evt: FocusEvent) => any) | undefined;
            onBlur?: ((evt: FocusEvent) => any) | undefined;
            onChange?: ((value: (string | number | import("./src/interface").TagData)[], evt: Event) => any) | undefined;
            onMouseenter?: ((evt: MouseEvent) => any) | undefined;
            onMouseleave?: ((evt: MouseEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: (string | number | import("./src/interface").TagData)[]) => any) | undefined;
            onClear?: ((evt: MouseEvent) => any) | undefined;
            "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
            onInputValueChange?: ((inputValue: string, evt: Event) => any) | undefined;
            onRemove?: ((removed: string | number, evt: Event) => any) | undefined;
            onPressEnter?: ((inputValue: string, evt: KeyboardEvent) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            clear: (evt: MouseEvent) => void;
            blur: (evt: FocusEvent) => void;
            change: (value: (string | number | import("./src/interface").TagData)[], evt: Event) => void;
            focus: (evt: FocusEvent) => void;
            mouseenter: (evt: MouseEvent) => void;
            mouseleave: (evt: MouseEvent) => void;
            "update:modelValue": (value: (string | number | import("./src/interface").TagData)[]) => void;
            remove: (removed: string | number, evt: Event) => void;
            "update:inputValue": (inputValue: string) => void;
            inputValueChange: (inputValue: string, evt: Event) => void;
            pressEnter: (inputValue: string, evt: KeyboardEvent) => void;
        }, string, {
            readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly readonly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
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
            readonly focused: boolean;
            readonly uninjectFormItemContext: boolean;
            readonly defaultValue: (string | number | import("./src/interface").TagData)[];
            readonly defaultInputValue: string;
            readonly maxTagCount: number;
            readonly uniqueValue: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly disabledInput: boolean;
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
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
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
        readonly baseClass: StringConstructor;
        readonly focused: BooleanConstructor;
        readonly disabledInput: BooleanConstructor;
        readonly uninjectFormItemContext: BooleanConstructor;
    }>> & {
        onFocus?: ((evt: FocusEvent) => any) | undefined;
        onBlur?: ((evt: FocusEvent) => any) | undefined;
        onChange?: ((value: (string | number | import("./src/interface").TagData)[], evt: Event) => any) | undefined;
        onMouseenter?: ((evt: MouseEvent) => any) | undefined;
        onMouseleave?: ((evt: MouseEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: (string | number | import("./src/interface").TagData)[]) => any) | undefined;
        onClear?: ((evt: MouseEvent) => any) | undefined;
        "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
        onInputValueChange?: ((inputValue: string, evt: Event) => any) | undefined;
        onRemove?: ((removed: string | number, evt: Event) => any) | undefined;
        onPressEnter?: ((inputValue: string, evt: KeyboardEvent) => any) | undefined;
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
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
    readonly baseClass: StringConstructor;
    readonly focused: BooleanConstructor;
    readonly disabledInput: BooleanConstructor;
    readonly uninjectFormItemContext: BooleanConstructor;
}>> & {
    onFocus?: ((evt: FocusEvent) => any) | undefined;
    onBlur?: ((evt: FocusEvent) => any) | undefined;
    onChange?: ((value: (string | number | import("./src/interface").TagData)[], evt: Event) => any) | undefined;
    onMouseenter?: ((evt: MouseEvent) => any) | undefined;
    onMouseleave?: ((evt: MouseEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: (string | number | import("./src/interface").TagData)[]) => any) | undefined;
    onClear?: ((evt: MouseEvent) => any) | undefined;
    "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
    onInputValueChange?: ((inputValue: string, evt: Event) => any) | undefined;
    onRemove?: ((removed: string | number, evt: Event) => any) | undefined;
    onPressEnter?: ((inputValue: string, evt: KeyboardEvent) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clear: (evt: MouseEvent) => void;
    blur: (evt: FocusEvent) => void;
    change: (value: (string | number | import("./src/interface").TagData)[], evt: Event) => void;
    focus: (evt: FocusEvent) => void;
    mouseenter: (evt: MouseEvent) => void;
    mouseleave: (evt: MouseEvent) => void;
    "update:modelValue": (value: (string | number | import("./src/interface").TagData)[]) => void;
    remove: (removed: string | number, evt: Event) => void;
    "update:inputValue": (inputValue: string) => void;
    inputValueChange: (inputValue: string, evt: Event) => void;
    pressEnter: (inputValue: string, evt: KeyboardEvent) => void;
}, string, {
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly readonly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
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
    readonly focused: boolean;
    readonly uninjectFormItemContext: boolean;
    readonly defaultValue: (string | number | import("./src/interface").TagData)[];
    readonly defaultInputValue: string;
    readonly maxTagCount: number;
    readonly uniqueValue: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly disabledInput: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix?(_: {}): any;
        suffix?(_: {}): any;
    };
})> & Record<string, any>;
export default TuInputTag;
export * from './src/input-tag';
