import Form from './src/form.vue';
import FormItem from './src/form-item.vue';
export declare const TuForm: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly inline: boolean;
            readonly disabled: boolean;
            readonly labelWidth: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly inlineMessage: boolean;
            readonly showMessage: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly labelPosition: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "left" | "right" | "top", unknown>;
            readonly requireAsteriskPosition: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "left" | "right", unknown>;
            readonly labelSuffix: string;
            readonly validateOnRuleChange: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly statusIcon: boolean;
            readonly hideRequiredAsterisk: boolean;
            readonly scrollToError: boolean;
        }> & Omit<{
            readonly inline: boolean;
            readonly disabled: boolean;
            readonly labelWidth: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly inlineMessage: boolean;
            readonly showMessage: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly labelPosition: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "left" | "right" | "top", unknown>;
            readonly requireAsteriskPosition: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "left" | "right", unknown>;
            readonly labelSuffix: string;
            readonly validateOnRuleChange: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly statusIcon: boolean;
            readonly hideRequiredAsterisk: boolean;
            readonly scrollToError: boolean;
            readonly size?: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never> | undefined;
            readonly rules?: Partial<Record<string, import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>>> | undefined;
            readonly scrollIntoViewOptions?: import("@tu-view-plus/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown> | undefined;
            readonly model?: Record<string, any> | undefined;
            onValidate?: ((prop: import("./src/form-item").FormItemProp, isValid: boolean, message: string) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly model: ObjectConstructor;
            readonly rules: {
                readonly type: import("vue").PropType<Partial<Record<string, import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>>>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly labelPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "left" | "right" | "top", unknown, "right", boolean>;
            readonly requireAsteriskPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
            readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly labelSuffix: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly inline: BooleanConstructor;
            readonly inlineMessage: BooleanConstructor;
            readonly statusIcon: BooleanConstructor;
            readonly showMessage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly validateOnRuleChange: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly hideRequiredAsterisk: BooleanConstructor;
            readonly scrollToError: BooleanConstructor;
            readonly scrollIntoViewOptions: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly size: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
        }>> & {
            onValidate?: ((prop: import("./src/form-item").FormItemProp, isValid: boolean, message: string) => any) | undefined;
        }, "inline" | "disabled" | "labelWidth" | "inlineMessage" | "showMessage" | "labelPosition" | "requireAsteriskPosition" | "labelSuffix" | "validateOnRuleChange" | "statusIcon" | "hideRequiredAsterisk" | "scrollToError">;
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
        $emit: (event: "validate", prop: import("./src/form-item").FormItemProp, isValid: boolean, message: string) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly model: ObjectConstructor;
            readonly rules: {
                readonly type: import("vue").PropType<Partial<Record<string, import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>>>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly labelPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "left" | "right" | "top", unknown, "right", boolean>;
            readonly requireAsteriskPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
            readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly labelSuffix: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly inline: BooleanConstructor;
            readonly inlineMessage: BooleanConstructor;
            readonly statusIcon: BooleanConstructor;
            readonly showMessage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly validateOnRuleChange: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly hideRequiredAsterisk: BooleanConstructor;
            readonly scrollToError: BooleanConstructor;
            readonly scrollIntoViewOptions: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly size: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
        }>> & {
            onValidate?: ((prop: import("./src/form-item").FormItemProp, isValid: boolean, message: string) => any) | undefined;
        }, {
            validate: (callback?: import("./src/types").FormValidateCallback | undefined) => import("./src/types").FormValidationResult;
            validateField: (props?: import("@tu-view-plus/utils").Arrayable<import("./src/form-item").FormItemProp> | undefined, callback?: import("./src/types").FormValidateCallback | undefined) => import("./src/types").FormValidationResult;
            resetFields: (props?: import("@tu-view-plus/utils").Arrayable<import("./src/form-item").FormItemProp> | undefined) => void;
            clearValidate: (props?: import("@tu-view-plus/utils").Arrayable<import("./src/form-item").FormItemProp> | undefined) => void;
            scrollToField: (prop: import("./src/form-item").FormItemProp) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            validate: (prop: import("./src/form-item").FormItemProp, isValid: boolean, message: string) => void;
        }, string, {
            readonly inline: boolean;
            readonly disabled: boolean;
            readonly labelWidth: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly inlineMessage: boolean;
            readonly showMessage: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly labelPosition: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "left" | "right" | "top", unknown>;
            readonly requireAsteriskPosition: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "left" | "right", unknown>;
            readonly labelSuffix: string;
            readonly validateOnRuleChange: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly statusIcon: boolean;
            readonly hideRequiredAsterisk: boolean;
            readonly scrollToError: boolean;
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
        readonly model: ObjectConstructor;
        readonly rules: {
            readonly type: import("vue").PropType<Partial<Record<string, import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>>>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly labelPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "left" | "right" | "top", unknown, "right", boolean>;
        readonly requireAsteriskPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
        readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
        readonly labelSuffix: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly inline: BooleanConstructor;
        readonly inlineMessage: BooleanConstructor;
        readonly statusIcon: BooleanConstructor;
        readonly showMessage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly validateOnRuleChange: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly hideRequiredAsterisk: BooleanConstructor;
        readonly scrollToError: BooleanConstructor;
        readonly scrollIntoViewOptions: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
    }>> & {
        onValidate?: ((prop: import("./src/form-item").FormItemProp, isValid: boolean, message: string) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        validate: (callback?: import("./src/types").FormValidateCallback | undefined) => import("./src/types").FormValidationResult;
        validateField: (props?: import("@tu-view-plus/utils").Arrayable<import("./src/form-item").FormItemProp> | undefined, callback?: import("./src/types").FormValidateCallback | undefined) => import("./src/types").FormValidationResult;
        resetFields: (props?: import("@tu-view-plus/utils").Arrayable<import("./src/form-item").FormItemProp> | undefined) => void;
        clearValidate: (props?: import("@tu-view-plus/utils").Arrayable<import("./src/form-item").FormItemProp> | undefined) => void;
        scrollToField: (prop: import("./src/form-item").FormItemProp) => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly model: ObjectConstructor;
    readonly rules: {
        readonly type: import("vue").PropType<Partial<Record<string, import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly labelPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "left" | "right" | "top", unknown, "right", boolean>;
    readonly requireAsteriskPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly labelSuffix: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly inline: BooleanConstructor;
    readonly inlineMessage: BooleanConstructor;
    readonly statusIcon: BooleanConstructor;
    readonly showMessage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly validateOnRuleChange: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly hideRequiredAsterisk: BooleanConstructor;
    readonly scrollToError: BooleanConstructor;
    readonly scrollIntoViewOptions: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
}>> & {
    onValidate?: ((prop: import("./src/form-item").FormItemProp, isValid: boolean, message: string) => any) | undefined;
}, {
    validate: (callback?: import("./src/types").FormValidateCallback | undefined) => import("./src/types").FormValidationResult;
    validateField: (props?: import("@tu-view-plus/utils").Arrayable<import("./src/form-item").FormItemProp> | undefined, callback?: import("./src/types").FormValidateCallback | undefined) => import("./src/types").FormValidationResult;
    resetFields: (props?: import("@tu-view-plus/utils").Arrayable<import("./src/form-item").FormItemProp> | undefined) => void;
    clearValidate: (props?: import("@tu-view-plus/utils").Arrayable<import("./src/form-item").FormItemProp> | undefined) => void;
    scrollToField: (prop: import("./src/form-item").FormItemProp) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    validate: (prop: import("./src/form-item").FormItemProp, isValid: boolean, message: string) => void;
}, string, {
    readonly inline: boolean;
    readonly disabled: boolean;
    readonly labelWidth: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly inlineMessage: boolean;
    readonly showMessage: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly labelPosition: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "left" | "right" | "top", unknown>;
    readonly requireAsteriskPosition: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "left" | "right", unknown>;
    readonly labelSuffix: string;
    readonly validateOnRuleChange: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly statusIcon: boolean;
    readonly hideRequiredAsterisk: boolean;
    readonly scrollToError: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & {
    FormItem: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly required: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly labelWidth: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly inlineMessage: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
                readonly showMessage: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }> & Omit<{
                readonly labelWidth: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly inlineMessage: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
                readonly showMessage: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly size?: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never> | undefined;
                readonly prop?: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp))[], unknown, unknown> | undefined;
                readonly error?: string | undefined;
                readonly label?: string | undefined;
                readonly required?: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
                readonly rules?: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>) | ((new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>))[], unknown, unknown> | undefined;
                readonly validateStatus?: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown> | undefined;
                readonly for?: string | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
                readonly label: StringConstructor;
                readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly prop: {
                    readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly required: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
                readonly rules: {
                    readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>) | ((new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly error: StringConstructor;
                readonly validateStatus: {
                    readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly for: StringConstructor;
                readonly inlineMessage: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
                readonly showMessage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly size: {
                    readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>>, "required" | "labelWidth" | "inlineMessage" | "showMessage">;
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
                readonly label: StringConstructor;
                readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly prop: {
                    readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly required: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
                readonly rules: {
                    readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>) | ((new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly error: StringConstructor;
                readonly validateStatus: {
                    readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly for: StringConstructor;
                readonly inlineMessage: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
                readonly showMessage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly size: {
                    readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>>, {
                size: import("vue").ComputedRef<"" | "small" | "medium" | "large" | "mini">;
                validateMessage: import("vue").Ref<string>;
                validateState: import("vue").Ref<"" | "error" | "success" | "validating">;
                validate: (trigger: string, callback?: import("./src/types").FormValidateCallback | undefined) => import("./src/types").FormValidationResult;
                clearValidate: () => void;
                resetField: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                readonly required: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly labelWidth: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly inlineMessage: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
                readonly showMessage: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
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
            readonly label: StringConstructor;
            readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly prop: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly required: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
            readonly rules: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>) | ((new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly error: StringConstructor;
            readonly validateStatus: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly for: StringConstructor;
            readonly inlineMessage: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
            readonly showMessage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly size: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>> & import("vue").ShallowUnwrapRef<{
            size: import("vue").ComputedRef<"" | "small" | "medium" | "large" | "mini">;
            validateMessage: import("vue").Ref<string>;
            validateState: import("vue").Ref<"" | "error" | "success" | "validating">;
            validate: (trigger: string, callback?: import("./src/types").FormValidateCallback | undefined) => import("./src/types").FormValidationResult;
            clearValidate: () => void;
            resetField: () => void;
        }> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        readonly label: StringConstructor;
        readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
        readonly prop: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly required: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly rules: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>) | ((new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly error: StringConstructor;
        readonly validateStatus: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly for: StringConstructor;
        readonly inlineMessage: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
        readonly showMessage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly size: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>>, {
        size: import("vue").ComputedRef<"" | "small" | "medium" | "large" | "mini">;
        validateMessage: import("vue").Ref<string>;
        validateState: import("vue").Ref<"" | "error" | "success" | "validating">;
        validate: (trigger: string, callback?: import("./src/types").FormValidateCallback | undefined) => import("./src/types").FormValidationResult;
        clearValidate: () => void;
        resetField: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        readonly required: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly labelWidth: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly inlineMessage: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
        readonly showMessage: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            label?(_: {
                label: string;
            }): any;
            default?(_: {}): any;
            error?(_: {
                error: string;
            }): any;
        };
    });
};
export declare const TuFormItem: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly required: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly labelWidth: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly inlineMessage: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
            readonly showMessage: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }> & Omit<{
            readonly labelWidth: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly inlineMessage: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
            readonly showMessage: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly size?: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never> | undefined;
            readonly prop?: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp))[], unknown, unknown> | undefined;
            readonly error?: string | undefined;
            readonly label?: string | undefined;
            readonly required?: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            readonly rules?: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>) | ((new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>))[], unknown, unknown> | undefined;
            readonly validateStatus?: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown> | undefined;
            readonly for?: string | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly label: StringConstructor;
            readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly prop: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly required: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
            readonly rules: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>) | ((new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly error: StringConstructor;
            readonly validateStatus: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly for: StringConstructor;
            readonly inlineMessage: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
            readonly showMessage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly size: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, "required" | "labelWidth" | "inlineMessage" | "showMessage">;
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
            readonly label: StringConstructor;
            readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly prop: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly required: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
            readonly rules: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>) | ((new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly error: StringConstructor;
            readonly validateStatus: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly for: StringConstructor;
            readonly inlineMessage: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
            readonly showMessage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly size: {
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, {
            size: import("vue").ComputedRef<"" | "small" | "medium" | "large" | "mini">;
            validateMessage: import("vue").Ref<string>;
            validateState: import("vue").Ref<"" | "error" | "success" | "validating">;
            validate: (trigger: string, callback?: import("./src/types").FormValidateCallback | undefined) => import("./src/types").FormValidationResult;
            clearValidate: () => void;
            resetField: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            readonly required: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly labelWidth: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly inlineMessage: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
            readonly showMessage: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
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
        readonly label: StringConstructor;
        readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
        readonly prop: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly required: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly rules: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>) | ((new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly error: StringConstructor;
        readonly validateStatus: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly for: StringConstructor;
        readonly inlineMessage: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
        readonly showMessage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly size: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>> & import("vue").ShallowUnwrapRef<{
        size: import("vue").ComputedRef<"" | "small" | "medium" | "large" | "mini">;
        validateMessage: import("vue").Ref<string>;
        validateState: import("vue").Ref<"" | "error" | "success" | "validating">;
        validate: (trigger: string, callback?: import("./src/types").FormValidateCallback | undefined) => import("./src/types").FormValidationResult;
        clearValidate: () => void;
        resetField: () => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly label: StringConstructor;
    readonly labelWidth: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly prop: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import("./src/form-item").FormItemProp))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly required: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly rules: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>) | ((new (...args: any[]) => import("./src/types").FormItemRule | import("./src/types").FormItemRule[]) | (() => import("@tu-view-plus/utils").Arrayable<import("./src/types").FormItemRule>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly error: StringConstructor;
    readonly validateStatus: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly for: StringConstructor;
    readonly inlineMessage: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
    readonly showMessage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>>, {
    size: import("vue").ComputedRef<"" | "small" | "medium" | "large" | "mini">;
    validateMessage: import("vue").Ref<string>;
    validateState: import("vue").Ref<"" | "error" | "success" | "validating">;
    validate: (trigger: string, callback?: import("./src/types").FormValidateCallback | undefined) => import("./src/types").FormValidationResult;
    clearValidate: () => void;
    resetField: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly required: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly labelWidth: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly inlineMessage: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
    readonly showMessage: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        label?(_: {
            label: string;
        }): any;
        default?(_: {}): any;
        error?(_: {
            error: string;
        }): any;
    };
})>;
export default TuForm;
export * from './src/form';
export * from './src/form-item';
export * from './src/types';
export * from './src/constants';
export * from './src/hooks';
export type FormInstance = InstanceType<typeof Form>;
export type FormItemInstance = InstanceType<typeof FormItem>;
