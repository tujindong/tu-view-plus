export declare const TuBackTop: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly bottom: number;
            readonly right: number;
            readonly visibleHeight: number;
        }> & Omit<{
            readonly bottom: number;
            readonly right: number;
            readonly visibleHeight: number;
            readonly target?: string | undefined;
            onClick?: ((evt: MouseEvent) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly visibleHeight: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | ((new (...args: any[]) => number) | (() => number))[], unknown, unknown, 200, boolean>;
            readonly target: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly right: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 30, boolean>;
            readonly bottom: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
        }>> & {
            onClick?: ((evt: MouseEvent) => any) | undefined;
        }, "bottom" | "right" | "visibleHeight">;
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
        $emit: (event: "click", evt: MouseEvent) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly visibleHeight: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | ((new (...args: any[]) => number) | (() => number))[], unknown, unknown, 200, boolean>;
            readonly target: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly right: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 30, boolean>;
            readonly bottom: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
        }>> & {
            onClick?: ((evt: MouseEvent) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (evt: MouseEvent) => void;
        }, string, {
            readonly bottom: number;
            readonly right: number;
            readonly visibleHeight: number;
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
        readonly visibleHeight: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | ((new (...args: any[]) => number) | (() => number))[], unknown, unknown, 200, boolean>;
        readonly target: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly right: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 30, boolean>;
        readonly bottom: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly visibleHeight: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | ((new (...args: any[]) => number) | (() => number))[], unknown, unknown, 200, boolean>;
    readonly target: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly right: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 30, boolean>;
    readonly bottom: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
}, string, {
    readonly bottom: number;
    readonly right: number;
    readonly visibleHeight: number;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TuBackTop;
export * from './src/back-top';
