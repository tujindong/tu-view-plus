export declare const TuVirtualList: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
            readonly data: any[];
            readonly component: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
            readonly threshold: number;
            readonly itemKey: string;
            readonly fixedSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly estimatedSize: number;
            readonly buffer: number;
            readonly paddingPosition: string;
        }> & Omit<{
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
            readonly data: any[];
            readonly component: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
            readonly threshold: number;
            readonly itemKey: string;
            readonly fixedSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly estimatedSize: number;
            readonly buffer: number;
            readonly paddingPosition: string;
            readonly listAttrs?: Record<string, any> | undefined;
            readonly contentAttrs?: Record<string, any> | undefined;
            onScroll?: ((evt: Event) => any) | undefined;
            onReachBottom?: ((evt: Event) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 200, boolean>;
            readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => never[], boolean>;
            readonly threshold: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            readonly itemKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "key", boolean>;
            readonly fixedSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly estimatedSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 30, boolean>;
            readonly buffer: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
            readonly component: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
            readonly listAttrs: {
                readonly type: import("vue").PropType<Record<string, any>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly contentAttrs: {
                readonly type: import("vue").PropType<Record<string, any>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly paddingPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "content", boolean>;
        }>> & {
            onScroll?: ((evt: Event) => any) | undefined;
            onReachBottom?: ((evt: Event) => any) | undefined;
        }, "height" | "data" | "component" | "threshold" | "itemKey" | "fixedSize" | "estimatedSize" | "buffer" | "paddingPosition">;
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
        $emit: ((event: "scroll", evt: Event) => void) & ((event: "reachBottom", evt: Event) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 200, boolean>;
            readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => never[], boolean>;
            readonly threshold: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            readonly itemKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "key", boolean>;
            readonly fixedSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly estimatedSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 30, boolean>;
            readonly buffer: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
            readonly component: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
            readonly listAttrs: {
                readonly type: import("vue").PropType<Record<string, any>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly contentAttrs: {
                readonly type: import("vue").PropType<Record<string, any>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly paddingPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "content", boolean>;
        }>> & {
            onScroll?: ((evt: Event) => any) | undefined;
            onReachBottom?: ((evt: Event) => any) | undefined;
        }, {
            scrollTo: (options: import("./src/interface").ScrollOptions) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            scroll: (evt: Event) => void;
            reachBottom: (evt: Event) => void;
        }, string, {
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
            readonly data: any[];
            readonly component: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
            readonly threshold: number;
            readonly itemKey: string;
            readonly fixedSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly estimatedSize: number;
            readonly buffer: number;
            readonly paddingPosition: string;
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
        readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 200, boolean>;
        readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => never[], boolean>;
        readonly threshold: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        readonly itemKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "key", boolean>;
        readonly fixedSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly estimatedSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 30, boolean>;
        readonly buffer: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
        readonly component: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
        readonly listAttrs: {
            readonly type: import("vue").PropType<Record<string, any>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly contentAttrs: {
            readonly type: import("vue").PropType<Record<string, any>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly paddingPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "content", boolean>;
    }>> & {
        onScroll?: ((evt: Event) => any) | undefined;
        onReachBottom?: ((evt: Event) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        scrollTo: (options: import("./src/interface").ScrollOptions) => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 200, boolean>;
    readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => never[], boolean>;
    readonly threshold: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly itemKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "key", boolean>;
    readonly fixedSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly estimatedSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 30, boolean>;
    readonly buffer: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
    readonly component: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
    readonly listAttrs: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly contentAttrs: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly paddingPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "content", boolean>;
}>> & {
    onScroll?: ((evt: Event) => any) | undefined;
    onReachBottom?: ((evt: Event) => any) | undefined;
}, {
    scrollTo: (options: import("./src/interface").ScrollOptions) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: (evt: Event) => void;
    reachBottom: (evt: Event) => void;
}, string, {
    readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
    readonly data: any[];
    readonly component: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
    readonly threshold: number;
    readonly itemKey: string;
    readonly fixedSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly estimatedSize: number;
    readonly buffer: number;
    readonly paddingPosition: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        item?(_: {
            item: any;
            index: number;
        }): any;
    };
})> & Record<string, any>;
export default TuVirtualList;
export * from './src/virtual-list';
