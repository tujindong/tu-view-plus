export declare const TuTimeline: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
    reverse: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
    mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "alternate") | (() => "bottom" | "left" | "right" | "top" | "alternate") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "alternate") | (() => "bottom" | "left" | "right" | "top" | "alternate"))[], unknown, unknown, string, boolean>;
    pending: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "relative" | "same") | (() => "relative" | "same") | ((new (...args: any[]) => "relative" | "same") | (() => "relative" | "same"))[], unknown, unknown, string, boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    reverse: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
    mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "alternate") | (() => "bottom" | "left" | "right" | "top" | "alternate") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "alternate") | (() => "bottom" | "left" | "right" | "top" | "alternate"))[], unknown, unknown, string, boolean>;
    pending: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "relative" | "same") | (() => "relative" | "same") | ((new (...args: any[]) => "relative" | "same") | (() => "relative" | "same"))[], unknown, unknown, string, boolean>;
}>>, {
    direction: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown>;
    mode: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "alternate") | (() => "bottom" | "left" | "right" | "top" | "alternate") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "alternate") | (() => "bottom" | "left" | "right" | "top" | "alternate"))[], unknown, unknown>;
    labelPosition: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "relative" | "same") | (() => "relative" | "same") | ((new (...args: any[]) => "relative" | "same") | (() => "relative" | "same"))[], unknown, unknown>;
}, {}>> & Record<string, any>;
export declare const TuTimelineItem: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        dotColor: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        dotType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow") | ((new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow"))[], unknown, unknown, string, boolean>;
        lineType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid") | ((new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid"))[], unknown, unknown, string, boolean>;
        lineColor: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        label: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        position: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top"))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        dotColor: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        dotType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow") | ((new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow"))[], unknown, unknown, string, boolean>;
        lineType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid") | ((new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid"))[], unknown, unknown, string, boolean>;
        lineColor: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        label: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        position: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top"))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>>, {
        dotType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow") | ((new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow"))[], unknown, unknown>;
        lineType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid") | ((new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid"))[], unknown, unknown>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        dotColor: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        dotType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow") | ((new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow"))[], unknown, unknown, string, boolean>;
        lineType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid") | ((new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid"))[], unknown, unknown, string, boolean>;
        lineColor: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        label: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        position: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top"))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>>, {}, {}, {}, {}, {
        dotType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow") | ((new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow"))[], unknown, unknown>;
        lineType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid") | ((new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid"))[], unknown, unknown>;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    dotColor: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    dotType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow") | ((new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow"))[], unknown, unknown, string, boolean>;
    lineType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid") | ((new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid"))[], unknown, unknown, string, boolean>;
    lineColor: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    label: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    position: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    dotType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow") | ((new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow"))[], unknown, unknown>;
    lineType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid") | ((new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid"))[], unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        dot?(_: {}): any;
        default?(_: {}): any;
        label?(_: {}): any;
    };
})> & Record<string, any>;
export default TuTimeline;
export * from './src/timeline';
