import type { ExtractPropTypes, PropType } from 'vue';
import type { WeekStart } from '../interface';
export declare const weekPickerProps: {
    readonly modelValue: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date) | (() => string | number | Date) | ((new (...args: any[]) => string | number | Date) | (() => string | number | Date))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultValue: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date) | (() => string | number | Date) | ((new (...args: any[]) => string | number | Date) | (() => string | number | Date))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "gggg-wo", boolean>;
    readonly valueFormat: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "YYYY-MM-DD", boolean>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 1 | 2 | 3 | 4 | 5 | 6) | (() => WeekStart) | ((new (...args: any[]) => 0 | 1 | 2 | 3 | 4 | 5 | 6) | (() => WeekStart))[], unknown, unknown, 0, boolean>;
};
export type WeekPickerProps = ExtractPropTypes<typeof weekPickerProps>;
