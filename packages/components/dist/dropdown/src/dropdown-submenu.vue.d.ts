declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly value: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]) | ((new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]))[], unknown, unknown, "click", boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt") | ((new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt"))[], unknown, unknown, "rt", boolean>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly optionProps: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:popupVisible": (visible: boolean) => void;
    popupVisibleChange: (visible: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly value: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]) | ((new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]))[], unknown, unknown, "click", boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt") | ((new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt"))[], unknown, unknown, "rt", boolean>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly optionProps: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & {
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
}, {
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt") | ((new (...args: any[]) => "rt" | "lt") | (() => "rt" | "lt"))[], unknown, unknown>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]) | ((new (...args: any[]) => "click" | "hover" | ("click" | "hover")[]) | (() => "click" | "hover" | ("click" | "hover")[]))[], unknown, unknown>;
}, {}>, {
    default?(_: {}): any;
    icon?(_: {}): any;
    suffix?(_: {}): any;
    content?(_: {}): any;
    footer?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
