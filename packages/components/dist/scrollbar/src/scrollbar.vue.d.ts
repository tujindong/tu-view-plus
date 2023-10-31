import type { CSSProperties, StyleValue } from 'vue';
declare function scrollTo(xCord: number, yCord?: number): void;
declare function scrollTo(options: ScrollToOptions): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly maxHeight: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly native: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly wrapStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, "", boolean>;
    readonly wrapClass: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
    readonly viewClass: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
    readonly viewStyle: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
    readonly noresize: BooleanConstructor;
    readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly always: BooleanConstructor;
    readonly minSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
}, {
    wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
    update: () => void;
    scrollTo: typeof scrollTo;
    setScrollTop: (value: number) => void;
    setScrollLeft: (value: number) => void;
    handleScroll: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: (args_0: {
        scrollTop: number;
        scrollLeft: number;
    }) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly maxHeight: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly native: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly wrapStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue) | ((new (...args: any[]) => string | CSSProperties | StyleValue[]) | (() => StyleValue))[], unknown, unknown, "", boolean>;
    readonly wrapClass: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
    readonly viewClass: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
    readonly viewStyle: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
    readonly noresize: BooleanConstructor;
    readonly tag: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly always: BooleanConstructor;
    readonly minSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
}>> & {
    onScroll?: ((args_0: {
        scrollTop: number;
        scrollLeft: number;
    }) => any) | undefined;
}, {
    readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly maxHeight: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly always: boolean;
    readonly tag: string;
    readonly native: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly wrapStyle: StyleValue;
    readonly wrapClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
    readonly viewClass: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
    readonly viewStyle: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
    readonly minSize: number;
    readonly noresize: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
