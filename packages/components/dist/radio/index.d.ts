export declare const TuRadio: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            label: import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
            modelValue: import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
            type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>;
            border: boolean;
            size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            disabled: boolean;
            name: string;
        }> & Omit<{
            readonly label: import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
            readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>;
            readonly border: boolean;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly disabled: boolean;
            readonly name: string;
            onChange?: ((val: string | number | boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, string, boolean>;
            size: {
                default: string;
                type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                required: false;
                validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            disabled: BooleanConstructor;
            label: import("@tu-view-plus/utils").EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
            modelValue: import("@tu-view-plus/utils").EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
            name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
            border: BooleanConstructor;
        }>> & {
            onChange?: ((val: string | number | boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
        }, "label" | "modelValue" | "type" | "border" | "size" | "disabled" | "name">;
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
        $emit: ((event: "change", val: string | number | boolean) => void) & ((event: "update:modelValue", val: string | number | boolean) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, string, boolean>;
            size: {
                default: string;
                type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                required: false;
                validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            disabled: BooleanConstructor;
            label: import("@tu-view-plus/utils").EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
            modelValue: import("@tu-view-plus/utils").EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
            name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
            border: BooleanConstructor;
        }>> & {
            onChange?: ((val: string | number | boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            change: (val: string | number | boolean) => void;
            "update:modelValue": (val: string | number | boolean) => void;
        }, string, {
            label: import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
            modelValue: import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
            type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>;
            border: boolean;
            size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            disabled: boolean;
            name: string;
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
        type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, string, boolean>;
        size: {
            default: string;
            type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            required: false;
            validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        disabled: BooleanConstructor;
        label: import("@tu-view-plus/utils").EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
        modelValue: import("@tu-view-plus/utils").EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
        name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
        border: BooleanConstructor;
    }>> & {
        onChange?: ((val: string | number | boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, string, boolean>;
    size: {
        default: string;
        type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    label: import("@tu-view-plus/utils").EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
    modelValue: import("@tu-view-plus/utils").EpPropFinalized<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
    name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    border: BooleanConstructor;
}>> & {
    onChange?: ((val: string | number | boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (val: string | number | boolean) => void;
    "update:modelValue": (val: string | number | boolean) => void;
}, string, {
    label: import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
    modelValue: import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | NumberConstructor | StringConstructor)[], unknown, unknown>;
    type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>;
    border: boolean;
    size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    disabled: boolean;
    name: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & {
    RadioGroup: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly label: string;
                readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
                readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>;
                readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                readonly disabled: boolean;
                readonly name: string;
                readonly id: string;
                readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly textColor: string;
            }> & Omit<{
                readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
                readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>;
                readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                readonly disabled: boolean;
                readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly textColor: string;
                readonly label?: string | undefined;
                readonly name?: string | undefined;
                readonly id?: string | undefined;
                onChange?: ((val: string | number | boolean) => any) | undefined;
                "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
                readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, "", boolean>;
                readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly size: {
                    readonly default: "medium";
                    readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    readonly __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
                readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly textColor: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            }>> & {
                onChange?: ((val: string | number | boolean) => any) | undefined;
                "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
            }, "label" | "modelValue" | "type" | "size" | "disabled" | "name" | "id" | "validateEvent" | "textColor">;
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
            $emit: ((event: "change", val: string | number | boolean) => void) & ((event: "update:modelValue", val: string | number | boolean) => void);
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, "", boolean>;
                readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly size: {
                    readonly default: "medium";
                    readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    readonly __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
                readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly textColor: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            }>> & {
                onChange?: ((val: string | number | boolean) => any) | undefined;
                "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                change: (val: string | number | boolean) => void;
                "update:modelValue": (val: string | number | boolean) => void;
            }, string, {
                readonly label: string;
                readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
                readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>;
                readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
                readonly disabled: boolean;
                readonly name: string;
                readonly id: string;
                readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly textColor: string;
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
            readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, "", boolean>;
            readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
            readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly textColor: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }>> & {
            onChange?: ((val: string | number | boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, "", boolean>;
        readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
        readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly textColor: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onChange?: ((val: string | number | boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (val: string | number | boolean) => void;
        "update:modelValue": (val: string | number | boolean) => void;
    }, string, {
        readonly label: string;
        readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
        readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>;
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly disabled: boolean;
        readonly name: string;
        readonly id: string;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly textColor: string;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};
export default TuRadio;
export declare const TuRadioGroup: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly label: string;
            readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly disabled: boolean;
            readonly name: string;
            readonly id: string;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly textColor: string;
        }> & Omit<{
            readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly disabled: boolean;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly textColor: string;
            readonly label?: string | undefined;
            readonly name?: string | undefined;
            readonly id?: string | undefined;
            onChange?: ((val: string | number | boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, "", boolean>;
            readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
            readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly textColor: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }>> & {
            onChange?: ((val: string | number | boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
        }, "label" | "modelValue" | "type" | "size" | "disabled" | "name" | "id" | "validateEvent" | "textColor">;
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
        $emit: ((event: "change", val: string | number | boolean) => void) & ((event: "update:modelValue", val: string | number | boolean) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, "", boolean>;
            readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
            readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly textColor: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }>> & {
            onChange?: ((val: string | number | boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            change: (val: string | number | boolean) => void;
            "update:modelValue": (val: string | number | boolean) => void;
        }, string, {
            readonly label: string;
            readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>;
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
            readonly disabled: boolean;
            readonly name: string;
            readonly id: string;
            readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly textColor: string;
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
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, "", boolean>;
        readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
        readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly textColor: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onChange?: ((val: string | number | boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "button" | "border", unknown, "", boolean>;
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
    readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly textColor: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly name: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
    onChange?: ((val: string | number | boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (val: string | number | boolean) => void;
    "update:modelValue": (val: string | number | boolean) => void;
}, string, {
    readonly label: string;
    readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "button" | "border", unknown>;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly disabled: boolean;
    readonly name: string;
    readonly id: string;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly textColor: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
export * from './src/radio';
export * from './src/radio-group';
