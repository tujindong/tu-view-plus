export declare const TuAffix: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly position: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "top" | "bottom", unknown>;
            readonly zIndex: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
            readonly offset: number;
            readonly target: string;
        }> & Omit<{
            readonly position: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "top" | "bottom", unknown>;
            readonly zIndex: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
            readonly offset: number;
            readonly target: string;
            onChange?: ((fixed: boolean) => any) | undefined;
            onScroll?: ((args_0: {
                scrollTop: number;
                fixed: boolean;
            }) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly zIndex: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 100, boolean>;
            readonly target: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            readonly position: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "top" | "bottom", unknown, "top", boolean>;
        }>> & {
            onChange?: ((fixed: boolean) => any) | undefined;
            onScroll?: ((args_0: {
                scrollTop: number;
                fixed: boolean;
            }) => any) | undefined;
        }, "position" | "zIndex" | "offset" | "target">;
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
        $emit: ((event: "scroll", args_0: {
            scrollTop: number;
            fixed: boolean;
        }) => void) & ((event: "change", fixed: boolean) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly zIndex: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 100, boolean>;
            readonly target: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            readonly position: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "top" | "bottom", unknown, "top", boolean>;
        }>> & {
            onChange?: ((fixed: boolean) => any) | undefined;
            onScroll?: ((args_0: {
                scrollTop: number;
                fixed: boolean;
            }) => any) | undefined;
        }, {
            update: () => void;
            updateRoot: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            scroll: (args_0: {
                scrollTop: number;
                fixed: boolean;
            }) => void;
            change: (fixed: boolean) => void;
        }, string, {
            readonly position: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "top" | "bottom", unknown>;
            readonly zIndex: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
            readonly offset: number;
            readonly target: string;
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
        readonly zIndex: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 100, boolean>;
        readonly target: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "top" | "bottom", unknown, "top", boolean>;
    }>> & {
        onChange?: ((fixed: boolean) => any) | undefined;
        onScroll?: ((args_0: {
            scrollTop: number;
            fixed: boolean;
        }) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        update: () => void;
        updateRoot: () => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly zIndex: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 100, boolean>;
    readonly target: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "top" | "bottom", unknown, "top", boolean>;
}>> & {
    onChange?: ((fixed: boolean) => any) | undefined;
    onScroll?: ((args_0: {
        scrollTop: number;
        fixed: boolean;
    }) => any) | undefined;
}, {
    update: () => void;
    updateRoot: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: (args_0: {
        scrollTop: number;
        fixed: boolean;
    }) => void;
    change: (fixed: boolean) => void;
}, string, {
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "top" | "bottom", unknown>;
    readonly zIndex: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
    readonly offset: number;
    readonly target: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TuAffix;
export * from './src/affix';
