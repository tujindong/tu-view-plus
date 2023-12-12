export declare const TuAvatar: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: number;
            shape: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown>;
            effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "line" | "up" | "down", unknown>;
            autoFixFontSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            triggerType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "mask" | "button") | (() => "mask" | "button") | ((new (...args: any[]) => "mask" | "button") | (() => "mask" | "button"))[], "mask" | "button", unknown>;
        }> & Omit<{
            readonly size: number;
            readonly shape: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown>;
            readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "line" | "up" | "down", unknown>;
            readonly autoFixFontSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly triggerType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "mask" | "button") | (() => "mask" | "button") | ((new (...args: any[]) => "mask" | "button") | (() => "mask" | "button"))[], "mask" | "button", unknown>;
            readonly color?: string | undefined;
            readonly background?: string | undefined;
            readonly imageUrl?: string | undefined;
            readonly triggerIconStyle?: import("vue").CSSProperties | undefined;
            onLoad?: (() => any) | undefined;
            onError?: (() => any) | undefined;
            onClick?: ((e: Event) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            shape: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown, string, boolean>;
            imageUrl: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            size: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
            autoFixFontSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
            triggerType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "mask" | "button") | (() => "mask" | "button") | ((new (...args: any[]) => "mask" | "button") | (() => "mask" | "button"))[], "mask" | "button", unknown, string, boolean>;
            triggerIconStyle: {
                readonly type: import("vue").PropType<import("vue").CSSProperties>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "line" | "up" | "down", unknown, string, boolean>;
            background: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            color: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>> & {
            onLoad?: (() => any) | undefined;
            onError?: (() => any) | undefined;
            onClick?: ((e: Event) => any) | undefined;
        }, "size" | "shape" | "effect" | "autoFixFontSize" | "triggerType">;
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
        $emit: ((event: "click", e: Event) => void) & ((event: "error") => void) & ((event: "load") => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            shape: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown, string, boolean>;
            imageUrl: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            size: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
            autoFixFontSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
            triggerType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "mask" | "button") | (() => "mask" | "button") | ((new (...args: any[]) => "mask" | "button") | (() => "mask" | "button"))[], "mask" | "button", unknown, string, boolean>;
            triggerIconStyle: {
                readonly type: import("vue").PropType<import("vue").CSSProperties>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "line" | "up" | "down", unknown, string, boolean>;
            background: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            color: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>> & {
            onLoad?: (() => any) | undefined;
            onError?: (() => any) | undefined;
            onClick?: ((e: Event) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (e: Event) => void;
            error: () => void;
            load: () => void;
        }, string, {
            size: number;
            shape: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown>;
            effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "line" | "up" | "down", unknown>;
            autoFixFontSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            triggerType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "mask" | "button") | (() => "mask" | "button") | ((new (...args: any[]) => "mask" | "button") | (() => "mask" | "button"))[], "mask" | "button", unknown>;
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
        shape: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown, string, boolean>;
        imageUrl: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        size: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
        autoFixFontSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
        triggerType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "mask" | "button") | (() => "mask" | "button") | ((new (...args: any[]) => "mask" | "button") | (() => "mask" | "button"))[], "mask" | "button", unknown, string, boolean>;
        triggerIconStyle: {
            readonly type: import("vue").PropType<import("vue").CSSProperties>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "line" | "up" | "down", unknown, string, boolean>;
        background: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        color: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>> & {
        onLoad?: (() => any) | undefined;
        onError?: (() => any) | undefined;
        onClick?: ((e: Event) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    shape: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown, string, boolean>;
    imageUrl: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    autoFixFontSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    triggerType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "mask" | "button") | (() => "mask" | "button") | ((new (...args: any[]) => "mask" | "button") | (() => "mask" | "button"))[], "mask" | "button", unknown, string, boolean>;
    triggerIconStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "line" | "up" | "down", unknown, string, boolean>;
    background: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    color: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & {
    onLoad?: (() => any) | undefined;
    onError?: (() => any) | undefined;
    onClick?: ((e: Event) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (e: Event) => void;
    error: () => void;
    load: () => void;
}, string, {
    size: number;
    shape: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown>;
    effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "line" | "up" | "down", unknown>;
    autoFixFontSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    triggerType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "mask" | "button") | (() => "mask" | "button") | ((new (...args: any[]) => "mask" | "button") | (() => "mask" | "button"))[], "mask" | "button", unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        error?(_: {}): any;
        default?(_: {}): any;
        "trigger-icon"?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TuAvatarGroup: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
    shape: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], unknown, unknown, string, boolean>;
    size: NumberConstructor;
    autoFixFontSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    maxCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    zIndexAscend: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    maxStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    shape: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], unknown, unknown, string, boolean>;
    size: NumberConstructor;
    autoFixFontSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    maxCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    zIndexAscend: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    maxStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>>, {
    shape: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], unknown, unknown>;
    autoFixFontSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    maxCount: number;
    zIndexAscend: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>> & Record<string, any>;
export default TuAvatar;
export * from './src/avatar';
export * from './src/constants';
