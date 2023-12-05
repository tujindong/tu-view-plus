declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly zIndex: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 100, boolean>;
    readonly target: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly offset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "bottom" | "top", unknown, "top", boolean>;
}, {
    update: () => void;
    updateRoot: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: (args_0: {
        scrollTop: number;
        fixed: boolean;
    }) => void;
    change: (fixed: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    readonly target: string;
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "bottom" | "top", unknown>;
    readonly zIndex: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
    readonly offset: number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
