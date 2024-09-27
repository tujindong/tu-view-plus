export declare const TuAffix: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly zIndex: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 100, boolean>;
        readonly target: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "bottom" | "top", unknown, "top", boolean>;
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
        change: (fixed: boolean) => void;
        scroll: (args_0: {
            scrollTop: number;
            fixed: boolean;
        }) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly zIndex: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 100, boolean>;
        readonly target: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "bottom" | "top", unknown, "top", boolean>;
    }>> & {
        onChange?: ((fixed: boolean) => any) | undefined;
        onScroll?: ((args_0: {
            scrollTop: number;
            fixed: boolean;
        }) => any) | undefined;
    }, {
        readonly position: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "bottom" | "top", unknown>;
        readonly zIndex: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
        readonly offset: number;
        readonly target: string;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly zIndex: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 100, boolean>;
        readonly target: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "bottom" | "top", unknown, "top", boolean>;
    }>> & {
        onChange?: ((fixed: boolean) => any) | undefined;
        onScroll?: ((args_0: {
            scrollTop: number;
            fixed: boolean;
        }) => any) | undefined;
    }, {
        update: () => void;
        updateRoot: () => void;
    }, {}, {}, {}, {
        readonly position: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "bottom" | "top", unknown>;
        readonly zIndex: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
        readonly offset: number;
        readonly target: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly zIndex: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 100, boolean>;
    readonly target: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "bottom" | "top", unknown, "top", boolean>;
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
    change: (fixed: boolean) => void;
    scroll: (args_0: {
        scrollTop: number;
        fixed: boolean;
    }) => void;
}, string, {
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "bottom" | "top", unknown>;
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
