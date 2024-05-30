import type { ExtractPropTypes, PropType } from 'vue';
import type { BreadcrumbRoute } from './interface';
import type { DropdownProps } from '../../dropdown/src/dropdown';
export declare const breadcrumbItemProps: {
    readonly separator: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly droplist: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => BreadcrumbRoute[]) | (() => BreadcrumbRoute[] | undefined) | ((new (...args: any[]) => BreadcrumbRoute[]) | (() => BreadcrumbRoute[] | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dropdownProps: {
        readonly type: PropType<DropdownProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly index: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
};
export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>;
