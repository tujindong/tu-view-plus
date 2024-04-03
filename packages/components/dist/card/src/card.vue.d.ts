declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly title: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly bodyStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, {}, boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "flat" | "inset" | "outset" | "bordered" | "outlined") | ((new (...args: any[]) => "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "flat" | "inset" | "outset" | "bordered" | "outlined"))[], "flat" | "inset" | "outset" | "bordered" | "outlined", unknown, "outset", boolean>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly title: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly bodyStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue) | ((new (...args: any[]) => string | false | import("vue").CSSProperties | import("vue").StyleValue[]) | (() => import("vue").StyleValue))[], unknown, unknown, {}, boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "flat" | "inset" | "outset" | "bordered" | "outlined") | ((new (...args: any[]) => "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "flat" | "inset" | "outset" | "bordered" | "outlined"))[], "flat" | "inset" | "outset" | "bordered" | "outlined", unknown, "outset", boolean>;
}>>, {
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly effect: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "flat" | "inset" | "outset" | "bordered" | "outlined") | ((new (...args: any[]) => "flat" | "inset" | "outset" | "bordered" | "outlined") | (() => "flat" | "inset" | "outset" | "bordered" | "outlined"))[], "flat" | "inset" | "outset" | "bordered" | "outlined", unknown>;
    readonly bodyStyle: import("vue").StyleValue;
}, {}>, {
    title?(_: {}): any;
    extra?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
