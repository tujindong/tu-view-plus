export declare const TuProgress: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard") | ((new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard"))[], "circle" | "line" | "dashboard", unknown>;
            readonly color: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | ((new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]))[], unknown, unknown>;
            readonly width: number;
            readonly strokeLinecap: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown>;
            readonly strokeWidth: number;
            readonly status: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception") | ((new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception"))[], "" | "success" | "warning" | "exception", unknown>;
            readonly duration: number;
            readonly indeterminate: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly percentage: number;
            readonly textInside: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly showText: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly striped: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly stripedFlow: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly format: import("./src/progress").ProgressFn;
        }> & Omit<{
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard") | ((new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard"))[], "circle" | "line" | "dashboard", unknown>;
            readonly color: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | ((new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]))[], unknown, unknown>;
            readonly width: number;
            readonly strokeLinecap: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown>;
            readonly strokeWidth: number;
            readonly status: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception") | ((new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception"))[], "" | "success" | "warning" | "exception", unknown>;
            readonly duration: number;
            readonly indeterminate: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly percentage: number;
            readonly textInside: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly showText: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly striped: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly stripedFlow: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly format: import("./src/progress").ProgressFn;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard") | ((new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard"))[], "circle" | "line" | "dashboard", unknown, "line", boolean>;
            readonly percentage: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            readonly status: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception") | ((new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception"))[], "" | "success" | "warning" | "exception", unknown, "", boolean>;
            readonly indeterminate: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly duration: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
            readonly strokeWidth: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 8, boolean>;
            readonly strokeLinecap: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown, "round", boolean>;
            readonly textInside: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly width: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 126, boolean>;
            readonly showText: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly color: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | ((new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]))[], unknown, unknown, "", boolean>;
            readonly striped: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly stripedFlow: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly format: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/progress").ProgressFn) | (() => import("./src/progress").ProgressFn) | {
                (): import("./src/progress").ProgressFn;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => import("./src/progress").ProgressFn) | (() => import("./src/progress").ProgressFn) | {
                (): import("./src/progress").ProgressFn;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, (percentage: number) => string, boolean>;
        }>>, "type" | "color" | "width" | "strokeLinecap" | "strokeWidth" | "status" | "duration" | "indeterminate" | "percentage" | "textInside" | "showText" | "striped" | "stripedFlow" | "format">;
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
            readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard") | ((new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard"))[], "circle" | "line" | "dashboard", unknown, "line", boolean>;
            readonly percentage: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            readonly status: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception") | ((new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception"))[], "" | "success" | "warning" | "exception", unknown, "", boolean>;
            readonly indeterminate: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly duration: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
            readonly strokeWidth: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 8, boolean>;
            readonly strokeLinecap: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown, "round", boolean>;
            readonly textInside: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly width: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 126, boolean>;
            readonly showText: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly color: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | ((new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]))[], unknown, unknown, "", boolean>;
            readonly striped: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly stripedFlow: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly format: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/progress").ProgressFn) | (() => import("./src/progress").ProgressFn) | {
                (): import("./src/progress").ProgressFn;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => import("./src/progress").ProgressFn) | (() => import("./src/progress").ProgressFn) | {
                (): import("./src/progress").ProgressFn;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, (percentage: number) => string, boolean>;
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard") | ((new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard"))[], "circle" | "line" | "dashboard", unknown>;
            readonly color: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | ((new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]))[], unknown, unknown>;
            readonly width: number;
            readonly strokeLinecap: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown>;
            readonly strokeWidth: number;
            readonly status: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception") | ((new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception"))[], "" | "success" | "warning" | "exception", unknown>;
            readonly duration: number;
            readonly indeterminate: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly percentage: number;
            readonly textInside: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly showText: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly striped: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly stripedFlow: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly format: import("./src/progress").ProgressFn;
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
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard") | ((new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard"))[], "circle" | "line" | "dashboard", unknown, "line", boolean>;
        readonly percentage: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        readonly status: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception") | ((new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception"))[], "" | "success" | "warning" | "exception", unknown, "", boolean>;
        readonly indeterminate: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly duration: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
        readonly strokeWidth: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 8, boolean>;
        readonly strokeLinecap: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown, "round", boolean>;
        readonly textInside: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly width: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 126, boolean>;
        readonly showText: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly color: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | ((new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]))[], unknown, unknown, "", boolean>;
        readonly striped: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly stripedFlow: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly format: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/progress").ProgressFn) | (() => import("./src/progress").ProgressFn) | {
            (): import("./src/progress").ProgressFn;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => import("./src/progress").ProgressFn) | (() => import("./src/progress").ProgressFn) | {
            (): import("./src/progress").ProgressFn;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown, (percentage: number) => string, boolean>;
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard") | ((new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard"))[], "circle" | "line" | "dashboard", unknown, "line", boolean>;
    readonly percentage: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly status: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception") | ((new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception"))[], "" | "success" | "warning" | "exception", unknown, "", boolean>;
    readonly indeterminate: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly duration: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
    readonly strokeWidth: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 8, boolean>;
    readonly strokeLinecap: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown, "round", boolean>;
    readonly textInside: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly width: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 126, boolean>;
    readonly showText: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly color: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | ((new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]))[], unknown, unknown, "", boolean>;
    readonly striped: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly stripedFlow: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/progress").ProgressFn) | (() => import("./src/progress").ProgressFn) | {
        (): import("./src/progress").ProgressFn;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => import("./src/progress").ProgressFn) | (() => import("./src/progress").ProgressFn) | {
        (): import("./src/progress").ProgressFn;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, (percentage: number) => string, boolean>;
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard") | ((new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard"))[], "circle" | "line" | "dashboard", unknown>;
    readonly color: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | ((new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]))[], unknown, unknown>;
    readonly width: number;
    readonly strokeLinecap: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown>;
    readonly strokeWidth: number;
    readonly status: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception") | ((new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception"))[], "" | "success" | "warning" | "exception", unknown>;
    readonly duration: number;
    readonly indeterminate: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly percentage: number;
    readonly textInside: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly showText: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly striped: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly stripedFlow: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly format: import("./src/progress").ProgressFn;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {
            percentage: number;
        }): any;
    };
})> & Record<string, any>;
export default TuProgress;
export * from './src/progress';
