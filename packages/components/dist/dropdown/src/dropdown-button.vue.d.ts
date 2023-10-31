declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown, "click", boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "top" | "br" | "tr" | "bottom" | "tl" | "bl") | (() => "top" | "br" | "tr" | "bottom" | "tl" | "bl") | ((new (...args: any[]) => "top" | "br" | "tr" | "bottom" | "tl" | "bl") | (() => "top" | "br" | "tr" | "bottom" | "tl" | "bl"))[], unknown, unknown, "br", boolean>;
    readonly popupContainer: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "danger" | "info", unknown, "default", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly buttonProps: {
        readonly type: import("vue").PropType<import("../../button").ButtonProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly hideOnSelect: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (value: string | number | Record<string, any> | undefined, ev: Event) => void;
    click: (ev: MouseEvent) => void;
    "update:popupVisible": (visible: boolean) => void;
    popupVisibleChange: (visible: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown, "click", boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "top" | "br" | "tr" | "bottom" | "tl" | "bl") | (() => "top" | "br" | "tr" | "bottom" | "tl" | "bl") | ((new (...args: any[]) => "top" | "br" | "tr" | "bottom" | "tl" | "bl") | (() => "top" | "br" | "tr" | "bottom" | "tl" | "bl"))[], unknown, unknown, "br", boolean>;
    readonly popupContainer: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "danger" | "info", unknown, "default", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly buttonProps: {
        readonly type: import("vue").PropType<import("../../button").ButtonProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly hideOnSelect: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
    onClick?: ((ev: MouseEvent) => any) | undefined;
    onSelect?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
}, {
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "danger" | "info", unknown>;
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "top" | "br" | "tr" | "bottom" | "tl" | "bl") | (() => "top" | "br" | "tr" | "bottom" | "tl" | "bl") | ((new (...args: any[]) => "top" | "br" | "tr" | "bottom" | "tl" | "bl") | (() => "top" | "br" | "tr" | "bottom" | "tl" | "bl"))[], unknown, unknown>;
    readonly size: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | ((new (...args: any[]) => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]) | (() => "click" | "focus" | "hover" | "contextMenu" | ("click" | "focus" | "hover" | "contextMenu")[]))[], unknown, unknown>;
    readonly hideOnSelect: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>, {
    default?(_: {}): any;
    icon?(_: {
        popupVisible: boolean;
    }): any;
    content?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
