export declare const TuTimeline: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
    reverse: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
    mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "alternate") | (() => "top" | "bottom" | "left" | "right" | "alternate") | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "alternate") | (() => "top" | "bottom" | "left" | "right" | "alternate"))[], unknown, unknown, string, boolean>;
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
    mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "alternate") | (() => "top" | "bottom" | "left" | "right" | "alternate") | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "alternate") | (() => "top" | "bottom" | "left" | "right" | "alternate"))[], unknown, unknown, string, boolean>;
    pending: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(BooleanConstructor | StringConstructor)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "relative" | "same") | (() => "relative" | "same") | ((new (...args: any[]) => "relative" | "same") | (() => "relative" | "same"))[], unknown, unknown, string, boolean>;
}>>, {
    direction: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown>;
    mode: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right" | "alternate") | (() => "top" | "bottom" | "left" | "right" | "alternate") | ((new (...args: any[]) => "top" | "bottom" | "left" | "right" | "alternate") | (() => "top" | "bottom" | "left" | "right" | "alternate"))[], unknown, unknown>;
    labelPosition: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "relative" | "same") | (() => "relative" | "same") | ((new (...args: any[]) => "relative" | "same") | (() => "relative" | "same"))[], unknown, unknown>;
}, {}>> & Record<string, any>;
export declare const TuTimelineItem: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            dotType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow") | ((new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow"))[], unknown, unknown>;
            lineType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid") | ((new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid"))[], unknown, unknown>;
        }> & Omit<{
            readonly dotType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow") | ((new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow"))[], unknown, unknown>;
            readonly lineType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid") | ((new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid"))[], unknown, unknown>;
            readonly label?: string | undefined;
            readonly position?: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right") | (() => "top" | "bottom" | "left" | "right") | ((new (...args: any[]) => "top" | "bottom" | "left" | "right") | (() => "top" | "bottom" | "left" | "right"))[], unknown, unknown> | undefined;
            readonly dotColor?: string | undefined;
            readonly lineColor?: string | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right") | (() => "top" | "bottom" | "left" | "right") | ((new (...args: any[]) => "top" | "bottom" | "left" | "right") | (() => "top" | "bottom" | "left" | "right"))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, "dotType" | "lineType">;
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
                readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right") | (() => "top" | "bottom" | "left" | "right") | ((new (...args: any[]) => "top" | "bottom" | "left" | "right") | (() => "top" | "bottom" | "left" | "right"))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            dotType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow") | ((new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow"))[], unknown, unknown>;
            lineType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid") | ((new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid"))[], unknown, unknown>;
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
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right") | (() => "top" | "bottom" | "left" | "right") | ((new (...args: any[]) => "top" | "bottom" | "left" | "right") | (() => "top" | "bottom" | "left" | "right"))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right") | (() => "top" | "bottom" | "left" | "right") | ((new (...args: any[]) => "top" | "bottom" | "left" | "right") | (() => "top" | "bottom" | "left" | "right"))[], unknown, unknown>>;
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
