declare const _default: import("vue").DefineComponent<{
    direction: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    showArrow: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    previousClick: (evt: MouseEvent) => void;
    nextClick: (evt: MouseEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    direction: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    showArrow: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
}>> & {
    onPreviousClick?: ((evt: MouseEvent) => any) | undefined;
    onNextClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    direction: string;
    showArrow: string;
}, {}>;
export default _default;
