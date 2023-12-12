declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly loading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly isEmpty: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly bottomOffset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly onScroll: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ((ev: Event) => void) | ((ev: Event) => void)[]) | (() => import("./dropdown-panel").EmitType<(ev: Event) => void>) | ((new (...args: any[]) => ((ev: Event) => void) | ((ev: Event) => void)[]) | (() => import("./dropdown-panel").EmitType<(ev: Event) => void>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onReachBottom: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ((ev: Event) => void) | ((ev: Event) => void)[]) | (() => import("./dropdown-panel").EmitType<(ev: Event) => void>) | ((new (...args: any[]) => ((ev: Event) => void) | ((ev: Event) => void)[]) | (() => import("./dropdown-panel").EmitType<(ev: Event) => void>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: (args_0: {
        scrollTop: number;
        scrollLeft: number;
    }) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly loading: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly isEmpty: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly bottomOffset: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly onScroll: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ((ev: Event) => void) | ((ev: Event) => void)[]) | (() => import("./dropdown-panel").EmitType<(ev: Event) => void>) | ((new (...args: any[]) => ((ev: Event) => void) | ((ev: Event) => void)[]) | (() => import("./dropdown-panel").EmitType<(ev: Event) => void>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onReachBottom: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => ((ev: Event) => void) | ((ev: Event) => void)[]) | (() => import("./dropdown-panel").EmitType<(ev: Event) => void>) | ((new (...args: any[]) => ((ev: Event) => void) | ((ev: Event) => void)[]) | (() => import("./dropdown-panel").EmitType<(ev: Event) => void>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & {
    onScroll?: ((args_0: {
        scrollTop: number;
        scrollLeft: number;
    }) => any) | undefined;
}, {
    readonly loading: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly isEmpty: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly bottomOffset: number;
}, {}>, {
    empty?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
