declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly title: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly description: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "error" | "success" | "warning" | "info", unknown, "", boolean>;
    readonly closable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly closeText: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly showIcon: BooleanConstructor;
    readonly center: BooleanConstructor;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "up" | "down" | "dark" | "light" | "plain", unknown, "up", boolean>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (evt: MouseEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly title: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly description: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "error" | "success" | "warning" | "info", unknown, "", boolean>;
    readonly closable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly closeText: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly showIcon: BooleanConstructor;
    readonly center: BooleanConstructor;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "up" | "down" | "dark" | "light" | "plain", unknown, "up", boolean>;
}>> & {
    onClose?: ((evt: MouseEvent) => any) | undefined;
}, {
    readonly title: string;
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "error" | "success" | "warning" | "info", unknown>;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>;
    readonly effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "up" | "down" | "dark" | "light" | "plain", unknown>;
    readonly center: boolean;
    readonly description: string;
    readonly closable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly closeText: string;
    readonly showIcon: boolean;
}, {}>, {
    title?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
