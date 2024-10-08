export declare const TuTimePicker: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "time" | "time-range") | (() => "time" | "time-range") | ((new (...args: any[]) => "time" | "time-range") | (() => "time" | "time-range"))[], unknown, unknown, "time", boolean>;
        readonly modelValue: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]) | ((new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly defaultValue: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]) | ((new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]))[], unknown, unknown>>;
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
        readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "HH:mm:ss", boolean>;
        readonly placeholder: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => String | string[]) | (() => String | string[]) | ((new (...args: any[]) => String | string[]) | (() => String | string[]))[], unknown, unknown>>;
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
        readonly popupContainer: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly use12Hours: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly step: {
            readonly type: import("vue").PropType<{
                hour?: number | undefined;
                minute?: number | undefined;
                second?: number | undefined;
            }>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabledHours: {
            readonly type: import("vue").PropType<() => number[]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabledMinutes: {
            readonly type: import("vue").PropType<(selectedHour?: number | undefined) => number[]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabledSeconds: {
            readonly type: import("vue").PropType<(selectedHour?: number | undefined, selectedMinute?: number | undefined) => number[]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly hideDisabledOptions: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disableConfirm: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown, "bl", boolean>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
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
    }>> & {
        onChange?: ((timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any) | undefined;
        onSelect?: ((timeString: string | (string | undefined)[], time: Date | (Date | undefined)[]) => any) | undefined;
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((timeString: string | (string | undefined)[] | undefined) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onPopup-visible-change"?: ((visible: boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => void;
        select: (timeString: string | (string | undefined)[], time: Date | (Date | undefined)[]) => void;
        clear: () => void;
        "update:modelValue": (timeString: string | (string | undefined)[] | undefined) => void;
        "update:popupVisible": (visible: boolean) => void;
        "popup-visible-change": (visible: boolean) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "time" | "time-range") | (() => "time" | "time-range") | ((new (...args: any[]) => "time" | "time-range") | (() => "time" | "time-range"))[], unknown, unknown, "time", boolean>;
        readonly modelValue: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]) | ((new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly defaultValue: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]) | ((new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]))[], unknown, unknown>>;
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
        readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "HH:mm:ss", boolean>;
        readonly placeholder: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => String | string[]) | (() => String | string[]) | ((new (...args: any[]) => String | string[]) | (() => String | string[]))[], unknown, unknown>>;
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
        readonly popupContainer: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly use12Hours: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly step: {
            readonly type: import("vue").PropType<{
                hour?: number | undefined;
                minute?: number | undefined;
                second?: number | undefined;
            }>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabledHours: {
            readonly type: import("vue").PropType<() => number[]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabledMinutes: {
            readonly type: import("vue").PropType<(selectedHour?: number | undefined) => number[]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabledSeconds: {
            readonly type: import("vue").PropType<(selectedHour?: number | undefined, selectedMinute?: number | undefined) => number[]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly hideDisabledOptions: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disableConfirm: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown, "bl", boolean>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
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
    }>> & {
        onChange?: ((timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any) | undefined;
        onSelect?: ((timeString: string | (string | undefined)[], time: Date | (Date | undefined)[]) => any) | undefined;
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((timeString: string | (string | undefined)[] | undefined) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onPopup-visible-change"?: ((visible: boolean) => any) | undefined;
    }, {
        readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "time" | "time-range") | (() => "time" | "time-range") | ((new (...args: any[]) => "time" | "time-range") | (() => "time" | "time-range"))[], unknown, unknown>;
        readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly format: string;
        readonly disableConfirm: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "time" | "time-range") | (() => "time" | "time-range") | ((new (...args: any[]) => "time" | "time-range") | (() => "time" | "time-range"))[], unknown, unknown, "time", boolean>;
        readonly modelValue: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]) | ((new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly defaultValue: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]) | ((new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]))[], unknown, unknown>>;
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
        readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "HH:mm:ss", boolean>;
        readonly placeholder: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => String | string[]) | (() => String | string[]) | ((new (...args: any[]) => String | string[]) | (() => String | string[]))[], unknown, unknown>>;
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
        readonly popupContainer: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly use12Hours: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly step: {
            readonly type: import("vue").PropType<{
                hour?: number | undefined;
                minute?: number | undefined;
                second?: number | undefined;
            }>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabledHours: {
            readonly type: import("vue").PropType<() => number[]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabledMinutes: {
            readonly type: import("vue").PropType<(selectedHour?: number | undefined) => number[]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabledSeconds: {
            readonly type: import("vue").PropType<(selectedHour?: number | undefined, selectedMinute?: number | undefined) => number[]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly hideDisabledOptions: {
            readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disableConfirm: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown, "bl", boolean>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
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
    }>> & {
        onChange?: ((timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any) | undefined;
        onSelect?: ((timeString: string | (string | undefined)[], time: Date | (Date | undefined)[]) => any) | undefined;
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((timeString: string | (string | undefined)[] | undefined) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onPopup-visible-change"?: ((visible: boolean) => any) | undefined;
    }, {}, {}, {}, {}, {
        readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "time" | "time-range") | (() => "time" | "time-range") | ((new (...args: any[]) => "time" | "time-range") | (() => "time" | "time-range"))[], unknown, unknown>;
        readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
        readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly format: string;
        readonly disableConfirm: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "time" | "time-range") | (() => "time" | "time-range") | ((new (...args: any[]) => "time" | "time-range") | (() => "time" | "time-range"))[], unknown, unknown, "time", boolean>;
    readonly modelValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]) | ((new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]) | ((new (...args: any[]) => string | number | Date | (string | number | Date)[]) | (() => string | number | Date | (string | number | Date)[]))[], unknown, unknown>>;
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
    readonly format: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "HH:mm:ss", boolean>;
    readonly placeholder: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => String | string[]) | (() => String | string[]) | ((new (...args: any[]) => String | string[]) | (() => String | string[]))[], unknown, unknown>>;
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
    readonly popupContainer: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly use12Hours: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly step: {
        readonly type: import("vue").PropType<{
            hour?: number | undefined;
            minute?: number | undefined;
            second?: number | undefined;
        }>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledHours: {
        readonly type: import("vue").PropType<() => number[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledMinutes: {
        readonly type: import("vue").PropType<(selectedHour?: number | undefined) => number[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabledSeconds: {
        readonly type: import("vue").PropType<(selectedHour?: number | undefined, selectedMinute?: number | undefined) => number[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly hideDisabledOptions: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disableConfirm: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown, "bl", boolean>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
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
}>> & {
    onChange?: ((timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any) | undefined;
    onSelect?: ((timeString: string | (string | undefined)[], time: Date | (Date | undefined)[]) => any) | undefined;
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((timeString: string | (string | undefined)[] | undefined) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onPopup-visible-change"?: ((visible: boolean) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => void;
    select: (timeString: string | (string | undefined)[], time: Date | (Date | undefined)[]) => void;
    clear: () => void;
    "update:modelValue": (timeString: string | (string | undefined)[] | undefined) => void;
    "update:popupVisible": (visible: boolean) => void;
    "popup-visible-change": (visible: boolean) => void;
}, string, {
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "time" | "time-range") | (() => "time" | "time-range") | ((new (...args: any[]) => "time" | "time-range") | (() => "time" | "time-range"))[], unknown, unknown>;
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | ((new (...args: any[]) => "br" | "tr" | "bottom" | "top" | "tl" | "bl") | (() => "br" | "tr" | "bottom" | "top" | "tl" | "bl"))[], unknown, unknown>;
    readonly popupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultPopupVisible: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly format: string;
    readonly disableConfirm: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix?(_: {}): any;
        "suffix-icon"?(_: {}): any;
        extra?(_: {}): any;
    };
})> & Record<string, any>;
export default TuTimePicker;
export * from './src/time-picker';
