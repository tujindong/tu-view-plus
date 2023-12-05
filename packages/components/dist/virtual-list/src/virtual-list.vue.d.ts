import { ScrollOptions } from './interface';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 200, boolean>;
    readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => never[], boolean>;
    readonly threshold: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly itemKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "key", boolean>;
    readonly fixedSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly estimatedSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 30, boolean>;
    readonly buffer: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
    readonly component: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
    readonly listAttrs: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly contentAttrs: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly paddingPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "content", boolean>;
}, {
    scrollTo: (options: ScrollOptions) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: (evt: Event) => void;
    reachBottom: (evt: Event) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 200, boolean>;
    readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => never[], boolean>;
    readonly threshold: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly itemKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "key", boolean>;
    readonly fixedSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly estimatedSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 30, boolean>;
    readonly buffer: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
    readonly component: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
    readonly listAttrs: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly contentAttrs: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly paddingPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "content", boolean>;
}>> & {
    onScroll?: ((evt: Event) => any) | undefined;
    onReachBottom?: ((evt: Event) => any) | undefined;
}, {
    readonly data: any[];
    readonly component: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
    readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
    readonly threshold: number;
    readonly itemKey: string;
    readonly fixedSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly estimatedSize: number;
    readonly buffer: number;
    readonly paddingPosition: string;
}, {}>, {
    item?(_: {
        item: any;
        index: number;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
