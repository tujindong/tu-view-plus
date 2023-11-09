import type { CSSProperties } from 'vue';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    shape: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown, string, boolean>;
    imageUrl: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    autoFixFontSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    triggerType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "button" | "mask") | (() => "button" | "mask") | ((new (...args: any[]) => "button" | "mask") | (() => "button" | "mask"))[], "button" | "mask", unknown, string, boolean>;
    triggerIconStyle: {
        readonly type: import("vue").PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "line" | "up" | "down", unknown, string, boolean>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (e: Event) => void;
    error: () => void;
    load: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    shape: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown, string, boolean>;
    imageUrl: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    autoFixFontSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    triggerType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "button" | "mask") | (() => "button" | "mask") | ((new (...args: any[]) => "button" | "mask") | (() => "button" | "mask"))[], "button" | "mask", unknown, string, boolean>;
    triggerIconStyle: {
        readonly type: import("vue").PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "line" | "up" | "down", unknown, string, boolean>;
}>> & {
    onLoad?: (() => any) | undefined;
    onError?: (() => any) | undefined;
    onClick?: ((e: Event) => any) | undefined;
}, {
    shape: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown>;
    effect: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "line" | "up" | "down", unknown>;
    autoFixFontSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    triggerType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "button" | "mask") | (() => "button" | "mask") | ((new (...args: any[]) => "button" | "mask") | (() => "button" | "mask"))[], "button" | "mask", unknown>;
}, {}>, {
    error?(_: {}): any;
    default?(_: {}): any;
    "trigger-icon"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
