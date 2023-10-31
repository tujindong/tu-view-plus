declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly tab: {
        readonly type: import("vue").PropType<import("./constants").TabData>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly active: BooleanConstructor;
    readonly editable: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (key: string | number, evt: Event) => void;
    delete: (key: string | number, ev: Event) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly tab: {
        readonly type: import("vue").PropType<import("./constants").TabData>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly active: BooleanConstructor;
    readonly editable: BooleanConstructor;
}>> & {
    onClick?: ((key: string | number, evt: Event) => any) | undefined;
    onDelete?: ((key: string | number, ev: Event) => any) | undefined;
}, {
    readonly active: boolean;
    readonly editable: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
