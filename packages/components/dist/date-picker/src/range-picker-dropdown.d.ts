import { Dayjs } from 'dayjs';
import type { ExtractPropTypes, PropType } from 'vue';
import type RangePickerDropdown from './range-picker-dropdown.vue';
import type { ShortcutType, Mode, RangeDisabledTime, RangeDisabledDate, WeekStart, StartHeaderProps } from './interface';
import type { RenderFunc } from '@tu-view-plus/constants';
export declare const rangePickerDropdownProps: {
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => Mode))[], unknown, unknown, "date", boolean>;
    readonly value: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (Dayjs | undefined)[]) | (() => (Dayjs | undefined)[] | undefined) | ((new (...args: any[]) => (Dayjs | undefined)[]) | (() => (Dayjs | undefined)[] | undefined))[], unknown, unknown, () => never[], boolean>;
    readonly footerValue: {
        readonly type: PropType<(Dayjs | undefined)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly timePickerValue: {
        readonly type: PropType<Dayjs[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showTime: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showConfirmBtn: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly shortcuts: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ShortcutType[]) | (() => ShortcutType[]) | ((new (...args: any[]) => ShortcutType[]) | (() => ShortcutType[]))[], unknown, unknown, () => never[], boolean>;
    readonly shortcutsPosition: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right") | ((new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right"))[], unknown, unknown, "bottom", boolean>;
    readonly format: {
        readonly type: PropType<string>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => WeekStart))[], unknown, unknown, 0, boolean>;
    readonly disabledDate: {
        readonly type: PropType<RangeDisabledDate>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledTime: {
        readonly type: PropType<RangeDisabledTime>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly timePickerProps: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => Partial<import("./interface").TimePickerProps>) | (() => Partial<import("./interface").TimePickerProps> | undefined) | ((new (...args: any[]) => Partial<import("./interface").TimePickerProps>) | (() => Partial<import("./interface").TimePickerProps> | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly extra: {
        readonly type: PropType<RenderFunc>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dateRender: {
        readonly type: PropType<RenderFunc>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly hideTrigger: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly startHeaderProps: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => StartHeaderProps) | (() => StartHeaderProps) | ((new (...args: any[]) => StartHeaderProps) | (() => StartHeaderProps))[], unknown, unknown, () => {}, boolean>;
    readonly endHeaderProps: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => Record<string, any>) | (() => Record<string, any>) | ((new (...args: any[]) => Record<string, any>) | (() => Record<string, any>))[], unknown, unknown, () => {}, boolean>;
    readonly confirmBtnDisabled: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean[]) | (() => boolean[]) | ((new (...args: any[]) => boolean[]) | (() => boolean[]))[], unknown, unknown, () => boolean[], boolean>;
    readonly visible: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly startHeaderMode: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year") | (() => "month" | "year") | ((new (...args: any[]) => "month" | "year") | (() => "month" | "year"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly endHeaderMode: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year") | (() => "month" | "year") | ((new (...args: any[]) => "month" | "year") | (() => "month" | "year"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly abbreviation: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
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
};
export declare const rangePickerDropdownEmits: string[];
export type RangePickerDropdownProps = ExtractPropTypes<typeof rangePickerDropdownProps>;
export type RangePickerDropdownInstance = InstanceType<typeof RangePickerDropdown>;
