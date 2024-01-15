import { Dayjs } from 'dayjs';
import { ShortcutType, WeekStart, DisabledDate, DisabledTime, HeaderIcons, HeaderOperations } from './interface';
import { TimePickerProps } from '../../time-picker/src/interface';
import { RenderFunc } from '@tu-view-plus/constants';
import type { ExtractPropTypes, PropType } from 'vue';
import type PickerDropdown from './picker-dropdown.vue';
export declare const pickerDropdownProps: {
    readonly mode: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerMode: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year") | (() => "month" | "year") | ((new (...args: any[]) => "month" | "year") | (() => "month" | "year"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly value: {
        readonly type: PropType<Dayjs>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerValue: {
        readonly type: PropType<Dayjs>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly timePickerValue: {
        readonly type: PropType<Dayjs>;
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
        readonly type: PropType<DisabledDate>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledTime: {
        readonly type: PropType<DisabledTime>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly timePickerProps: {
        readonly type: PropType<Partial<TimePickerProps>>;
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
    readonly confirmBtnDisabled: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showNowBtn: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerIcons: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => HeaderIcons) | (() => HeaderIcons) | ((new (...args: any[]) => HeaderIcons) | (() => HeaderIcons))[], unknown, unknown, () => {}, boolean>;
    readonly headerOperations: {
        readonly type: PropType<HeaderOperations>;
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
export declare const pickerDropdownEmits: string[];
export type PickerDropdownProps = ExtractPropTypes<typeof pickerDropdownProps>;
export type PickerDropdownInstance = InstanceType<typeof PickerDropdown>;
export type PickerDropdownEmits = typeof pickerDropdownEmits;
