import { ShortcutType, FormatFunc } from './interface';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly locale: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly hideTrigger: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly readonly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly error: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly shortcuts: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ShortcutType[]) | (() => ShortcutType[]) | ((new (...args: any[]) => ShortcutType[]) | (() => ShortcutType[]))[], unknown, unknown, () => never[], boolean>;
    readonly shortcutsPosition: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right") | ((new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right"))[], unknown, unknown, "bottom", boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown, "bl", boolean>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly triggerProps: {
        readonly type: import("vue").PropType<import("../../trigger").TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly unmountOnClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly placeholder: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly disabledDate: {
        readonly type: import("vue").PropType<(current?: Date | undefined) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledTime: {
        readonly type: import("vue").PropType<(current: Date) => import("./interface").DisabledTimeProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly pickerValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date) | (() => string | number | Date) | ((new (...args: any[]) => string | number | Date) | (() => string | number | Date))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultPickerValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date) | (() => string | number | Date) | ((new (...args: any[]) => string | number | Date) | (() => string | number | Date))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popupContainer: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => "month" | "year" | "date" | "week" | "quarter") | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => "month" | "year" | "date" | "week" | "quarter"))[], unknown, unknown, "date", boolean>;
    readonly format: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | FormatFunc) | (() => string | FormatFunc) | ((new (...args: any[]) => string | FormatFunc) | (() => string | FormatFunc))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly valueFormat: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly previewShortcut: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly showConfirmBtn: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showTime: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly timePickerProps: {
        readonly type: import("vue").PropType<Partial<import("./interface").TimePickerProps>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showNowBtn: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 1 | 2 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart) | ((new (...args: any[]) => 0 | 1 | 2 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart))[], unknown, unknown, 0, boolean>;
    readonly modelValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date) | (() => string | number | Date) | ((new (...args: any[]) => string | number | Date) | (() => string | number | Date))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date) | (() => string | number | Date) | ((new (...args: any[]) => string | number | Date) | (() => string | number | Date))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledInput: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly abbreviation: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (value: import("./interface").CalendarValue | undefined, date: Date | undefined, dateString: string | undefined) => void;
    clear: () => void;
    change: (value: import("./interface").CalendarValue | undefined, date: Date | undefined, dateString: string | undefined) => void;
    "update:modelValue": (value: import("./interface").CalendarValue | undefined) => void;
    "update:popupVisible": (visible: boolean) => void;
    "popup-visible-change": (visible: boolean) => void;
    ok: (value: import("./interface").CalendarValue | undefined, date: Date | undefined, dateString: string | undefined) => void;
    "select-shortcut": (shortcut: ShortcutType) => void;
    "picker-value-change": (value: import("./interface").CalendarValue, date: Date, dateString: string) => void;
    "update:pickerValue": (value: import("./interface").CalendarValue) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly locale: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly hideTrigger: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly readonly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly error: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly shortcuts: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ShortcutType[]) | (() => ShortcutType[]) | ((new (...args: any[]) => ShortcutType[]) | (() => ShortcutType[]))[], unknown, unknown, () => never[], boolean>;
    readonly shortcutsPosition: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right") | ((new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right"))[], unknown, unknown, "bottom", boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown, "bl", boolean>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly triggerProps: {
        readonly type: import("vue").PropType<import("../../trigger").TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly unmountOnClose: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly placeholder: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly disabledDate: {
        readonly type: import("vue").PropType<(current?: Date | undefined) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledTime: {
        readonly type: import("vue").PropType<(current: Date) => import("./interface").DisabledTimeProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly pickerValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date) | (() => string | number | Date) | ((new (...args: any[]) => string | number | Date) | (() => string | number | Date))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultPickerValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date) | (() => string | number | Date) | ((new (...args: any[]) => string | number | Date) | (() => string | number | Date))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly popupContainer: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => "month" | "year" | "date" | "week" | "quarter") | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => "month" | "year" | "date" | "week" | "quarter"))[], unknown, unknown, "date", boolean>;
    readonly format: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | FormatFunc) | (() => string | FormatFunc) | ((new (...args: any[]) => string | FormatFunc) | (() => string | FormatFunc))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly valueFormat: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly previewShortcut: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly showConfirmBtn: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showTime: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly timePickerProps: {
        readonly type: import("vue").PropType<Partial<import("./interface").TimePickerProps>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showNowBtn: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 1 | 2 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart) | ((new (...args: any[]) => 0 | 1 | 2 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart))[], unknown, unknown, 0, boolean>;
    readonly modelValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date) | (() => string | number | Date) | ((new (...args: any[]) => string | number | Date) | (() => string | number | Date))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date) | (() => string | number | Date) | ((new (...args: any[]) => string | number | Date) | (() => string | number | Date))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledInput: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly abbreviation: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
    onChange?: ((value: import("./interface").CalendarValue | undefined, date: Date | undefined, dateString: string | undefined) => any) | undefined;
    onSelect?: ((value: import("./interface").CalendarValue | undefined, date: Date | undefined, dateString: string | undefined) => any) | undefined;
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./interface").CalendarValue | undefined) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onPopup-visible-change"?: ((visible: boolean) => any) | undefined;
    onOk?: ((value: import("./interface").CalendarValue | undefined, date: Date | undefined, dateString: string | undefined) => any) | undefined;
    "onSelect-shortcut"?: ((shortcut: ShortcutType) => any) | undefined;
    "onPicker-value-change"?: ((value: import("./interface").CalendarValue, date: Date, dateString: string) => any) | undefined;
    "onUpdate:pickerValue"?: ((value: import("./interface").CalendarValue) => any) | undefined;
}, {
    readonly hideTrigger: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
    readonly mode: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => "month" | "year" | "date" | "week" | "quarter") | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => "month" | "year" | "date" | "week" | "quarter"))[], unknown, unknown>;
    readonly readonly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly unmountOnClose: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly disabledInput: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly showTime: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly showConfirmBtn: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly shortcuts: ShortcutType[];
    readonly shortcutsPosition: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right") | ((new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right"))[], unknown, unknown>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => 0 | 1 | 2 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart) | ((new (...args: any[]) => 0 | 1 | 2 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart))[], unknown, unknown>;
    readonly showNowBtn: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly abbreviation: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly previewShortcut: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>, {
    default?(_: {}): any;
    prefix?(_: {}): any;
    "suffix-icon"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
