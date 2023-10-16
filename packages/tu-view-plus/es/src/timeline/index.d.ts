export declare const TuTimeline: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
    reverse: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("horizontal" | "vertical") & {}) | (() => "horizontal" | "vertical") | ((new (...args: any[]) => ("horizontal" | "vertical") & {}) | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
    mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("top" | "bottom" | "left" | "right" | "alternate") & {}) | (() => "top" | "bottom" | "left" | "right" | "alternate") | ((new (...args: any[]) => ("top" | "bottom" | "left" | "right" | "alternate") & {}) | (() => "top" | "bottom" | "left" | "right" | "alternate"))[], unknown, unknown, string, boolean>;
    pending: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("relative" | "same") & {}) | (() => "relative" | "same") | ((new (...args: any[]) => ("relative" | "same") & {}) | (() => "relative" | "same"))[], unknown, unknown, string, boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    reverse: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("horizontal" | "vertical") & {}) | (() => "horizontal" | "vertical") | ((new (...args: any[]) => ("horizontal" | "vertical") & {}) | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
    mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("top" | "bottom" | "left" | "right" | "alternate") & {}) | (() => "top" | "bottom" | "left" | "right" | "alternate") | ((new (...args: any[]) => ("top" | "bottom" | "left" | "right" | "alternate") & {}) | (() => "top" | "bottom" | "left" | "right" | "alternate"))[], unknown, unknown, string, boolean>;
    pending: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("relative" | "same") & {}) | (() => "relative" | "same") | ((new (...args: any[]) => ("relative" | "same") & {}) | (() => "relative" | "same"))[], unknown, unknown, string, boolean>;
}>>, {
    mode: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ("top" | "bottom" | "left" | "right" | "alternate") & {}) | (() => "top" | "bottom" | "left" | "right" | "alternate") | ((new (...args: any[]) => ("top" | "bottom" | "left" | "right" | "alternate") & {}) | (() => "top" | "bottom" | "left" | "right" | "alternate"))[], unknown, unknown>;
    direction: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ("horizontal" | "vertical") & {}) | (() => "horizontal" | "vertical") | ((new (...args: any[]) => ("horizontal" | "vertical") & {}) | (() => "horizontal" | "vertical"))[], unknown, unknown>;
    labelPosition: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ("relative" | "same") & {}) | (() => "relative" | "same") | ((new (...args: any[]) => ("relative" | "same") & {}) | (() => "relative" | "same"))[], unknown, unknown>;
}>> & Record<string, any>;
export declare const TuTimelineItem: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<unknown, object, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<unknown>, {}>> & Record<string, any>;
export default TuTimeline;
export * from './src/timeline';
