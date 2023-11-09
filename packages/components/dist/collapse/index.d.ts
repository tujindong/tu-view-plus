export declare const TuCollapse: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>;
            readonly effect: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown>;
            readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue))[], unknown, unknown>;
            readonly accordion: boolean;
        }> & Omit<{
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>;
            readonly effect: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown>;
            readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue))[], unknown, unknown>;
            readonly accordion: boolean;
            onChange?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
            "onUpdate:modelValue"?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly accordion: BooleanConstructor;
            readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue))[], unknown, unknown, () => [], boolean>;
            readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown, "line", boolean>;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
        }>> & {
            onChange?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
            "onUpdate:modelValue"?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
        }, "size" | "effect" | "modelValue" | "accordion">;
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
        $emit: ((event: "change", value: import("./src/collapse").CollapseModelValue) => void) & ((event: "update:modelValue", value: import("./src/collapse").CollapseModelValue) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly accordion: BooleanConstructor;
            readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue))[], unknown, unknown, () => [], boolean>;
            readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown, "line", boolean>;
            readonly size: {
                readonly default: "medium";
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __epPropKey: true;
            };
        }>> & {
            onChange?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
            "onUpdate:modelValue"?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (value: import("./src/collapse").CollapseModelValue) => void;
            change: (value: import("./src/collapse").CollapseModelValue) => void;
        }, string, {
            readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>;
            readonly effect: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown>;
            readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue))[], unknown, unknown>;
            readonly accordion: boolean;
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
        readonly accordion: BooleanConstructor;
        readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue))[], unknown, unknown, () => [], boolean>;
        readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown, "line", boolean>;
        readonly size: {
            readonly default: "medium";
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __epPropKey: true;
        };
    }>> & {
        onChange?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly accordion: BooleanConstructor;
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue))[], unknown, unknown, () => [], boolean>;
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown, "line", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
}>> & {
    onChange?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./src/collapse").CollapseModelValue) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("./src/collapse").CollapseModelValue) => void;
    change: (value: import("./src/collapse").CollapseModelValue) => void;
}, string, {
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>;
    readonly effect: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down") | ((new (...args: any[]) => "line" | "up" | "down") | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown>;
    readonly modelValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue) | ((new (...args: any[]) => string | number | import("./src/collapse").CollapseActiveName[]) | (() => import("./src/collapse").CollapseModelValue))[], unknown, unknown>;
    readonly accordion: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TuCollapseItem: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly title: string;
            readonly disabled: boolean;
            readonly name: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName))[], unknown, unknown>;
            readonly extra: string;
        }> & Omit<{
            readonly title: string;
            readonly disabled: boolean;
            readonly name: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName))[], unknown, unknown>;
            readonly extra: string;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly title: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly extra: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly name: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName))[], unknown, unknown, () => number, boolean>;
            readonly disabled: BooleanConstructor;
        }>>, "title" | "disabled" | "name" | "extra">;
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
            readonly title: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly extra: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly name: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName))[], unknown, unknown, () => number, boolean>;
            readonly disabled: BooleanConstructor;
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            readonly title: string;
            readonly disabled: boolean;
            readonly name: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName))[], unknown, unknown>;
            readonly extra: string;
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
        readonly title: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly extra: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly name: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName))[], unknown, unknown, () => number, boolean>;
        readonly disabled: BooleanConstructor;
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly title: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly extra: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly name: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName))[], unknown, unknown, () => number, boolean>;
    readonly disabled: BooleanConstructor;
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly title: string;
    readonly disabled: boolean;
    readonly name: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./src/collapse").CollapseActiveName))[], unknown, unknown>;
    readonly extra: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        title?(_: {}): any;
        extra?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TuCollapse;
export * from './src/collapse';
