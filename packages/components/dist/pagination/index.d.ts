export declare const TuPagination: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly total: {
        readonly type: import("vue").PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly current: NumberConstructor;
    readonly defaultCurrent: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    readonly pageSize: NumberConstructor;
    readonly defaultPageSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly hideOnSinglePage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly simple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly button: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showTotal: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showMore: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showJumper: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showPageSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly pageSizeOptions: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number[]) | (() => number[]) | ((new (...args: any[]) => number[]) | (() => number[]))[], unknown, unknown, () => number[], boolean>;
    readonly pageSizeProps: {
        readonly type: import("vue").PropType<import("../select").SelectProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly pageItemStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly activePageItemStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly baseSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
    readonly bufferSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
    readonly autoAdjust: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:current': (current: number) => boolean;
    'update:pageSize': (pageSize: number) => boolean;
    change: (current: number) => boolean;
    pageSizeChange: (pageSize: number) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly total: {
        readonly type: import("vue").PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly current: NumberConstructor;
    readonly defaultCurrent: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    readonly pageSize: NumberConstructor;
    readonly defaultPageSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 10, boolean>;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly hideOnSinglePage: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly simple: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly button: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showTotal: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showMore: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showJumper: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showPageSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly pageSizeOptions: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => number[]) | (() => number[]) | ((new (...args: any[]) => number[]) | (() => number[]))[], unknown, unknown, () => number[], boolean>;
    readonly pageSizeProps: {
        readonly type: import("vue").PropType<import("../select").SelectProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly pageItemStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly activePageItemStyle: {
        readonly type: import("vue").PropType<import("vue").CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly baseSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
    readonly bufferSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
    readonly autoAdjust: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
    onChange?: ((current: number) => any) | undefined;
    "onUpdate:current"?: ((current: number) => any) | undefined;
    "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
    onPageSizeChange?: ((pageSize: number) => any) | undefined;
}, {
    readonly button: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultCurrent: number;
    readonly simple: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultPageSize: number;
    readonly hideOnSinglePage: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly showTotal: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly showMore: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly showJumper: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly showPageSize: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly pageSizeOptions: number[];
    readonly baseSize: number;
    readonly bufferSize: number;
    readonly autoAdjust: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>> & Record<string, any>;
export default TuPagination;
export * from './src/pagination';
