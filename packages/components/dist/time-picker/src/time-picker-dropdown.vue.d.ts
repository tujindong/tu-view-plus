import { Dayjs } from 'dayjs';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly value: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => Dayjs) | (() => Dayjs | undefined) | ((new (...args: any[]) => Dayjs) | (() => Dayjs | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly visible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "HH:mm:ss", boolean>;
    readonly use12Hours: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly step: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => {
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => () => number[]) | (() => (() => number[]) | undefined) | {
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (selectedHour?: number | undefined) => number[]) | (() => ((selectedHour?: number | undefined) => number[]) | undefined) | {
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (selectedHour?: number | undefined, selectedMinute?: number | undefined) => number[]) | (() => ((selectedHour?: number | undefined, selectedMinute?: number | undefined) => number[]) | undefined) | {
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (value: Dayjs) => void;
    confirm: (value: Dayjs) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly value: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => Dayjs) | (() => Dayjs | undefined) | ((new (...args: any[]) => Dayjs) | (() => Dayjs | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly visible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "HH:mm:ss", boolean>;
    readonly use12Hours: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly step: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => {
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => () => number[]) | (() => (() => number[]) | undefined) | {
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (selectedHour?: number | undefined) => number[]) | (() => ((selectedHour?: number | undefined) => number[]) | undefined) | {
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => (selectedHour?: number | undefined, selectedMinute?: number | undefined) => number[]) | (() => ((selectedHour?: number | undefined, selectedMinute?: number | undefined) => number[]) | undefined) | {
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
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & {
    onSelect?: ((value: Dayjs) => any) | undefined;
    onConfirm?: ((value: Dayjs) => any) | undefined;
}, {
    readonly visible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly format: string;
    readonly hideDisabledOptions: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly hideFooter: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly isRange: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>, {
    "extra-footer"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
