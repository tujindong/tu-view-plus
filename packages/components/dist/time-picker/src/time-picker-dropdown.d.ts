import { Dayjs } from 'dayjs';
import type { ExtractPropTypes, PropType } from 'vue';
export declare const timePickerDropdownProps: {
    readonly value: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => Dayjs) | (() => Dayjs | undefined) | ((new (...args: any[]) => Dayjs) | (() => Dayjs | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly visible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "HH:mm:ss", boolean>;
    readonly use12Hours: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly step: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => {
            hour?: number | undefined;
            minute?: number | undefined;
            second?: number | undefined;
        }) | (() => {
            hour?: number | undefined;
            minute?: number | undefined;
            second?: number | undefined;
        } | undefined) | ((new (...args: any[]) => {
            hour?: number | undefined;
            minute?: number | undefined;
            second?: number | undefined;
        }) | (() => {
            hour?: number | undefined;
            minute?: number | undefined;
            second?: number | undefined;
        } | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledHours: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => () => number[]) | (() => (() => number[]) | undefined) | {
            (): (() => number[]) | undefined;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => () => number[]) | (() => (() => number[]) | undefined) | {
            (): (() => number[]) | undefined;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledMinutes: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (selectedHour?: number | undefined) => number[]) | (() => ((selectedHour?: number | undefined) => number[]) | undefined) | {
            (): ((selectedHour?: number | undefined) => number[]) | undefined;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => (selectedHour?: number | undefined) => number[]) | (() => ((selectedHour?: number | undefined) => number[]) | undefined) | {
            (): ((selectedHour?: number | undefined) => number[]) | undefined;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledSeconds: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (selectedHour?: number | undefined, selectedMinute?: number | undefined) => number[]) | (() => ((selectedHour?: number | undefined, selectedMinute?: number | undefined) => number[]) | undefined) | {
            (): ((selectedHour?: number | undefined, selectedMinute?: number | undefined) => number[]) | undefined;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => (selectedHour?: number | undefined, selectedMinute?: number | undefined) => number[]) | (() => ((selectedHour?: number | undefined, selectedMinute?: number | undefined) => number[]) | undefined) | {
            (): ((selectedHour?: number | undefined, selectedMinute?: number | undefined) => number[]) | undefined;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly hideDisabledOptions: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly hideFooter: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly isRange: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly size: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const timePickerDropdownEmits: {
    select: (value: Dayjs) => boolean;
    confirm: (value: Dayjs) => boolean;
};
export type TimePickerDropdownProps = ExtractPropTypes<typeof timePickerDropdownProps>;
export type TimePickerDropdownEmits = typeof timePickerDropdownEmits;
