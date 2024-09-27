import { Dayjs } from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    readonly isRange: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly value: {
        readonly type: import("vue").PropType<Dayjs>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly rangeValues: {
        readonly type: import("vue").PropType<(Dayjs | undefined)[]>;
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
    readonly footerValue: {
        readonly type: import("vue").PropType<Dayjs>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly timePickerValue: {
        readonly type: import("vue").PropType<Dayjs>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerOperations: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("../../interface").HeaderOperations) | (() => import("../../interface").HeaderOperations) | ((new (...args: any[]) => import("../../interface").HeaderOperations) | (() => import("../../interface").HeaderOperations))[], unknown, unknown, () => {}, boolean>;
    readonly headerIcons: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("../../interface").HeaderIcons) | (() => import("../../interface").HeaderIcons) | ((new (...args: any[]) => import("../../interface").HeaderIcons) | (() => import("../../interface").HeaderIcons))[], unknown, unknown, () => {}, boolean>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 3 | 5 | 1 | 2 | 4 | 6) | (() => import("../../interface").WeekStart) | ((new (...args: any[]) => 0 | 3 | 5 | 1 | 2 | 4 | 6) | (() => import("../../interface").WeekStart))[], unknown, unknown, 0, boolean>;
    readonly disabledDate: {
        readonly type: import("vue").PropType<import("../../interface").DisabledDate>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledTime: {
        readonly type: import("vue").PropType<import("../../interface").DisabledTime>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly isSameTime: {
        readonly type: import("vue").PropType<import("../../interface").IsSameTime>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("../../interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("../../interface").Mode))[], unknown, unknown, "date", boolean>;
    readonly showTime: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly timePickerProps: {
        readonly type: import("vue").PropType<Partial<import("../../interface").TimePickerProps>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly currentView: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "time" | "date") | (() => "time" | "date") | ((new (...args: any[]) => "time" | "date") | (() => "time" | "date"))[], unknown, unknown>>;
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
    readonly disabled: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onHeaderLabelClick: {
        readonly type: import("vue").PropType<import("../header").HeaderLabelClickFunc>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly isRange: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly value: {
        readonly type: import("vue").PropType<Dayjs>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly rangeValues: {
        readonly type: import("vue").PropType<(Dayjs | undefined)[]>;
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
    readonly footerValue: {
        readonly type: import("vue").PropType<Dayjs>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly timePickerValue: {
        readonly type: import("vue").PropType<Dayjs>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly headerOperations: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("../../interface").HeaderOperations) | (() => import("../../interface").HeaderOperations) | ((new (...args: any[]) => import("../../interface").HeaderOperations) | (() => import("../../interface").HeaderOperations))[], unknown, unknown, () => {}, boolean>;
    readonly headerIcons: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("../../interface").HeaderIcons) | (() => import("../../interface").HeaderIcons) | ((new (...args: any[]) => import("../../interface").HeaderIcons) | (() => import("../../interface").HeaderIcons))[], unknown, unknown, () => {}, boolean>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 3 | 5 | 1 | 2 | 4 | 6) | (() => import("../../interface").WeekStart) | ((new (...args: any[]) => 0 | 3 | 5 | 1 | 2 | 4 | 6) | (() => import("../../interface").WeekStart))[], unknown, unknown, 0, boolean>;
    readonly disabledDate: {
        readonly type: import("vue").PropType<import("../../interface").DisabledDate>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledTime: {
        readonly type: import("vue").PropType<import("../../interface").DisabledTime>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly isSameTime: {
        readonly type: import("vue").PropType<import("../../interface").IsSameTime>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("../../interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("../../interface").Mode))[], unknown, unknown, "date", boolean>;
    readonly showTime: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly timePickerProps: {
        readonly type: import("vue").PropType<Partial<import("../../interface").TimePickerProps>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly currentView: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "time" | "date") | (() => "time" | "date") | ((new (...args: any[]) => "time" | "date") | (() => "time" | "date"))[], unknown, unknown>>;
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
    readonly disabled: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onHeaderLabelClick: {
        readonly type: import("vue").PropType<import("../header").HeaderLabelClickFunc>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>>, {
    readonly mode: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("../../interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("../../interface").Mode))[], unknown, unknown>;
    readonly isRange: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly showTime: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => 0 | 3 | 5 | 1 | 2 | 4 | 6) | (() => import("../../interface").WeekStart) | ((new (...args: any[]) => 0 | 3 | 5 | 1 | 2 | 4 | 6) | (() => import("../../interface").WeekStart))[], unknown, unknown>;
    readonly headerIcons: import("../../interface").HeaderIcons;
    readonly headerOperations: import("../../interface").HeaderOperations;
}, {}>;
export default _default;
