import { ShortcutType } from './interface';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./interface").Mode))[], unknown, unknown, "date", boolean>;
    readonly modelValue: {
        readonly type: import("vue").PropType<(string | number | Date)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultValue: {
        readonly type: import("vue").PropType<(string | number | Date)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly pickerValue: {
        readonly type: import("vue").PropType<(string | number | Date)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultPickerValue: {
        readonly type: import("vue").PropType<(string | number | Date)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]) | ((new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]))[], unknown, unknown, false, boolean>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart))[], unknown, unknown, 0, boolean>;
    readonly format: {
        readonly type: import("vue").PropType<string>;
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
    readonly showTime: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly timePickerProps: {
        readonly type: import("vue").PropType<Partial<import("./interface").TimePickerProps>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly placeholder: {
        readonly type: import("vue").PropType<string[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledDate: {
        readonly type: import("vue").PropType<(current: Date, type: "end" | "start") => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledTime: {
        readonly type: import("vue").PropType<(current: Date, type: "end" | "start") => import("./interface").DisabledTimeProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly separator: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly exchangeTime: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly popupContainer: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly locale: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly hideTrigger: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly readonly: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
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
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | (() => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | ((new (...args: any[]) => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | (() => "bottom" | "top" | "br" | "tr" | "tl" | "bl"))[], unknown, unknown, "bl", boolean>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly triggerProps: {
        readonly type: import("vue").PropType<import("../../trigger").TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly unmountOnClose: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly previewShortcut: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly showConfirmBtn: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly disabledInput: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly abbreviation: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clear: () => void;
    change: (value: (import("./interface").CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => void;
    select: (value: (import("./interface").CalendarValue | undefined)[], date: (Date | undefined)[], dateString: (string | undefined)[] | undefined) => void;
    "update:modelValue": (value: (import("./interface").CalendarValue | undefined)[] | undefined) => void;
    "update:popupVisible": (visible: boolean) => void;
    ok: (value: (import("./interface").CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => void;
    "popup-visible-change": (visible: boolean) => void;
    "select-shortcut": (shortcut: ShortcutType) => void;
    "picker-value-change": (value: import("./interface").CalendarValue[], date: Date[], dateString: string[]) => void;
    "update:pickerValue": (value: import("./interface").CalendarValue[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./interface").Mode))[], unknown, unknown, "date", boolean>;
    readonly modelValue: {
        readonly type: import("vue").PropType<(string | number | Date)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultValue: {
        readonly type: import("vue").PropType<(string | number | Date)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly pickerValue: {
        readonly type: import("vue").PropType<(string | number | Date)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultPickerValue: {
        readonly type: import("vue").PropType<(string | number | Date)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]) | ((new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]))[], unknown, unknown, false, boolean>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart))[], unknown, unknown, 0, boolean>;
    readonly format: {
        readonly type: import("vue").PropType<string>;
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
    readonly showTime: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly timePickerProps: {
        readonly type: import("vue").PropType<Partial<import("./interface").TimePickerProps>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly placeholder: {
        readonly type: import("vue").PropType<string[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledDate: {
        readonly type: import("vue").PropType<(current: Date, type: "end" | "start") => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledTime: {
        readonly type: import("vue").PropType<(current: Date, type: "end" | "start") => import("./interface").DisabledTimeProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly separator: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly exchangeTime: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly popupContainer: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly locale: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly hideTrigger: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly readonly: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
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
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | (() => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | ((new (...args: any[]) => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | (() => "bottom" | "top" | "br" | "tr" | "tl" | "bl"))[], unknown, unknown, "bl", boolean>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly triggerProps: {
        readonly type: import("vue").PropType<import("../../trigger").TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly unmountOnClose: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly previewShortcut: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly showConfirmBtn: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly disabledInput: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly abbreviation: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & {
    onChange?: ((value: (import("./interface").CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => any) | undefined;
    onSelect?: ((value: (import("./interface").CalendarValue | undefined)[], date: (Date | undefined)[], dateString: (string | undefined)[] | undefined) => any) | undefined;
    onOk?: ((value: (import("./interface").CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => any) | undefined;
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: (import("./interface").CalendarValue | undefined)[] | undefined) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onPopup-visible-change"?: ((visible: boolean) => any) | undefined;
    "onSelect-shortcut"?: ((shortcut: ShortcutType) => any) | undefined;
    "onPicker-value-change"?: ((value: import("./interface").CalendarValue[], date: Date[], dateString: string[]) => any) | undefined;
    "onUpdate:pickerValue"?: ((value: import("./interface").CalendarValue[]) => any) | undefined;
}, {
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | (() => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | ((new (...args: any[]) => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | (() => "bottom" | "top" | "br" | "tr" | "tl" | "bl"))[], unknown, unknown>;
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]) | ((new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]))[], unknown, unknown>;
    readonly mode: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./interface").Mode))[], unknown, unknown>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly showTime: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly showConfirmBtn: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly shortcuts: ShortcutType[];
    readonly shortcutsPosition: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right") | ((new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right"))[], unknown, unknown>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart))[], unknown, unknown>;
    readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly abbreviation: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly previewShortcut: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly disabledInput: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly exchangeTime: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>, {
    default?(_: {}): any;
    prefix?(_: {}): any;
    "suffix-icon"?(_: {}): any;
    separator?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
