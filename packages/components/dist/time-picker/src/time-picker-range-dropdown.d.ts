import type { ExtractPropTypes, PropType } from 'vue';
export declare const timePickerRangeDropdownProps: {
    readonly value: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (import("dayjs").Dayjs | undefined)[]) | (() => (import("dayjs").Dayjs | undefined)[] | undefined) | ((new (...args: any[]) => (import("dayjs").Dayjs | undefined)[]) | (() => (import("dayjs").Dayjs | undefined)[] | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly displayIndex: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly size: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const timePickerRangeDropdownEmits: string[];
export type TimePickerRangeDropdownProps = ExtractPropTypes<typeof timePickerRangeDropdownProps>;
