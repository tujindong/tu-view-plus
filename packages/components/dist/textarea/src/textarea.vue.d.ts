import type { StyleValue } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
    readonly disabled: BooleanConstructor;
    readonly autocomplete: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
    readonly showWordLimit: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly resize: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly autosize: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
        minRows?: number | undefined;
        maxRows?: number | undefined;
    }) | (() => import("./textarea").TextareaAutoSize) | ((new (...args: any[]) => boolean | {
        minRows?: number | undefined;
        maxRows?: number | undefined;
    }) | (() => import("./textarea").TextareaAutoSize))[], unknown, unknown, false, boolean>;
    readonly placeholder: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly form: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly readonly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly clearable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
    readonly formatter: {
        readonly type: import("vue").PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly parser: {
        readonly type: import("vue").PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly containerRole: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly tabindex: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly textareaStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
}, {
    textarea: import("vue").ShallowRef<HTMLTextAreaElement | undefined>;
    ref: import("vue").ComputedRef<HTMLTextAreaElement | undefined>;
    textareaStyle: import("vue").ComputedRef<StyleValue>;
    autosize: import("vue").Ref<import("./textarea").TextareaAutoSize>;
    focus: () => Promise<void>;
    blur: () => void | undefined;
    select: () => void | undefined;
    clear: () => void;
    resizeTextarea: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: string) => void;
    clear: () => void;
    blur: (evt: FocusEvent) => void;
    change: (value: string) => void;
    compositionend: (evt: CompositionEvent) => void;
    compositionstart: (evt: CompositionEvent) => void;
    compositionupdate: (evt: CompositionEvent) => void;
    focus: (evt: FocusEvent) => void;
    keydown: (evt: Event | KeyboardEvent) => void;
    mouseenter: (evt: MouseEvent) => void;
    mouseleave: (evt: MouseEvent) => void;
    "update:modelValue": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
    readonly disabled: BooleanConstructor;
    readonly autocomplete: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
    readonly showWordLimit: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly resize: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly autosize: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
        minRows?: number | undefined;
        maxRows?: number | undefined;
    }) | (() => import("./textarea").TextareaAutoSize) | ((new (...args: any[]) => boolean | {
        minRows?: number | undefined;
        maxRows?: number | undefined;
    }) | (() => import("./textarea").TextareaAutoSize))[], unknown, unknown, false, boolean>;
    readonly placeholder: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly form: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly readonly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly clearable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
    readonly formatter: {
        readonly type: import("vue").PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly parser: {
        readonly type: import("vue").PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly containerRole: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly tabindex: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly textareaStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
}>> & {
    onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
    onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
    onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
    onFocus?: ((evt: FocusEvent) => any) | undefined;
    onBlur?: ((evt: FocusEvent) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onInput?: ((value: string) => any) | undefined;
    onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
    onMouseenter?: ((evt: MouseEvent) => any) | undefined;
    onMouseleave?: ((evt: MouseEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onClear?: (() => any) | undefined;
}, {
    readonly label: string;
    readonly disabled: boolean;
    readonly type: string;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>;
    readonly id: string;
    readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly tabindex: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly autocomplete: string;
    readonly readonly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly clearable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly showWordLimit: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly containerRole: string;
    readonly autosize: import("./textarea").TextareaAutoSize;
    readonly textareaStyle: StyleValue;
}, {}>;
export default _default;
