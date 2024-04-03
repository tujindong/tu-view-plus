declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly collapsed: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultCollapsed: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly collapsible: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly width: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    readonly collapsedWidth: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 48, boolean>;
    readonly reverseArrow: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly breakpoint: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "xxl" | "xl" | "lg" | "md" | "sm" | "xs") | (() => "xxl" | "xl" | "lg" | "md" | "sm" | "xs") | ((new (...args: any[]) => "xxl" | "xl" | "lg" | "md" | "sm" | "xs") | (() => "xxl" | "xl" | "lg" | "md" | "sm" | "xs"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly resizeDirections: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("bottom" | "left" | "right" | "top")[]) | (() => ("bottom" | "left" | "right" | "top")[]) | ((new (...args: any[]) => ("bottom" | "left" | "right" | "top")[]) | (() => ("bottom" | "left" | "right" | "top")[]))[], unknown, unknown, undefined, boolean>;
    readonly hideTrigger: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly collapsed: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultCollapsed: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly collapsible: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly width: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    readonly collapsedWidth: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 48, boolean>;
    readonly reverseArrow: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly breakpoint: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "xxl" | "xl" | "lg" | "md" | "sm" | "xs") | (() => "xxl" | "xl" | "lg" | "md" | "sm" | "xs") | ((new (...args: any[]) => "xxl" | "xl" | "lg" | "md" | "sm" | "xs") | (() => "xxl" | "xl" | "lg" | "md" | "sm" | "xs"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly resizeDirections: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("bottom" | "left" | "right" | "top")[]) | (() => ("bottom" | "left" | "right" | "top")[]) | ((new (...args: any[]) => ("bottom" | "left" | "right" | "top")[]) | (() => ("bottom" | "left" | "right" | "top")[]))[], unknown, unknown, undefined, boolean>;
    readonly hideTrigger: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>>, {
    readonly width: number;
    readonly collapsed: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly collapsedWidth: number;
    readonly resizeDirections: ("bottom" | "left" | "right" | "top")[];
}, {}>, {
    default?(_: {}): any;
    trigger?(_: {
        collapsed: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
