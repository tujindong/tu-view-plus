export declare const TuInputLabel: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly disabled: boolean;
            readonly inputValue: string;
            readonly enabledInput: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly retainInputValue: boolean;
            readonly focused: boolean;
            readonly uninjectFormItemContext: boolean;
        }> & Omit<{
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly disabled: boolean;
            readonly inputValue: string;
            readonly enabledInput: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly retainInputValue: boolean;
            readonly focused: boolean;
            readonly uninjectFormItemContext: boolean;
            readonly placeholder?: string | undefined;
            readonly modelValue?: import("../select-view/src/interface").SelectViewValue | undefined;
            readonly formatLabel?: ((data?: import("../select-view/src/interface").SelectViewValue | undefined) => string) | undefined;
            readonly baseClass?: string | undefined;
            onFocus?: ((evt: FocusEvent) => any) | undefined;
            onBlur?: ((evt: FocusEvent) => any) | undefined;
            onChange?: ((value: string, evt: Event) => any) | undefined;
            onInput?: ((value: string, evt: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
            onInputValueChange?: ((value: import("../select-view/src/interface").SelectViewValue) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly modelValue: {
                readonly type: import("vue").PropType<import("../select-view/src/interface").SelectViewValue>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly inputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly enabledInput: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly formatLabel: {
                readonly type: import("vue").PropType<(data?: import("../select-view/src/interface").SelectViewValue | undefined) => string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: StringConstructor;
            readonly retainInputValue: BooleanConstructor;
            readonly disabled: BooleanConstructor;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly baseClass: StringConstructor;
            readonly focused: BooleanConstructor;
            readonly uninjectFormItemContext: BooleanConstructor;
        }>> & {
            onFocus?: ((evt: FocusEvent) => any) | undefined;
            onBlur?: ((evt: FocusEvent) => any) | undefined;
            onChange?: ((value: string, evt: Event) => any) | undefined;
            onInput?: ((value: string, evt: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
            onInputValueChange?: ((value: import("../select-view/src/interface").SelectViewValue) => any) | undefined;
        }, "size" | "disabled" | "inputValue" | "enabledInput" | "retainInputValue" | "focused" | "uninjectFormItemContext">;
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
        $emit: ((event: "input", value: string, evt: Event) => void) & ((event: "blur", evt: FocusEvent) => void) & ((event: "change", value: string, evt: Event) => void) & ((event: "focus", evt: FocusEvent) => void) & ((event: "update:modelValue", value: string) => void) & ((event: "update:inputValue", inputValue: string) => void) & ((event: "inputValueChange", value: import("../select-view/src/interface").SelectViewValue) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly modelValue: {
                readonly type: import("vue").PropType<import("../select-view/src/interface").SelectViewValue>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly inputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly enabledInput: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly formatLabel: {
                readonly type: import("vue").PropType<(data?: import("../select-view/src/interface").SelectViewValue | undefined) => string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: StringConstructor;
            readonly retainInputValue: BooleanConstructor;
            readonly disabled: BooleanConstructor;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly baseClass: StringConstructor;
            readonly focused: BooleanConstructor;
            readonly uninjectFormItemContext: BooleanConstructor;
        }>> & {
            onFocus?: ((evt: FocusEvent) => any) | undefined;
            onBlur?: ((evt: FocusEvent) => any) | undefined;
            onChange?: ((value: string, evt: Event) => any) | undefined;
            onInput?: ((value: string, evt: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
            onInputValueChange?: ((value: import("../select-view/src/interface").SelectViewValue) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            input: (value: string, evt: Event) => void;
            blur: (evt: FocusEvent) => void;
            change: (value: string, evt: Event) => void;
            focus: (evt: FocusEvent) => void;
            "update:modelValue": (value: string) => void;
            "update:inputValue": (inputValue: string) => void;
            inputValueChange: (value: import("../select-view/src/interface").SelectViewValue) => void;
        }, string, {
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly disabled: boolean;
            readonly inputValue: string;
            readonly enabledInput: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly retainInputValue: boolean;
            readonly focused: boolean;
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
            readonly type: import("vue").PropType<import("../select-view/src/interface").SelectViewValue>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly inputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly enabledInput: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly formatLabel: {
            readonly type: import("vue").PropType<(data?: import("../select-view/src/interface").SelectViewValue | undefined) => string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly placeholder: StringConstructor;
        readonly retainInputValue: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly baseClass: StringConstructor;
        readonly focused: BooleanConstructor;
        readonly uninjectFormItemContext: BooleanConstructor;
    }>> & {
        onFocus?: ((evt: FocusEvent) => any) | undefined;
        onBlur?: ((evt: FocusEvent) => any) | undefined;
        onChange?: ((value: string, evt: Event) => any) | undefined;
        onInput?: ((value: string, evt: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
        onInputValueChange?: ((value: import("../select-view/src/interface").SelectViewValue) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("../select-view/src/interface").SelectViewValue>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly inputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly enabledInput: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly formatLabel: {
        readonly type: import("vue").PropType<(data?: import("../select-view/src/interface").SelectViewValue | undefined) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly placeholder: StringConstructor;
    readonly retainInputValue: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly baseClass: StringConstructor;
    readonly focused: BooleanConstructor;
    readonly uninjectFormItemContext: BooleanConstructor;
}>> & {
    onFocus?: ((evt: FocusEvent) => any) | undefined;
    onBlur?: ((evt: FocusEvent) => any) | undefined;
    onChange?: ((value: string, evt: Event) => any) | undefined;
    onInput?: ((value: string, evt: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
    onInputValueChange?: ((value: import("../select-view/src/interface").SelectViewValue) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: string, evt: Event) => void;
    blur: (evt: FocusEvent) => void;
    change: (value: string, evt: Event) => void;
    focus: (evt: FocusEvent) => void;
    "update:modelValue": (value: string) => void;
    "update:inputValue": (inputValue: string) => void;
    inputValueChange: (value: import("../select-view/src/interface").SelectViewValue) => void;
}, string, {
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly disabled: boolean;
    readonly inputValue: string;
    readonly enabledInput: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly retainInputValue: boolean;
    readonly focused: boolean;
    readonly uninjectFormItemContext: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix?(_: {}): any;
        suffix?(_: {}): any;
    };
})> & Record<string, any>;
export default TuInputLabel;
export * from './src/input-label';
