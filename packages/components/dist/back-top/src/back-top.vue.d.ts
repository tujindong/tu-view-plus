declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly visibleHeight: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | ((new (...args: any[]) => number) | (() => number))[], unknown, unknown, 200, boolean>;
    readonly target: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly right: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 30, boolean>;
    readonly bottom: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly visibleHeight: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number) | (() => number) | ((new (...args: any[]) => number) | (() => number))[], unknown, unknown, 200, boolean>;
    readonly target: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly right: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 30, boolean>;
    readonly bottom: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    readonly bottom: number;
    readonly right: number;
    readonly visibleHeight: number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
