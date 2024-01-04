export declare const TuDatePicker: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
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
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
        readonly showNowBtn: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart))[], unknown, unknown>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
    }>>, {}, {}, {}, {}, {
        readonly showNowBtn: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart))[], unknown, unknown>;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly showNowBtn: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly dayStartOfWeek: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart) | ((new (...args: any[]) => 0 | 2 | 1 | 3 | 4 | 5 | 6) | (() => import("./src/interface").WeekStart))[], unknown, unknown>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TuMonthPicker: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>>, {
        readonly [x: number]: string;
    } | {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>>, {}, {}, {}, {}, {
        readonly [x: number]: string;
    } | {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly [x: number]: string;
} | {}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TuQuarterPicker: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>>, {
        readonly [x: number]: string;
    } | {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>>, {}, {}, {}, {}, {
        readonly [x: number]: string;
    } | {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly [x: number]: string;
} | {}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TuWeekPicker: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>>, {
        readonly [x: number]: string;
    } | {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>>, {}, {}, {}, {}, {
        readonly [x: number]: string;
    } | {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly [x: number]: string;
} | {}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TuYearPicker: import("@tu-view-plus/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstance<readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>>, {
        readonly [x: number]: string;
    } | {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
        [x: string]: unknown;
    }>>>>, {}, {}, {}, {}, {
        readonly [x: number]: string;
    } | {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly [x: number]: string;
} | {}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export * from './src/picker';
