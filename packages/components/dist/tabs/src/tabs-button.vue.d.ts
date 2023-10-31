declare const _default: import("vue").DefineComponent<{
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "next" | "previous") | (() => "next" | "previous") | ((new (...args: any[]) => "next" | "previous") | (() => "next" | "previous"))[], unknown, unknown, "next", boolean>;
    readonly direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, "horizontal", boolean>;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly onClick: {
        readonly type: import("vue").PropType<(type: "next" | "previous", ev: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (type: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "next" | "previous") | (() => "next" | "previous") | ((new (...args: any[]) => "next" | "previous") | (() => "next" | "previous"))[], unknown, unknown, "next", boolean>;
    readonly direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, "horizontal", boolean>;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly onClick: {
        readonly type: import("vue").PropType<(type: "next" | "previous", ev: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & {
    onClick?: ((type: string) => any) | undefined;
}, {
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "next" | "previous") | (() => "next" | "previous") | ((new (...args: any[]) => "next" | "previous") | (() => "next" | "previous"))[], unknown, unknown>;
    readonly direction: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown>;
}, {}>;
export default _default;
