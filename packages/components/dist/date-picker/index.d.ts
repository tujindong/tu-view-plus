export declare const TuDatePicker: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
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
    readonly format: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | ((current: Date) => string)) | (() => string | ((current: Date) => string)) | ((new (...args: any[]) => string | ((current: Date) => string)) | (() => string | ((current: Date) => string)))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart))[], unknown, unknown, 0, boolean>;
    readonly showTime: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly timePickerProps: {
        readonly type: import("vue").PropType<Partial<import("./src/interface").TimePickerProps>>;
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
    readonly disabledDate: {
        readonly type: import("vue").PropType<(current?: Date | undefined) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledTime: {
        readonly type: import("vue").PropType<(current: Date) => import("./src/interface").DisabledTimeProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showNowBtn: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    readonly format: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | ((current: Date) => string)) | (() => string | ((current: Date) => string)) | ((new (...args: any[]) => string | ((current: Date) => string)) | (() => string | ((current: Date) => string)))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart))[], unknown, unknown, 0, boolean>;
    readonly showTime: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly timePickerProps: {
        readonly type: import("vue").PropType<Partial<import("./src/interface").TimePickerProps>>;
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
    readonly disabledDate: {
        readonly type: import("vue").PropType<(current?: Date | undefined) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledTime: {
        readonly type: import("vue").PropType<(current: Date) => import("./src/interface").DisabledTimeProps>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly showNowBtn: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>>, {
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart))[], unknown, unknown>;
    readonly showNowBtn: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>> & Record<string, any>;
export declare const TuMonthPicker: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
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
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "YYYY-MM", boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "YYYY-MM", boolean>;
}>>, {
    readonly format: string;
}, {}>> & Record<string, any>;
export declare const TuQuarterPicker: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
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
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "YYYY-[Q]Q", boolean>;
    readonly valueFormat: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "YYYY-MM", boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "YYYY-[Q]Q", boolean>;
    readonly valueFormat: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "YYYY-MM", boolean>;
}>>, {
    readonly format: string;
    readonly valueFormat: string;
}, {}>> & Record<string, any>;
export declare const TuWeekPicker: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
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
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "gggg-wo", boolean>;
    readonly valueFormat: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "YYYY-MM-DD", boolean>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart))[], unknown, unknown, 0, boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "gggg-wo", boolean>;
    readonly valueFormat: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "YYYY-MM-DD", boolean>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart))[], unknown, unknown, 0, boolean>;
}>>, {
    readonly format: string;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart))[], unknown, unknown>;
    readonly valueFormat: string;
}, {}>> & Record<string, any>;
export declare const TuYearPicker: import("@tu-view-plus/utils").SFCWithInstall<import("vue").DefineComponent<{
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
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "YYYY", boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "YYYY", boolean>;
}>>, {
    readonly format: string;
}, {}>> & Record<string, any>;
export declare const TuRangePicker: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./src/interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./src/interface").Mode))[], unknown, unknown, "date", boolean>;
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
        readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart))[], unknown, unknown, 0, boolean>;
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
            readonly type: import("vue").PropType<Partial<import("./src/interface").TimePickerProps>>;
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
            readonly type: import("vue").PropType<(current: Date, type: "end" | "start") => import("./src/interface").DisabledTimeProps>;
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
        readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
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
        readonly shortcuts: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/interface").ShortcutType[]) | (() => import("./src/interface").ShortcutType[]) | ((new (...args: any[]) => import("./src/interface").ShortcutType[]) | (() => import("./src/interface").ShortcutType[]))[], unknown, unknown, () => never[], boolean>;
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
            readonly type: import("vue").PropType<import("../trigger").TriggerProps>;
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
        onChange?: ((value: (import("./src/interface").CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => any) | undefined;
        onSelect?: ((value: (import("./src/interface").CalendarValue | undefined)[], date: (Date | undefined)[], dateString: (string | undefined)[] | undefined) => any) | undefined;
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((value: (import("./src/interface").CalendarValue | undefined)[] | undefined) => any) | undefined;
        onClear?: (() => any) | undefined;
        onOk?: ((value: (import("./src/interface").CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => any) | undefined;
        "onPopup-visible-change"?: ((visible: boolean) => any) | undefined;
        "onSelect-shortcut"?: ((shortcut: import("./src/interface").ShortcutType) => any) | undefined;
        "onPicker-value-change"?: ((value: import("./src/interface").CalendarValue[], date: Date[], dateString: string[]) => any) | undefined;
        "onUpdate:pickerValue"?: ((value: import("./src/interface").CalendarValue[]) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        clear: () => void;
        change: (value: (import("./src/interface").CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => void;
        select: (value: (import("./src/interface").CalendarValue | undefined)[], date: (Date | undefined)[], dateString: (string | undefined)[] | undefined) => void;
        "update:modelValue": (value: (import("./src/interface").CalendarValue | undefined)[] | undefined) => void;
        "update:popupVisible": (visible: boolean) => void;
        "popup-visible-change": (visible: boolean) => void;
        ok: (value: (import("./src/interface").CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => void;
        "select-shortcut": (shortcut: import("./src/interface").ShortcutType) => void;
        "picker-value-change": (value: import("./src/interface").CalendarValue[], date: Date[], dateString: string[]) => void;
        "update:pickerValue": (value: import("./src/interface").CalendarValue[]) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./src/interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./src/interface").Mode))[], unknown, unknown, "date", boolean>;
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
        readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart))[], unknown, unknown, 0, boolean>;
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
            readonly type: import("vue").PropType<Partial<import("./src/interface").TimePickerProps>>;
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
            readonly type: import("vue").PropType<(current: Date, type: "end" | "start") => import("./src/interface").DisabledTimeProps>;
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
        readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
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
        readonly shortcuts: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/interface").ShortcutType[]) | (() => import("./src/interface").ShortcutType[]) | ((new (...args: any[]) => import("./src/interface").ShortcutType[]) | (() => import("./src/interface").ShortcutType[]))[], unknown, unknown, () => never[], boolean>;
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
            readonly type: import("vue").PropType<import("../trigger").TriggerProps>;
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
        onChange?: ((value: (import("./src/interface").CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => any) | undefined;
        onSelect?: ((value: (import("./src/interface").CalendarValue | undefined)[], date: (Date | undefined)[], dateString: (string | undefined)[] | undefined) => any) | undefined;
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((value: (import("./src/interface").CalendarValue | undefined)[] | undefined) => any) | undefined;
        onClear?: (() => any) | undefined;
        onOk?: ((value: (import("./src/interface").CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => any) | undefined;
        "onPopup-visible-change"?: ((visible: boolean) => any) | undefined;
        "onSelect-shortcut"?: ((shortcut: import("./src/interface").ShortcutType) => any) | undefined;
        "onPicker-value-change"?: ((value: import("./src/interface").CalendarValue[], date: Date[], dateString: string[]) => any) | undefined;
        "onUpdate:pickerValue"?: ((value: import("./src/interface").CalendarValue[]) => any) | undefined;
    }, {
        readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | (() => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | ((new (...args: any[]) => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | (() => "bottom" | "top" | "br" | "tr" | "tl" | "bl"))[], unknown, unknown>;
        readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]) | ((new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]))[], unknown, unknown>;
        readonly mode: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./src/interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./src/interface").Mode))[], unknown, unknown>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly showTime: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly showConfirmBtn: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly shortcuts: import("./src/interface").ShortcutType[];
        readonly shortcutsPosition: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right") | ((new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right"))[], unknown, unknown>;
        readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart))[], unknown, unknown>;
        readonly abbreviation: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly previewShortcut: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly disabledInput: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly exchangeTime: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./src/interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./src/interface").Mode))[], unknown, unknown, "date", boolean>;
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
        readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart))[], unknown, unknown, 0, boolean>;
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
            readonly type: import("vue").PropType<Partial<import("./src/interface").TimePickerProps>>;
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
            readonly type: import("vue").PropType<(current: Date, type: "end" | "start") => import("./src/interface").DisabledTimeProps>;
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
        readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
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
        readonly shortcuts: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/interface").ShortcutType[]) | (() => import("./src/interface").ShortcutType[]) | ((new (...args: any[]) => import("./src/interface").ShortcutType[]) | (() => import("./src/interface").ShortcutType[]))[], unknown, unknown, () => never[], boolean>;
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
            readonly type: import("vue").PropType<import("../trigger").TriggerProps>;
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
        onChange?: ((value: (import("./src/interface").CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => any) | undefined;
        onSelect?: ((value: (import("./src/interface").CalendarValue | undefined)[], date: (Date | undefined)[], dateString: (string | undefined)[] | undefined) => any) | undefined;
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((value: (import("./src/interface").CalendarValue | undefined)[] | undefined) => any) | undefined;
        onClear?: (() => any) | undefined;
        onOk?: ((value: (import("./src/interface").CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => any) | undefined;
        "onPopup-visible-change"?: ((visible: boolean) => any) | undefined;
        "onSelect-shortcut"?: ((shortcut: import("./src/interface").ShortcutType) => any) | undefined;
        "onPicker-value-change"?: ((value: import("./src/interface").CalendarValue[], date: Date[], dateString: string[]) => any) | undefined;
        "onUpdate:pickerValue"?: ((value: import("./src/interface").CalendarValue[]) => any) | undefined;
    }, {}, {}, {}, {}, {
        readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | (() => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | ((new (...args: any[]) => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | (() => "bottom" | "top" | "br" | "tr" | "tl" | "bl"))[], unknown, unknown>;
        readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]) | ((new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]))[], unknown, unknown>;
        readonly mode: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./src/interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./src/interface").Mode))[], unknown, unknown>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly showTime: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly showConfirmBtn: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly shortcuts: import("./src/interface").ShortcutType[];
        readonly shortcutsPosition: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right") | ((new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right"))[], unknown, unknown>;
        readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart))[], unknown, unknown>;
        readonly abbreviation: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly previewShortcut: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly disabledInput: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly exchangeTime: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./src/interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./src/interface").Mode))[], unknown, unknown, "date", boolean>;
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
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart))[], unknown, unknown, 0, boolean>;
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
        readonly type: import("vue").PropType<Partial<import("./src/interface").TimePickerProps>>;
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
        readonly type: import("vue").PropType<(current: Date, type: "end" | "start") => import("./src/interface").DisabledTimeProps>;
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
    readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
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
    readonly shortcuts: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => import("./src/interface").ShortcutType[]) | (() => import("./src/interface").ShortcutType[]) | ((new (...args: any[]) => import("./src/interface").ShortcutType[]) | (() => import("./src/interface").ShortcutType[]))[], unknown, unknown, () => never[], boolean>;
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
        readonly type: import("vue").PropType<import("../trigger").TriggerProps>;
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
    onChange?: ((value: (import("./src/interface").CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => any) | undefined;
    onSelect?: ((value: (import("./src/interface").CalendarValue | undefined)[], date: (Date | undefined)[], dateString: (string | undefined)[] | undefined) => any) | undefined;
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: (import("./src/interface").CalendarValue | undefined)[] | undefined) => any) | undefined;
    onClear?: (() => any) | undefined;
    onOk?: ((value: (import("./src/interface").CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => any) | undefined;
    "onPopup-visible-change"?: ((visible: boolean) => any) | undefined;
    "onSelect-shortcut"?: ((shortcut: import("./src/interface").ShortcutType) => any) | undefined;
    "onPicker-value-change"?: ((value: import("./src/interface").CalendarValue[], date: Date[], dateString: string[]) => any) | undefined;
    "onUpdate:pickerValue"?: ((value: import("./src/interface").CalendarValue[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clear: () => void;
    change: (value: (import("./src/interface").CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => void;
    select: (value: (import("./src/interface").CalendarValue | undefined)[], date: (Date | undefined)[], dateString: (string | undefined)[] | undefined) => void;
    "update:modelValue": (value: (import("./src/interface").CalendarValue | undefined)[] | undefined) => void;
    "update:popupVisible": (visible: boolean) => void;
    "popup-visible-change": (visible: boolean) => void;
    ok: (value: (import("./src/interface").CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => void;
    "select-shortcut": (shortcut: import("./src/interface").ShortcutType) => void;
    "picker-value-change": (value: import("./src/interface").CalendarValue[], date: Date[], dateString: string[]) => void;
    "update:pickerValue": (value: import("./src/interface").CalendarValue[]) => void;
}, string, {
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | (() => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | ((new (...args: any[]) => "bottom" | "top" | "br" | "tr" | "tl" | "bl") | (() => "bottom" | "top" | "br" | "tr" | "tl" | "bl"))[], unknown, unknown>;
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]) | ((new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]))[], unknown, unknown>;
    readonly mode: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./src/interface").Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => import("./src/interface").Mode))[], unknown, unknown>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly showTime: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly showConfirmBtn: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly shortcuts: import("./src/interface").ShortcutType[];
    readonly shortcutsPosition: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right") | ((new (...args: any[]) => "bottom" | "left" | "right") | (() => "bottom" | "left" | "right"))[], unknown, unknown>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart))[], unknown, unknown>;
    readonly abbreviation: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly previewShortcut: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly disabledInput: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly exchangeTime: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        prefix?(_: {}): any;
        "suffix-icon"?(_: {}): any;
        separator?(_: {}): any;
    };
})> & Record<string, any>;
export * from './src/picker';
