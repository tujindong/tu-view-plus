import type { ExtractPropTypes, PropType } from 'vue';
export declare const virtualListProps: {
    readonly height: import("@tu-view-plus/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, 200, boolean>;
    readonly data: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => any[]) | (() => any[]) | ((new (...args: any[]) => any[]) | (() => any[]))[], unknown, unknown, () => never[], boolean>;
    readonly threshold: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly itemKey: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "key", boolean>;
    readonly fixedSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly estimatedSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 30, boolean>;
    readonly buffer: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
    readonly component: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, ObjectConstructor], unknown, unknown, "div", boolean>;
    readonly listAttrs: {
        readonly type: PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly contentAttrs: {
        readonly type: PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly paddingPosition: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "content", boolean>;
};
export declare const virtualListEmits: {
    scroll: (evt: Event) => boolean;
    reachBottom: (evt: Event) => boolean;
};
export type VirtualListProps = ExtractPropTypes<typeof virtualListProps>;
export type VirtualListEmits = typeof virtualListEmits;
