export declare const TuScrollbar: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly tag: string;
            readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import("vue").StyleValue;
            readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly minSize: number;
            readonly noresize: boolean;
        }> & Omit<{
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly tag: string;
            readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import("vue").StyleValue;
            readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly minSize: number;
            readonly noresize: boolean;
            onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly maxHeight: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly native: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly wrapStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
            readonly wrapClass: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewClass: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewStyle: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
            readonly noresize: BooleanConstructor;
            readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly always: BooleanConstructor;
            readonly minSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
        }>> & {
            onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
        }, "height" | "maxHeight" | "always" | "tag" | "native" | "wrapStyle" | "wrapClass" | "viewClass" | "viewStyle" | "minSize" | "noresize">;
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
        $emit: (event: "scroll", args_0: {
            scrollTop: number;
            scrollLeft: number;
        }) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly maxHeight: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly native: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly wrapStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
            readonly wrapClass: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewClass: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewStyle: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
            readonly noresize: BooleanConstructor;
            readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly always: BooleanConstructor;
            readonly minSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
        }>> & {
            onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
        }, {
            wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
            update: () => void;
            scrollTo: {
                (xCord: number, yCord?: number | undefined): void;
                (options: ScrollToOptions): void;
            };
            setScrollTop: (value: number) => void;
            setScrollLeft: (value: number) => void;
            handleScroll: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            scroll: (args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
        }, string, {
            readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly tag: string;
            readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import("vue").StyleValue;
            readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly minSize: number;
            readonly noresize: boolean;
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
        readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
        readonly maxHeight: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
        readonly native: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly wrapStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
        readonly wrapClass: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
        readonly viewClass: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
        readonly viewStyle: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
        readonly noresize: BooleanConstructor;
        readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
        readonly always: BooleanConstructor;
        readonly minSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
    }>> & {
        onScroll?: ((args_0: {
            scrollTop: number;
            scrollLeft: number;
        }) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
        update: () => void;
        scrollTo: {
            (xCord: number, yCord?: number | undefined): void;
            (options: ScrollToOptions): void;
        };
        setScrollTop: (value: number) => void;
        setScrollLeft: (value: number) => void;
        handleScroll: () => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly maxHeight: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly native: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly wrapStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
    readonly wrapClass: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
    readonly viewClass: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
    readonly viewStyle: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
    readonly noresize: BooleanConstructor;
    readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly always: BooleanConstructor;
    readonly minSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
}>> & {
    onScroll?: ((args_0: {
        scrollTop: number;
        scrollLeft: number;
    }) => any) | undefined;
}, {
    wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
    update: () => void;
    scrollTo: {
        (xCord: number, yCord?: number | undefined): void;
        (options: ScrollToOptions): void;
    };
    setScrollTop: (value: number) => void;
    setScrollLeft: (value: number) => void;
    handleScroll: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: (args_0: {
        scrollTop: number;
        scrollLeft: number;
    }) => void;
}, string, {
    readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly always: boolean;
    readonly tag: string;
    readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly wrapStyle: import("vue").StyleValue;
    readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
    readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
    readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
    readonly minSize: number;
    readonly noresize: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TuScrollbar;
export * from './src/scrollbar';
