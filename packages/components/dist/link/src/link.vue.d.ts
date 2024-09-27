declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "default" | "primary" | "success" | "warning" | "danger" | "info") | (() => "default" | "primary" | "success" | "warning" | "danger" | "info") | ((new (...args: any[]) => "default" | "primary" | "success" | "warning" | "danger" | "info") | (() => "default" | "primary" | "success" | "warning" | "danger" | "info"))[], unknown, unknown, "default", boolean>;
    readonly underline: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly href: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly icon: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "default" | "primary" | "success" | "warning" | "danger" | "info") | (() => "default" | "primary" | "success" | "warning" | "danger" | "info") | ((new (...args: any[]) => "default" | "primary" | "success" | "warning" | "danger" | "info") | (() => "default" | "primary" | "success" | "warning" | "danger" | "info"))[], unknown, unknown, "default", boolean>;
    readonly underline: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly href: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly icon: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component) | ((new (...args: any[]) => (string | import("vue").Component) & {}) | (() => string | import("vue").Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "default" | "primary" | "success" | "warning" | "danger" | "info") | (() => "default" | "primary" | "success" | "warning" | "danger" | "info") | ((new (...args: any[]) => "default" | "primary" | "success" | "warning" | "danger" | "info") | (() => "default" | "primary" | "success" | "warning" | "danger" | "info"))[], unknown, unknown>;
    readonly underline: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly href: string;
}, {}>, {
    default?(_: {}): any;
    icon?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
