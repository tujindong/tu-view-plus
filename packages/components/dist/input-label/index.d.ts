export declare const TuInputLabel: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string) => boolean;
    'update:inputValue': (inputValue: string) => boolean;
    input: (value: string, evt: Event) => boolean;
    change: (value: string, evt: Event) => boolean;
    inputValueChange: (value: import("../select-view/src/interface").SelectViewValue) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}, {
    readonly disabled: boolean;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly inputValue: string;
    readonly enabledInput: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly retainInputValue: boolean;
    readonly focused: boolean;
    readonly uninjectFormItemContext: boolean;
}, {}>> & Record<string, any>;
export default TuInputLabel;
export * from './src/input-label';
