declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly closable: BooleanConstructor;
    readonly disableTransitions: BooleanConstructor;
    readonly hit: BooleanConstructor;
    readonly color: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "dark" | "light" | "plain" | "neumorphic", unknown, "neumorphic", boolean>;
    readonly round: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
    close: (evt: MouseEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly closable: BooleanConstructor;
    readonly disableTransitions: BooleanConstructor;
    readonly hit: BooleanConstructor;
    readonly color: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "dark" | "light" | "plain" | "neumorphic", unknown, "neumorphic", boolean>;
    readonly round: BooleanConstructor;
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
    onClose?: ((evt: MouseEvent) => any) | undefined;
}, {
    readonly color: string;
    readonly round: boolean;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly closable: boolean;
    readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "dark" | "light" | "plain" | "neumorphic", unknown>;
    readonly disableTransitions: boolean;
    readonly hit: boolean;
}, {}>, {
    icon?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
