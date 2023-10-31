declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
    orientation: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "left" | "right" | "center") | (() => "left" | "right" | "center") | ((new (...args: any[]) => "left" | "right" | "center") | (() => "left" | "right" | "center"))[], unknown, unknown, string, boolean>;
    margin: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
    orientation: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "left" | "right" | "center") | (() => "left" | "right" | "center") | ((new (...args: any[]) => "left" | "right" | "center") | (() => "left" | "right" | "center"))[], unknown, unknown, string, boolean>;
    margin: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>>, {
    direction: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown>;
    orientation: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "left" | "right" | "center") | (() => "left" | "right" | "center") | ((new (...args: any[]) => "left" | "right" | "center") | (() => "left" | "right" | "center"))[], unknown, unknown>;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
