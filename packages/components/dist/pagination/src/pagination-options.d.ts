import type { ExtractPropTypes, PropType } from 'vue';
import type PaginationOptions from './pagination-options.vue';
export declare const paginationOptionsProps: {
    readonly sizeOptions: {
        readonly type: PropType<unknown[]>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly pageSize: NumberConstructor;
    readonly disabled: BooleanConstructor;
    readonly size: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onChange: {
        readonly type: PropType<(value: number) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly selectProps: {
        readonly type: PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const paginationOptionsEmits: string[];
export type paginationOptionsProps = ExtractPropTypes<typeof paginationOptionsProps>;
export type PaginationOptionsInstance = InstanceType<typeof PaginationOptions>;
