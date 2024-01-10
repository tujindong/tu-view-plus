import { Dayjs } from 'dayjs';
import type { ShortcutType } from './interface';
declare const _default: import("vue").DefineComponent<{
    readonly mode: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerMode: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year") | (() => "month" | "year") | ((new (...args: any[]) => "month" | "year") | (() => "month" | "year"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly value: {
        readonly type: import("vue").PropType<Dayjs>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerValue: {
        readonly type: import("vue").PropType<Dayjs>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly timePickerValue: {
        readonly type: import("vue").PropType<Dayjs>;
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
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart))[], unknown, unknown, 0, boolean>;
    readonly disabledDate: {
        readonly type: import("vue").PropType<import("./interface").DisabledDate>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledTime: {
        readonly type: import("vue").PropType<import("./interface").DisabledTime>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly timePickerProps: {
        readonly type: import("vue").PropType<Partial<import("./interface").TimePickerProps>>;
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
    readonly confirmBtnDisabled: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showNowBtn: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerIcons: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./interface").HeaderIcons) | (() => import("./interface").HeaderIcons) | ((new (...args: any[]) => import("./interface").HeaderIcons) | (() => import("./interface").HeaderIcons))[], unknown, unknown, () => {}, boolean>;
    readonly headerOperations: {
        readonly type: import("vue").PropType<import("./interface").HeaderOperations>;
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly mode: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerMode: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year") | (() => "month" | "year") | ((new (...args: any[]) => "month" | "year") | (() => "month" | "year"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly value: {
        readonly type: import("vue").PropType<Dayjs>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerValue: {
        readonly type: import("vue").PropType<Dayjs>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly timePickerValue: {
        readonly type: import("vue").PropType<Dayjs>;
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
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart))[], unknown, unknown, 0, boolean>;
    readonly disabledDate: {
        readonly type: import("vue").PropType<import("./interface").DisabledDate>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledTime: {
        readonly type: import("vue").PropType<import("./interface").DisabledTime>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly timePickerProps: {
        readonly type: import("vue").PropType<Partial<import("./interface").TimePickerProps>>;
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
    readonly confirmBtnDisabled: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showNowBtn: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerIcons: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./interface").HeaderIcons) | (() => import("./interface").HeaderIcons) | ((new (...args: any[]) => import("./interface").HeaderIcons) | (() => import("./interface").HeaderIcons))[], unknown, unknown, () => {}, boolean>;
    readonly headerOperations: {
        readonly type: import("vue").PropType<import("./interface").HeaderOperations>;
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
}>>, {
    readonly shortcuts: ShortcutType[];
    readonly shortcutsPosition: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right") | ((new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right"))[], unknown, unknown>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./interface").WeekStart))[], unknown, unknown>;
    readonly headerIcons: import("./interface").HeaderIcons;
}, {}>;
export default _default;
