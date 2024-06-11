import { Dayjs } from 'dayjs';
import type { ShortcutType } from './interface';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./interface").Mode))[], unknown, unknown, "date", boolean>;
    readonly value: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (Dayjs | undefined)[]) | (() => (Dayjs | undefined)[] | undefined) | ((new (...args: any[]) => (Dayjs | undefined)[]) | (() => (Dayjs | undefined)[] | undefined))[], unknown, unknown, () => never[], boolean>;
    readonly footerValue: {
        readonly type: import("vue").PropType<(Dayjs | undefined)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly timePickerValue: {
        readonly type: import("vue").PropType<Dayjs[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showTime: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showConfirmBtn: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly shortcuts: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ShortcutType[]) | (() => ShortcutType[]) | ((new (...args: any[]) => ShortcutType[]) | (() => ShortcutType[]))[], unknown, unknown, () => never[], boolean>;
    readonly shortcutsPosition: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right") | ((new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right"))[], unknown, unknown, "bottom", boolean>;
    readonly format: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 1 | 2 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart) | ((new (...args: any[]) => 0 | 1 | 2 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart))[], unknown, unknown, 0, boolean>;
    readonly disabledDate: {
        readonly type: import("vue").PropType<import("./interface").RangeDisabledDate>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledTime: {
        readonly type: import("vue").PropType<import("./interface").RangeDisabledTime>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly timePickerProps: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => Partial<import("./interface").TimePickerProps>) | (() => Partial<import("./interface").TimePickerProps> | undefined) | ((new (...args: any[]) => Partial<import("./interface").TimePickerProps>) | (() => Partial<import("./interface").TimePickerProps> | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly extra: {
        readonly type: import("vue").PropType<import("@tu-view-plus/constants").RenderFunc>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dateRender: {
        readonly type: import("vue").PropType<import("@tu-view-plus/constants").RenderFunc>;
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
    readonly startHeaderProps: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./interface").StartHeaderProps) | (() => import("./interface").StartHeaderProps) | ((new (...args: any[]) => import("./interface").StartHeaderProps) | (() => import("./interface").StartHeaderProps))[], unknown, unknown, () => {}, boolean>;
    readonly endHeaderProps: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => Record<string, any>) | (() => Record<string, any>) | ((new (...args: any[]) => Record<string, any>) | (() => Record<string, any>))[], unknown, unknown, () => {}, boolean>;
    readonly confirmBtnDisabled: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean[]) | (() => boolean[]) | ((new (...args: any[]) => boolean[]) | (() => boolean[]))[], unknown, unknown, () => boolean[], boolean>;
    readonly visible: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly startHeaderMode: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year") | (() => "month" | "year") | ((new (...args: any[]) => "month" | "year") | (() => "month" | "year"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly endHeaderMode: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year") | (() => "month" | "year") | ((new (...args: any[]) => "month" | "year") | (() => "month" | "year"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly abbreviation: {
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./interface").Mode))[], unknown, unknown, "date", boolean>;
    readonly value: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (Dayjs | undefined)[]) | (() => (Dayjs | undefined)[] | undefined) | ((new (...args: any[]) => (Dayjs | undefined)[]) | (() => (Dayjs | undefined)[] | undefined))[], unknown, unknown, () => never[], boolean>;
    readonly footerValue: {
        readonly type: import("vue").PropType<(Dayjs | undefined)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly timePickerValue: {
        readonly type: import("vue").PropType<Dayjs[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showTime: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showConfirmBtn: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly shortcuts: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ShortcutType[]) | (() => ShortcutType[]) | ((new (...args: any[]) => ShortcutType[]) | (() => ShortcutType[]))[], unknown, unknown, () => never[], boolean>;
    readonly shortcutsPosition: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right") | ((new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right"))[], unknown, unknown, "bottom", boolean>;
    readonly format: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 1 | 2 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart) | ((new (...args: any[]) => 0 | 1 | 2 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart))[], unknown, unknown, 0, boolean>;
    readonly disabledDate: {
        readonly type: import("vue").PropType<import("./interface").RangeDisabledDate>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledTime: {
        readonly type: import("vue").PropType<import("./interface").RangeDisabledTime>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly timePickerProps: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => Partial<import("./interface").TimePickerProps>) | (() => Partial<import("./interface").TimePickerProps> | undefined) | ((new (...args: any[]) => Partial<import("./interface").TimePickerProps>) | (() => Partial<import("./interface").TimePickerProps> | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly extra: {
        readonly type: import("vue").PropType<import("@tu-view-plus/constants").RenderFunc>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dateRender: {
        readonly type: import("vue").PropType<import("@tu-view-plus/constants").RenderFunc>;
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
    readonly startHeaderProps: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./interface").StartHeaderProps) | (() => import("./interface").StartHeaderProps) | ((new (...args: any[]) => import("./interface").StartHeaderProps) | (() => import("./interface").StartHeaderProps))[], unknown, unknown, () => {}, boolean>;
    readonly endHeaderProps: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => Record<string, any>) | (() => Record<string, any>) | ((new (...args: any[]) => Record<string, any>) | (() => Record<string, any>))[], unknown, unknown, () => {}, boolean>;
    readonly confirmBtnDisabled: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean[]) | (() => boolean[]) | ((new (...args: any[]) => boolean[]) | (() => boolean[]))[], unknown, unknown, () => boolean[], boolean>;
    readonly visible: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly startHeaderMode: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year") | (() => "month" | "year") | ((new (...args: any[]) => "month" | "year") | (() => "month" | "year"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly endHeaderMode: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year") | (() => "month" | "year") | ((new (...args: any[]) => "month" | "year") | (() => "month" | "year"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly abbreviation: {
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
}>>, {
    readonly value: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (Dayjs | undefined)[]) | (() => (Dayjs | undefined)[] | undefined) | ((new (...args: any[]) => (Dayjs | undefined)[]) | (() => (Dayjs | undefined)[] | undefined))[], unknown, unknown>;
    readonly disabled: boolean[];
    readonly mode: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./interface").Mode))[], unknown, unknown>;
    readonly shortcuts: ShortcutType[];
    readonly shortcutsPosition: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right") | ((new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right"))[], unknown, unknown>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => 0 | 1 | 2 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart) | ((new (...args: any[]) => 0 | 1 | 2 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart))[], unknown, unknown>;
    readonly startHeaderProps: import("./interface").StartHeaderProps;
    readonly endHeaderProps: Record<string, any>;
}, {}>, {
    extra?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
