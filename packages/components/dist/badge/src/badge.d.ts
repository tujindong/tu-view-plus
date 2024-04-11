import { CSSProperties } from 'vue';
import type { ExtractPropTypes, PropType } from 'vue';
export declare const badgeTypes: readonly ["default", "primary", "success", "warning", "info", "danger"];
export declare const badgeProps: {
    value: import("@tu-view-plus/utils").EpPropFinalized<(NumberConstructor | StringConstructor)[], unknown, unknown, string, boolean>;
    max: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    isDot: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    hidden: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "default" | "success" | "warning" | "danger" | "info" | "primary", unknown, string, boolean>;
    color: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    text: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    numberStyle: {
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type BadgeProps = ExtractPropTypes<typeof badgeProps>;
