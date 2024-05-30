import type { ExtractPropTypes, PropType } from 'vue';
import type { BreadcrumbRoute } from './interface';
export declare const breadcrumbProps: {
    readonly maxCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly routes: {
        readonly type: PropType<BreadcrumbRoute[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly separator: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "/", boolean>;
    readonly customUrl: {
        readonly type: PropType<(paths: string[]) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>;
