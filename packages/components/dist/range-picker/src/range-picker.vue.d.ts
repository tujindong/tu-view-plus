declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly focused: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly focusedIndex: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]) | ((new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]))[], unknown, unknown, false, boolean>;
    readonly readonly: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly allowClear: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly placeholder: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => never[], boolean>;
    readonly inputValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | (string | undefined)[]) | (() => string | (string | undefined)[] | undefined) | ((new (...args: any[]) => string | (string | undefined)[]) | (() => string | (string | undefined)[] | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly value: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (import("dayjs").Dayjs | undefined)[]) | (() => (import("dayjs").Dayjs | undefined)[]) | ((new (...args: any[]) => (import("dayjs").Dayjs | undefined)[]) | (() => (import("dayjs").Dayjs | undefined)[]))[], unknown, unknown, () => never[], boolean>;
    readonly format: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | ((value: import("dayjs").Dayjs) => string)) | (() => string | ((value: import("dayjs").Dayjs) => string)) | ((new (...args: any[]) => string | ((value: import("dayjs").Dayjs) => string)) | (() => string | ((value: import("dayjs").Dayjs) => string)))[], unknown, unknown>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}, {
    focus: (index?: number | undefined) => void;
    blur: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly focused: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly focusedIndex: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]) | ((new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]))[], unknown, unknown, false, boolean>;
    readonly readonly: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly allowClear: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly placeholder: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => never[], boolean>;
    readonly inputValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | (string | undefined)[]) | (() => string | (string | undefined)[] | undefined) | ((new (...args: any[]) => string | (string | undefined)[]) | (() => string | (string | undefined)[] | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly value: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (import("dayjs").Dayjs | undefined)[]) | (() => (import("dayjs").Dayjs | undefined)[]) | ((new (...args: any[]) => (import("dayjs").Dayjs | undefined)[]) | (() => (import("dayjs").Dayjs | undefined)[]))[], unknown, unknown, () => never[], boolean>;
    readonly format: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => string | ((value: import("dayjs").Dayjs) => string)) | (() => string | ((value: import("dayjs").Dayjs) => string)) | ((new (...args: any[]) => string | ((value: import("dayjs").Dayjs) => string)) | (() => string | ((value: import("dayjs").Dayjs) => string)))[], unknown, unknown>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>>, {
    readonly placeholder: string[];
    readonly value: (import("dayjs").Dayjs | undefined)[];
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]) | ((new (...args: any[]) => boolean | boolean[]) | (() => boolean | boolean[]))[], unknown, unknown>;
}, {}>, {
    perfix?(_: {}): any;
    separator?(_: {}): any;
    "suffix-icon"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
