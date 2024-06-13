import { ProgressColor } from './progress';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
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
    readonly color: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | import("./progress").ProgressFn | ProgressColor[]) | (() => string | import("./progress").ProgressFn | ProgressColor[]) | ((new (...args: any[]) => string | import("./progress").ProgressFn | ProgressColor[]) | (() => string | import("./progress").ProgressFn | ProgressColor[]))[], unknown, unknown, "", boolean>;
    readonly striped: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly stripedFlow: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./progress").ProgressFn) | (() => import("./progress").ProgressFn) | {
        (): import("./progress").ProgressFn;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => import("./progress").ProgressFn) | (() => import("./progress").ProgressFn) | {
        (): import("./progress").ProgressFn;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, (percentage: number) => string, boolean>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    readonly color: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | import("./progress").ProgressFn | ProgressColor[]) | (() => string | import("./progress").ProgressFn | ProgressColor[]) | ((new (...args: any[]) => string | import("./progress").ProgressFn | ProgressColor[]) | (() => string | import("./progress").ProgressFn | ProgressColor[]))[], unknown, unknown, "", boolean>;
    readonly striped: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly stripedFlow: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./progress").ProgressFn) | (() => import("./progress").ProgressFn) | {
        (): import("./progress").ProgressFn;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => import("./progress").ProgressFn) | (() => import("./progress").ProgressFn) | {
        (): import("./progress").ProgressFn;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, (percentage: number) => string, boolean>;
}>>, {
    readonly color: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | import("./progress").ProgressFn | ProgressColor[]) | (() => string | import("./progress").ProgressFn | ProgressColor[]) | ((new (...args: any[]) => string | import("./progress").ProgressFn | ProgressColor[]) | (() => string | import("./progress").ProgressFn | ProgressColor[]))[], unknown, unknown>;
    readonly width: number;
    readonly strokeLinecap: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown>;
    readonly strokeWidth: number;
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard") | ((new (...args: any[]) => "circle" | "line" | "dashboard") | (() => "circle" | "line" | "dashboard"))[], "circle" | "line" | "dashboard", unknown>;
    readonly duration: number;
    readonly status: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception") | ((new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception"))[], "" | "success" | "warning" | "exception", unknown>;
    readonly indeterminate: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly format: import("./progress").ProgressFn;
    readonly showText: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly percentage: number;
    readonly textInside: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly striped: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly stripedFlow: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>, {
    default?(_: {
        percentage: number;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
