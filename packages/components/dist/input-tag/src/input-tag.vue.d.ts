import { TagData } from './interface';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<(string | number | TagData)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | TagData)[]) | (() => (string | number | TagData)[]) | ((new (...args: any[]) => (string | number | TagData)[]) | (() => (string | number | TagData)[]))[], unknown, unknown, () => never[], boolean>;
    readonly inputValue: StringConstructor;
    readonly defaultInputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly placeholder: StringConstructor;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly error: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly readonly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly maxTagCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly retainInputValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | (() => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | ((new (...args: any[]) => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | (() => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }))[], unknown, unknown, false, boolean>;
    readonly formatTag: {
        readonly type: import("vue").PropType<(data: TagData) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly uniqueValue: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly fieldNames: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").FieldString<TagData>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly baseClass: StringConstructor;
    readonly focused: BooleanConstructor;
    readonly disabledInput: BooleanConstructor;
    readonly uninjectFormItemContext: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clear: (evt: MouseEvent) => void;
    blur: (evt: FocusEvent) => void;
    change: (value: (string | number | TagData)[], evt: Event) => void;
    focus: (evt: FocusEvent) => void;
    mouseenter: (evt: MouseEvent) => void;
    mouseleave: (evt: MouseEvent) => void;
    "update:modelValue": (value: (string | number | TagData)[]) => void;
    remove: (removed: string | number, evt: Event) => void;
    pressEnter: (inputValue: string, evt: KeyboardEvent) => void;
    "update:inputValue": (inputValue: string) => void;
    inputValueChange: (inputValue: string, evt: Event) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<(string | number | TagData)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | TagData)[]) | (() => (string | number | TagData)[]) | ((new (...args: any[]) => (string | number | TagData)[]) | (() => (string | number | TagData)[]))[], unknown, unknown, () => never[], boolean>;
    readonly inputValue: StringConstructor;
    readonly defaultInputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly placeholder: StringConstructor;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly error: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly readonly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly size: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly maxTagCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly retainInputValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | (() => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | ((new (...args: any[]) => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | (() => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }))[], unknown, unknown, false, boolean>;
    readonly formatTag: {
        readonly type: import("vue").PropType<(data: TagData) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly uniqueValue: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly fieldNames: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").FieldString<TagData>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly baseClass: StringConstructor;
    readonly focused: BooleanConstructor;
    readonly disabledInput: BooleanConstructor;
    readonly uninjectFormItemContext: BooleanConstructor;
}>> & {
    onFocus?: ((evt: FocusEvent) => any) | undefined;
    onBlur?: ((evt: FocusEvent) => any) | undefined;
    onChange?: ((value: (string | number | TagData)[], evt: Event) => any) | undefined;
    onMouseenter?: ((evt: MouseEvent) => any) | undefined;
    onMouseleave?: ((evt: MouseEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: (string | number | TagData)[]) => any) | undefined;
    onClear?: ((evt: MouseEvent) => any) | undefined;
    onPressEnter?: ((inputValue: string, evt: KeyboardEvent) => any) | undefined;
    "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
    onInputValueChange?: ((inputValue: string, evt: Event) => any) | undefined;
    onRemove?: ((removed: string | number, evt: Event) => any) | undefined;
}, {
    readonly disabled: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly error: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly readonly: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultValue: (string | number | TagData)[];
    readonly allowClear: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly disabledInput: boolean;
    readonly focused: boolean;
    readonly retainInputValue: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | (() => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | ((new (...args: any[]) => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | (() => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }))[], unknown, unknown>;
    readonly uninjectFormItemContext: boolean;
    readonly defaultInputValue: string;
    readonly maxTagCount: number;
    readonly uniqueValue: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>, {
    prefix?(_: {}): any;
    suffix?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
