declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    gutter: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    justify: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "center" | "space-around" | "space-between" | "space-evenly" | "end" | "start", unknown, string, boolean>;
    align: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "bottom" | "top" | "middle", unknown, string, boolean>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    gutter: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    justify: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "center" | "space-around" | "space-between" | "space-evenly" | "end" | "start", unknown, string, boolean>;
    align: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "bottom" | "top" | "middle", unknown, string, boolean>;
}>>, {
    justify: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "center" | "space-around" | "space-between" | "space-evenly" | "end" | "start", unknown>;
    align: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "bottom" | "top" | "middle", unknown>;
    tag: string;
    gutter: number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
