export declare const TuButton: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        disabled: BooleanConstructor;
        size: {
            default: string;
            type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            required: false;
            validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown, string, boolean>;
        icon: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        nativeType: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, string, boolean>;
        loading: BooleanConstructor;
        loadingIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
        autofocus: BooleanConstructor;
        round: BooleanConstructor;
        circle: BooleanConstructor;
        long: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }, {
        ref: import("vue").Ref<HTMLButtonElement | undefined>;
        size: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        type: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown>>;
        disabled: boolean;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (evt: MouseEvent) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        disabled: BooleanConstructor;
        size: {
            default: string;
            type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            required: false;
            validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown, string, boolean>;
        icon: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        nativeType: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, string, boolean>;
        loading: BooleanConstructor;
        loadingIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
        autofocus: BooleanConstructor;
        round: BooleanConstructor;
        circle: BooleanConstructor;
        long: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }, {
        circle: boolean;
        size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        disabled: boolean;
        round: boolean;
        type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown>;
        autofocus: boolean;
        loading: boolean;
        nativeType: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>;
        loadingIcon: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>;
        long: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        disabled: BooleanConstructor;
        size: {
            default: string;
            type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            required: false;
            validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown, string, boolean>;
        icon: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        nativeType: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, string, boolean>;
        loading: BooleanConstructor;
        loadingIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
        autofocus: BooleanConstructor;
        round: BooleanConstructor;
        circle: BooleanConstructor;
        long: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }, {
        ref: import("vue").Ref<HTMLButtonElement | undefined>;
        size: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        type: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown>>;
        disabled: boolean;
    }, {}, {}, {}, {
        circle: boolean;
        size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        disabled: boolean;
        round: boolean;
        type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown>;
        autofocus: boolean;
        loading: boolean;
        nativeType: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>;
        loadingIcon: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>;
        long: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    disabled: BooleanConstructor;
    size: {
        default: string;
        type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown, string, boolean>;
    icon: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    nativeType: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, string, boolean>;
    loading: BooleanConstructor;
    loadingIcon: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, boolean>;
    autofocus: BooleanConstructor;
    round: BooleanConstructor;
    circle: BooleanConstructor;
    long: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    ref: import("vue").Ref<HTMLButtonElement | undefined>;
    size: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
    type: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown>>;
    disabled: boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
}, string, {
    circle: boolean;
    size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    disabled: boolean;
    round: boolean;
    type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown>;
    autofocus: boolean;
    loading: boolean;
    nativeType: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>;
    loadingIcon: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>;
    long: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        loading?(_: {}): any;
        icon?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TuButton;
export declare const TuButtonGroup: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly size: {
            default: string;
            type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            required: false;
            validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown, string, boolean>;
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly size: {
            default: string;
            type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            required: false;
            validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown, string, boolean>;
    }>>, {
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly size: {
            default: string;
            type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
            required: false;
            validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown, string, boolean>;
    }>>, {}, {}, {}, {}, {
        readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
        readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown>;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly size: {
        default: string;
        type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown, string, boolean>;
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export * from './src/button';
export * from './src/constants';
