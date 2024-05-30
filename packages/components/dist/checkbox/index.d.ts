export declare const TuCheckbox: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor, BooleanConstructor], unknown, unknown, undefined, boolean>;
        readonly label: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor, NumberConstructor, ObjectConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly indeterminate: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly checked: BooleanConstructor;
        readonly name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly trueLabel: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
        readonly falseLabel: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
        readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly controls: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "border" | "button", unknown, "", boolean>;
        readonly size: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly tabindex: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onChange?: ((val: import("./src/constants").CheckboxValueType, evt: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((val: import("./src/constants").CheckboxValueType) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (val: import("./src/constants").CheckboxValueType, evt: Event) => void;
        "update:modelValue": (val: import("./src/constants").CheckboxValueType) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor, BooleanConstructor], unknown, unknown, undefined, boolean>;
        readonly label: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor, NumberConstructor, ObjectConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly indeterminate: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly checked: BooleanConstructor;
        readonly name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly trueLabel: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
        readonly falseLabel: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
        readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly controls: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "border" | "button", unknown, "", boolean>;
        readonly size: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly tabindex: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onChange?: ((val: import("./src/constants").CheckboxValueType, evt: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((val: import("./src/constants").CheckboxValueType) => any) | undefined;
    }, {
        readonly disabled: boolean;
        readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "border" | "button", unknown>;
        readonly name: string;
        readonly id: string;
        readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor, BooleanConstructor], unknown, unknown>;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly trueLabel: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly falseLabel: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly controls: string;
        readonly tabindex: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly indeterminate: boolean;
        readonly checked: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor, BooleanConstructor], unknown, unknown, undefined, boolean>;
        readonly label: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor, NumberConstructor, ObjectConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly indeterminate: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly checked: BooleanConstructor;
        readonly name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly trueLabel: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
        readonly falseLabel: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
        readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly controls: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "border" | "button", unknown, "", boolean>;
        readonly size: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly tabindex: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onChange?: ((val: import("./src/constants").CheckboxValueType, evt: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((val: import("./src/constants").CheckboxValueType) => any) | undefined;
    }, {}, {}, {}, {}, {
        readonly disabled: boolean;
        readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "border" | "button", unknown>;
        readonly name: string;
        readonly id: string;
        readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor, BooleanConstructor], unknown, unknown>;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly trueLabel: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly falseLabel: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly controls: string;
        readonly tabindex: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly indeterminate: boolean;
        readonly checked: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor, BooleanConstructor], unknown, unknown, undefined, boolean>;
    readonly label: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor, NumberConstructor, ObjectConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly indeterminate: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly checked: BooleanConstructor;
    readonly name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly trueLabel: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
    readonly falseLabel: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly controls: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "border" | "button", unknown, "", boolean>;
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly tabindex: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
    onChange?: ((val: import("./src/constants").CheckboxValueType, evt: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((val: import("./src/constants").CheckboxValueType) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (val: import("./src/constants").CheckboxValueType, evt: Event) => void;
    "update:modelValue": (val: import("./src/constants").CheckboxValueType) => void;
}, string, {
    readonly disabled: boolean;
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "border" | "button", unknown>;
    readonly name: string;
    readonly id: string;
    readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor, BooleanConstructor], unknown, unknown>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly trueLabel: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly falseLabel: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly controls: string;
    readonly tabindex: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly indeterminate: boolean;
    readonly checked: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & {
    CheckboxGroup: {
        new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/constants").CheckboxGroupValueType) | (() => import("./src/constants").CheckboxGroupValueType) | ((new (...args: any[]) => import("./src/constants").CheckboxGroupValueType) | (() => import("./src/constants").CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
            readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "border" | "button", unknown, "", boolean>;
            readonly disabled: BooleanConstructor;
            readonly min: NumberConstructor;
            readonly max: NumberConstructor;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly label: StringConstructor;
            readonly textColor: StringConstructor;
            readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }>> & {
            onChange?: ((val: import("./src/constants").CheckboxValueType[]) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("./src/constants").CheckboxGroupValueType) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            change: (val: import("./src/constants").CheckboxValueType[]) => void;
            "update:modelValue": (val: import("./src/constants").CheckboxGroupValueType) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/constants").CheckboxGroupValueType) | (() => import("./src/constants").CheckboxGroupValueType) | ((new (...args: any[]) => import("./src/constants").CheckboxGroupValueType) | (() => import("./src/constants").CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
            readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "border" | "button", unknown, "", boolean>;
            readonly disabled: BooleanConstructor;
            readonly min: NumberConstructor;
            readonly max: NumberConstructor;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly label: StringConstructor;
            readonly textColor: StringConstructor;
            readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }>> & {
            onChange?: ((val: import("./src/constants").CheckboxValueType[]) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("./src/constants").CheckboxGroupValueType) => any) | undefined;
        }, {
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly disabled: boolean;
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "border" | "button", unknown>;
            readonly tag: string;
            readonly modelValue: import("./src/constants").CheckboxGroupValueType;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/constants").CheckboxGroupValueType) | (() => import("./src/constants").CheckboxGroupValueType) | ((new (...args: any[]) => import("./src/constants").CheckboxGroupValueType) | (() => import("./src/constants").CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
            readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "border" | "button", unknown, "", boolean>;
            readonly disabled: BooleanConstructor;
            readonly min: NumberConstructor;
            readonly max: NumberConstructor;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly label: StringConstructor;
            readonly textColor: StringConstructor;
            readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }>> & {
            onChange?: ((val: import("./src/constants").CheckboxValueType[]) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("./src/constants").CheckboxGroupValueType) => any) | undefined;
        }, {}, {}, {}, {}, {
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly disabled: boolean;
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "border" | "button", unknown>;
            readonly tag: string;
            readonly modelValue: import("./src/constants").CheckboxGroupValueType;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/constants").CheckboxGroupValueType) | (() => import("./src/constants").CheckboxGroupValueType) | ((new (...args: any[]) => import("./src/constants").CheckboxGroupValueType) | (() => import("./src/constants").CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "border" | "button", unknown, "", boolean>;
        readonly disabled: BooleanConstructor;
        readonly min: NumberConstructor;
        readonly max: NumberConstructor;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly label: StringConstructor;
        readonly textColor: StringConstructor;
        readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onChange?: ((val: import("./src/constants").CheckboxValueType[]) => any) | undefined;
        "onUpdate:modelValue"?: ((val: import("./src/constants").CheckboxGroupValueType) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (val: import("./src/constants").CheckboxValueType[]) => void;
        "update:modelValue": (val: import("./src/constants").CheckboxGroupValueType) => void;
    }, string, {
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly disabled: boolean;
        readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "border" | "button", unknown>;
        readonly tag: string;
        readonly modelValue: import("./src/constants").CheckboxGroupValueType;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};
export declare const TuCheckboxGroup: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/constants").CheckboxGroupValueType) | (() => import("./src/constants").CheckboxGroupValueType) | ((new (...args: any[]) => import("./src/constants").CheckboxGroupValueType) | (() => import("./src/constants").CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "border" | "button", unknown, "", boolean>;
        readonly disabled: BooleanConstructor;
        readonly min: NumberConstructor;
        readonly max: NumberConstructor;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly label: StringConstructor;
        readonly textColor: StringConstructor;
        readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onChange?: ((val: import("./src/constants").CheckboxValueType[]) => any) | undefined;
        "onUpdate:modelValue"?: ((val: import("./src/constants").CheckboxGroupValueType) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (val: import("./src/constants").CheckboxValueType[]) => void;
        "update:modelValue": (val: import("./src/constants").CheckboxGroupValueType) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/constants").CheckboxGroupValueType) | (() => import("./src/constants").CheckboxGroupValueType) | ((new (...args: any[]) => import("./src/constants").CheckboxGroupValueType) | (() => import("./src/constants").CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "border" | "button", unknown, "", boolean>;
        readonly disabled: BooleanConstructor;
        readonly min: NumberConstructor;
        readonly max: NumberConstructor;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly label: StringConstructor;
        readonly textColor: StringConstructor;
        readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onChange?: ((val: import("./src/constants").CheckboxValueType[]) => any) | undefined;
        "onUpdate:modelValue"?: ((val: import("./src/constants").CheckboxGroupValueType) => any) | undefined;
    }, {
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly disabled: boolean;
        readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "border" | "button", unknown>;
        readonly tag: string;
        readonly modelValue: import("./src/constants").CheckboxGroupValueType;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/constants").CheckboxGroupValueType) | (() => import("./src/constants").CheckboxGroupValueType) | ((new (...args: any[]) => import("./src/constants").CheckboxGroupValueType) | (() => import("./src/constants").CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "border" | "button", unknown, "", boolean>;
        readonly disabled: BooleanConstructor;
        readonly min: NumberConstructor;
        readonly max: NumberConstructor;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly label: StringConstructor;
        readonly textColor: StringConstructor;
        readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onChange?: ((val: import("./src/constants").CheckboxValueType[]) => any) | undefined;
        "onUpdate:modelValue"?: ((val: import("./src/constants").CheckboxGroupValueType) => any) | undefined;
    }, {}, {}, {}, {}, {
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly disabled: boolean;
        readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "border" | "button", unknown>;
        readonly tag: string;
        readonly modelValue: import("./src/constants").CheckboxGroupValueType;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/constants").CheckboxGroupValueType) | (() => import("./src/constants").CheckboxGroupValueType) | ((new (...args: any[]) => import("./src/constants").CheckboxGroupValueType) | (() => import("./src/constants").CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "border" | "button", unknown, "", boolean>;
    readonly disabled: BooleanConstructor;
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly label: StringConstructor;
    readonly textColor: StringConstructor;
    readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
    onChange?: ((val: import("./src/constants").CheckboxValueType[]) => any) | undefined;
    "onUpdate:modelValue"?: ((val: import("./src/constants").CheckboxGroupValueType) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (val: import("./src/constants").CheckboxValueType[]) => void;
    "update:modelValue": (val: import("./src/constants").CheckboxGroupValueType) => void;
}, string, {
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly disabled: boolean;
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "border" | "button", unknown>;
    readonly tag: string;
    readonly modelValue: import("./src/constants").CheckboxGroupValueType;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
export * from './src/checkbox';
export * from './src/checkbox-group';
export * from './src/constants';
