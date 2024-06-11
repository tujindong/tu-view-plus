export declare const TuVirtualList: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
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
        scrollTo: (options: import("./src/interface").ScrollOptions) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        scroll: (evt: Event) => void;
        reachBottom: (evt: Event) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
        readonly component: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
        readonly threshold: number;
        readonly itemKey: string;
        readonly fixedSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly estimatedSize: number;
        readonly buffer: number;
        readonly paddingPosition: string;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
        scrollTo: (options: import("./src/interface").ScrollOptions) => void;
    }, {}, {}, {}, {
        readonly data: any[];
        readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
        readonly component: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
        readonly threshold: number;
        readonly itemKey: string;
        readonly fixedSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly estimatedSize: number;
        readonly buffer: number;
        readonly paddingPosition: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    scrollTo: (options: import("./src/interface").ScrollOptions) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: (evt: Event) => void;
    reachBottom: (evt: Event) => void;
}, string, {
    readonly data: any[];
    readonly height: import("@tu-view-plus/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
    readonly component: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
    readonly threshold: number;
    readonly itemKey: string;
    readonly fixedSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly estimatedSize: number;
    readonly buffer: number;
    readonly paddingPosition: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        item?(_: {
            item: any;
            index: number;
        }): any;
    };
})> & Record<string, any>;
export default TuVirtualList;
export * from './src/virtual-list';
