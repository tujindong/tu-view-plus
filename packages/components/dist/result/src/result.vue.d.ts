declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    status: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "error" | "success" | "warning" | "info" | "403" | "404" | "500" | "custom") | (() => "error" | "success" | "warning" | "info" | "403" | "404" | "500" | "custom") | ((new (...args: any[]) => "error" | "success" | "warning" | "info" | "403" | "404" | "500" | "custom") | (() => "error" | "success" | "warning" | "info" | "403" | "404" | "500" | "custom"))[], unknown, unknown, string, boolean>;
    title: StringConstructor;
    subtitle: StringConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    status: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "error" | "success" | "warning" | "info" | "403" | "404" | "500" | "custom") | (() => "error" | "success" | "warning" | "info" | "403" | "404" | "500" | "custom") | ((new (...args: any[]) => "error" | "success" | "warning" | "info" | "403" | "404" | "500" | "custom") | (() => "error" | "success" | "warning" | "info" | "403" | "404" | "500" | "custom"))[], unknown, unknown, string, boolean>;
    title: StringConstructor;
    subtitle: StringConstructor;
}>>, {
    status: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "error" | "success" | "warning" | "info" | "403" | "404" | "500" | "custom") | (() => "error" | "success" | "warning" | "info" | "403" | "404" | "500" | "custom") | ((new (...args: any[]) => "error" | "success" | "warning" | "info" | "403" | "404" | "500" | "custom") | (() => "error" | "success" | "warning" | "info" | "403" | "404" | "500" | "custom"))[], unknown, unknown>;
}, {}>, {
    icon?(_: {}): any;
    title?(_: {}): any;
    subtitle?(_: {}): any;
    extra?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
