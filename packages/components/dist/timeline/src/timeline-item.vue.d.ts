declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    dotColor: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    dotType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow") | ((new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow"))[], unknown, unknown, string, boolean>;
    lineType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid") | ((new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid"))[], unknown, unknown, string, boolean>;
    lineColor: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    label: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    position: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right") | (() => "top" | "bottom" | "left" | "right") | ((new (...args: any[]) => "top" | "bottom" | "left" | "right") | (() => "top" | "bottom" | "left" | "right"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    dotColor: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    dotType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow") | ((new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow"))[], unknown, unknown, string, boolean>;
    lineType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid") | ((new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid"))[], unknown, unknown, string, boolean>;
    lineColor: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    label: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    position: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "top" | "bottom" | "left" | "right") | (() => "top" | "bottom" | "left" | "right") | ((new (...args: any[]) => "top" | "bottom" | "left" | "right") | (() => "top" | "bottom" | "left" | "right"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>>, {
    dotType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow") | ((new (...args: any[]) => "default" | "solid" | "hollow") | (() => "default" | "solid" | "hollow"))[], unknown, unknown>;
    lineType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid") | ((new (...args: any[]) => "dashed" | "dotted" | "solid") | (() => "dashed" | "dotted" | "solid"))[], unknown, unknown>;
}, {}>, {
    dot?(_: {}): any;
    default?(_: {}): any;
    label?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
