export declare const TuCheckbox: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<{
            readonly disabled: boolean;
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "border" | "button", unknown>;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly tabindex: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly indeterminate: boolean;
            readonly checked: boolean;
            readonly size?: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never> | undefined;
            readonly label?: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor, NumberConstructor, ObjectConstructor], unknown, unknown> | undefined;
            readonly name?: string | undefined;
            readonly id?: string | undefined;
            readonly modelValue?: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor, BooleanConstructor], unknown, unknown> | undefined;
            readonly trueLabel?: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
            readonly falseLabel?: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
            readonly controls?: string | undefined;
            onChange?: ((val: import("./src/constants").CheckboxValueType, evt: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("./src/constants").CheckboxValueType) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
        }, "disabled" | "type" | "name" | "id" | "modelValue" | "validateEvent" | "trueLabel" | "falseLabel" | "controls" | "tabindex" | "indeterminate" | "checked">;
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
        $emit: ((event: "change", val: import("./src/constants").CheckboxValueType, evt: Event) => void) & ((event: "update:modelValue", val: import("./src/constants").CheckboxValueType) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
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
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                readonly disabled: boolean;
                readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "border" | "button", unknown>;
                readonly modelValue: import("./src/constants").CheckboxGroupValueType;
                readonly tag: string;
                readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }> & Omit<{
                readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                readonly disabled: boolean;
                readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "border" | "button", unknown>;
                readonly modelValue: import("./src/constants").CheckboxGroupValueType;
                readonly tag: string;
                readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly label?: string | undefined;
                readonly max?: number | undefined;
                readonly min?: number | undefined;
                readonly textColor?: string | undefined;
                onChange?: ((val: import("./src/constants").CheckboxValueType[]) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("./src/constants").CheckboxGroupValueType) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
            }, "size" | "disabled" | "type" | "modelValue" | "tag" | "validateEvent">;
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
            $emit: ((event: "change", val: import("./src/constants").CheckboxValueType[]) => void) & ((event: "update:modelValue", val: import("./src/constants").CheckboxGroupValueType) => void);
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
                readonly modelValue: import("./src/constants").CheckboxGroupValueType;
                readonly tag: string;
                readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
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
        } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
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
        readonly modelValue: import("./src/constants").CheckboxGroupValueType;
        readonly tag: string;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};
export declare const TuCheckboxGroup: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly disabled: boolean;
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "border" | "button", unknown>;
            readonly modelValue: import("./src/constants").CheckboxGroupValueType;
            readonly tag: string;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }> & Omit<{
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly disabled: boolean;
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "border" | "button", unknown>;
            readonly modelValue: import("./src/constants").CheckboxGroupValueType;
            readonly tag: string;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly label?: string | undefined;
            readonly max?: number | undefined;
            readonly min?: number | undefined;
            readonly textColor?: string | undefined;
            onChange?: ((val: import("./src/constants").CheckboxValueType[]) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("./src/constants").CheckboxGroupValueType) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
        }, "size" | "disabled" | "type" | "modelValue" | "tag" | "validateEvent">;
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
        $emit: ((event: "change", val: import("./src/constants").CheckboxValueType[]) => void) & ((event: "update:modelValue", val: import("./src/constants").CheckboxGroupValueType) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
            readonly modelValue: import("./src/constants").CheckboxGroupValueType;
            readonly tag: string;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
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
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
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
    readonly modelValue: import("./src/constants").CheckboxGroupValueType;
    readonly tag: string;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
export * from './src/checkbox';
export * from './src/checkbox-group';
export * from './src/constants';
