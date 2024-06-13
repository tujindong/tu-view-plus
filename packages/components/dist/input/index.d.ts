export declare const TuInput: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly size: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
        readonly autocomplete: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
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
        readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly showPassword: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly showWordLimit: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly suffixIcon: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly prefixIcon: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly containerRole: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly tabindex: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly inputStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
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
        input: import("vue").ShallowRef<HTMLInputElement | undefined>;
        ref: import("vue").ComputedRef<HTMLInputElement | undefined>;
        focus: () => Promise<void>;
        blur: () => void | undefined;
        select: () => void | undefined;
        clear: () => void;
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
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly size: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
        readonly autocomplete: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
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
        readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly showPassword: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly showWordLimit: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly suffixIcon: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly prefixIcon: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly containerRole: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly tabindex: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly inputStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
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
        readonly autocomplete: string;
        readonly readonly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly id: string;
        readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown>;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly tabindex: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly showPassword: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly showWordLimit: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly containerRole: string;
        readonly inputStyle: import("vue").StyleValue;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly size: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
        readonly autocomplete: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
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
        readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly showPassword: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly showWordLimit: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly suffixIcon: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly prefixIcon: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly containerRole: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly tabindex: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly inputStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
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
        input: import("vue").ShallowRef<HTMLInputElement | undefined>;
        ref: import("vue").ComputedRef<HTMLInputElement | undefined>;
        focus: () => Promise<void>;
        blur: () => void | undefined;
        select: () => void | undefined;
        clear: () => void;
    }, {}, {}, {}, {
        readonly label: string;
        readonly disabled: boolean;
        readonly type: string;
        readonly autocomplete: string;
        readonly readonly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly id: string;
        readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown>;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly tabindex: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly showPassword: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly showWordLimit: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly containerRole: string;
        readonly inputStyle: import("vue").StyleValue;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
    readonly autocomplete: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
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
    readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showPassword: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showWordLimit: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly suffixIcon: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly prefixIcon: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly containerRole: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly tabindex: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly inputStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
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
    input: import("vue").ShallowRef<HTMLInputElement | undefined>;
    ref: import("vue").ComputedRef<HTMLInputElement | undefined>;
    focus: () => Promise<void>;
    blur: () => void | undefined;
    select: () => void | undefined;
    clear: () => void;
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
}, string, {
    readonly label: string;
    readonly disabled: boolean;
    readonly type: string;
    readonly autocomplete: string;
    readonly readonly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly id: string;
    readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly tabindex: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly showPassword: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly showWordLimit: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly containerRole: string;
    readonly inputStyle: import("vue").StyleValue;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prepend?(_: {}): any;
        prefix?(_: {}): any;
        suffix?(_: {}): any;
        append?(_: {}): any;
    };
})> & Record<string, any>;
export default TuInput;
export * from './src/input';
