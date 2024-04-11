import type { ExtractPropTypes, PropType, CSSProperties } from 'vue';
import type { SelectProps } from '../../select/src/select';
export declare const paginationProps: {
    readonly total: {
        readonly type: PropType<number>;
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
        readonly type: PropType<SelectProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly size: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly pageItemStyle: {
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly activePageItemStyle: {
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly baseSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
    readonly bufferSize: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
    readonly autoAdjust: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
export declare const paginationEmits: {
    'update:current': (current: number) => boolean;
    'update:pageSize': (pageSize: number) => boolean;
    /**
     * @zh 页码改变时触发
     * @en Triggered when page number changes
     * @param {number} current
     */
    change: (current: number) => boolean;
    /**
     * @zh 数据条数改变时触发
     * @en Triggered when the number of data items changes
     * @param {number} pageSize
     */
    pageSizeChange: (pageSize: number) => boolean;
};
export type PaginationProps = ExtractPropTypes<typeof paginationProps>;
