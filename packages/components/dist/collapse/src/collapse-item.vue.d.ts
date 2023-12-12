declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly title: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly extra: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly name: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => import("./collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./collapse").CollapseActiveName))[], unknown, unknown, () => number, boolean>;
    readonly disabled: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly title: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly extra: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly name: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | number) | (() => import("./collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./collapse").CollapseActiveName))[], unknown, unknown, () => number, boolean>;
    readonly disabled: BooleanConstructor;
}>>, {
    readonly disabled: boolean;
    readonly title: string;
    readonly name: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => import("./collapse").CollapseActiveName) | ((new (...args: any[]) => string | number) | (() => import("./collapse").CollapseActiveName))[], unknown, unknown>;
    readonly extra: string;
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
