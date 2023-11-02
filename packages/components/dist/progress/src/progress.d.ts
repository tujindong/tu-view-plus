import type { ExtractPropTypes } from 'vue';
import type Progress from './progress.vue';
export type ProgressColor = {
    color: string;
    percentage: number;
};
export type ProgressFn = (percentage: number) => string;
export declare const progressProps: {
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "line" | "circle" | "dashboard") | (() => "line" | "circle" | "dashboard") | ((new (...args: any[]) => "line" | "circle" | "dashboard") | (() => "line" | "circle" | "dashboard"))[], "line" | "circle" | "dashboard", unknown, "line", boolean>;
    readonly percentage: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly status: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception") | ((new (...args: any[]) => "" | "success" | "warning" | "exception") | (() => "" | "success" | "warning" | "exception"))[], "" | "success" | "warning" | "exception", unknown, "", boolean>;
    readonly indeterminate: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly duration: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
    readonly strokeWidth: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 8, boolean>;
    readonly strokeLinecap: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>) | ((new (...args: any[]) => "inherit" | "round" | "butt" | "square") | (() => NonNullable<"inherit" | "round" | "butt" | "square" | undefined>))[], unknown, unknown, "round", boolean>;
    readonly textInside: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly width: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 126, boolean>;
    readonly showText: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly color: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | ProgressFn | ProgressColor[]) | (() => string | ProgressFn | ProgressColor[]) | ((new (...args: any[]) => string | ProgressFn | ProgressColor[]) | (() => string | ProgressFn | ProgressColor[]))[], unknown, unknown, "", boolean>;
    readonly striped: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly stripedFlow: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ProgressFn) | (() => ProgressFn) | {
        (): ProgressFn;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => ProgressFn) | (() => ProgressFn) | {
        (): ProgressFn;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, (percentage: number) => string, boolean>;
};
export type ProgressProps = ExtractPropTypes<typeof progressProps>;
export type ProgressInstance = InstanceType<typeof Progress>;
