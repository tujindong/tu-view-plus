declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date) | (() => string | number | Date) | ((new (...args: any[]) => string | number | Date) | (() => string | number | Date))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date) | (() => string | number | Date) | ((new (...args: any[]) => string | number | Date) | (() => string | number | Date))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "gggg-wo", boolean>;
    readonly valueFormat: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "YYYY-MM-DD", boolean>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("../interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("../interface").WeekStart))[], unknown, unknown, 0, boolean>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date) | (() => string | number | Date) | ((new (...args: any[]) => string | number | Date) | (() => string | number | Date))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date) | (() => string | number | Date) | ((new (...args: any[]) => string | number | Date) | (() => string | number | Date))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "gggg-wo", boolean>;
    readonly valueFormat: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "YYYY-MM-DD", boolean>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("../interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("../interface").WeekStart))[], unknown, unknown, 0, boolean>;
}>>, {
    readonly format: string;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("../interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("../interface").WeekStart))[], unknown, unknown>;
    readonly valueFormat: string;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
