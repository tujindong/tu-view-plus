import type { ExtractPropTypes, PropType } from 'vue';
import type { TriggerProps } from '../../trigger';
export declare const timePickerProps: {
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "time" | "time-range") | (() => "time" | "time-range") | ((new (...args: any[]) => "time" | "time-range") | (() => "time" | "time-range"))[], unknown, unknown, "time", boolean>;
    readonly modelValue: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]) | ((new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultValue: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]) | ((new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly readonly: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly error: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "HH:mm:ss", boolean>;
    readonly placeholder: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => String | string[]) | (() => String | string[]) | ((new (...args: any[]) => String | string[]) | (() => String | string[]))[], unknown, unknown>>;
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
    readonly popupContainer: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly use12Hours: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly step: {
        readonly type: PropType<{
            hour?: number | undefined;
            minute?: number | undefined;
            second?: number | undefined;
        }>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledHours: {
        readonly type: PropType<() => number[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledMinutes: {
        readonly type: PropType<(selectedHour?: number) => number[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledSeconds: {
        readonly type: PropType<(selectedHour?: number, selectedMinute?: number) => number[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly hideDisabledOptions: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disableConfirm: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | (() => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | ((new (...args: any[]) => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | (() => "bottom" | "top" | "br" | "tr" | "tl" | "bl"))[], unknown, unknown, "bl", boolean>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly triggerProps: {
        readonly type: PropType<TriggerProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly unmountOnClose: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const TimePickerEmits: {
    /**
     * @zh 组件值发生改变
     * @en The component value changes
     * @param {string | Array<string | undefined> | undefined} timeString
     * @param {date | Array<date | undefined> | undefined} time
     */
    change: (timeString: string | Array<string | undefined> | undefined, time: Date | Array<Date | undefined> | undefined) => boolean;
    'update:modelValue': (timeString: string | Array<string | undefined> | undefined) => boolean;
    /**
     * @zh 选择时间但未触发组件值变化
     * @en Select time but do not trigger component value change
     * @param {string | Array<string | undefined>} timeString
     * @param {Date | Array<Date | undefined>} time
     */
    select: (timeString: string | Array<string | undefined>, time: Date | Array<Date | undefined>) => boolean;
    /**
     * @zh 点击清除按钮
     * @en Click the clear button
     * */
    clear: () => boolean;
    /**
     * @zh 弹出框展开和收起
     * @en Pop-up box expand and collapse
     * @param {boolean} visible
     */
    'popup-visible-change': (visible: boolean) => boolean;
    'update:popupVisible': (visible: boolean) => boolean;
};
export type TimePickerProps = ExtractPropTypes<typeof timePickerProps>;
