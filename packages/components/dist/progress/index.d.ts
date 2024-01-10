export declare const TuProgress: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
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
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
    }>>, {
        readonly color: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | ((new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]))[], unknown, unknown>;
        readonly width: number;
        readonly strokeLinecap: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown>;
        readonly strokeWidth: number;
        readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard") | ((new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard"))[], "circle" | "line" | "dashboard", unknown>;
        readonly duration: number;
        readonly format: import("./src/progress").ProgressFn;
        readonly status: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception") | ((new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception"))[], "" | "success" | "warning" | "exception", unknown>;
        readonly indeterminate: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly percentage: number;
        readonly textInside: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly showText: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly striped: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly stripedFlow: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
    }>>, {}, {}, {}, {}, {
        readonly color: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | ((new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]))[], unknown, unknown>;
        readonly width: number;
        readonly strokeLinecap: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown>;
        readonly strokeWidth: number;
        readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard") | ((new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard"))[], "circle" | "line" | "dashboard", unknown>;
        readonly duration: number;
        readonly format: import("./src/progress").ProgressFn;
        readonly status: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception") | ((new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception"))[], "" | "success" | "warning" | "exception", unknown>;
        readonly indeterminate: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly percentage: number;
        readonly textInside: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly showText: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly striped: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly stripedFlow: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }>;
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
    readonly color: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | ((new (...args: any[]) => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]) | (() => string | import("./src/progress").ProgressFn | import("./src/progress").ProgressColor[]))[], unknown, unknown>;
    readonly width: number;
    readonly strokeLinecap: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown>;
    readonly strokeWidth: number;
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard") | ((new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard"))[], "circle" | "line" | "dashboard", unknown>;
    readonly duration: number;
    readonly format: import("./src/progress").ProgressFn;
    readonly status: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception") | ((new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception"))[], "" | "success" | "warning" | "exception", unknown>;
    readonly indeterminate: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly percentage: number;
    readonly textInside: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly showText: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly striped: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly stripedFlow: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {
            percentage: number;
        }): any;
    };
})> & Record<string, any>;
export default TuProgress;
export * from './src/progress';
