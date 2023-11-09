export declare const TuCol: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            push: number;
            span: number;
            offset: number;
            tag: string;
            pull: number;
            xs: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
            sm: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
            md: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
            lg: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
            xl: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
        }> & Omit<{
            readonly push: number;
            readonly span: number;
            readonly offset: number;
            readonly tag: string;
            readonly pull: number;
            readonly xs: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
            readonly sm: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
            readonly md: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
            readonly lg: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
            readonly xl: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
            span: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
            offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
            pull: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
            push: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
            xs: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
            sm: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
            md: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
            lg: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
            xl: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
        }>>, "push" | "span" | "offset" | "tag" | "pull" | "xs" | "sm" | "md" | "lg" | "xl">;
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
            tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
            span: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
            offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
            pull: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
            push: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
            xs: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
            sm: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
            md: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
            lg: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
            xl: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            push: number;
            span: number;
            offset: number;
            tag: string;
            pull: number;
            xs: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
            sm: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
            md: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
            lg: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
            xl: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
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
        tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
        span: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
        offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
        pull: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
        push: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
        xs: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
        sm: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
        md: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
        lg: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
        xl: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    span: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    pull: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    push: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    xs: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
    sm: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
    md: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
    lg: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
    xl: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    push: number;
    span: number;
    offset: number;
    tag: string;
    pull: number;
    xs: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
    sm: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
    md: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
    lg: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
    xl: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize) | ((new (...args: any[]) => number | import("./src/col").ColSizeObject) | (() => import("./src/col").ColSize))[], unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TuCol;
export * from './src/col';
