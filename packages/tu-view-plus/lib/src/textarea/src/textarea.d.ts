import type { ExtractPropTypes, StyleValue } from 'vue';
import type Textarea from './textarea.vue';
export declare type TextareaAutoSize = {
    minRows?: number;
    maxRows?: number;
} | boolean;
export declare const textareaProps: {
    readonly id: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly modelValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined) | ((new (...args: any[]) => (string | number | null | undefined) & {}) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
    readonly disabled: BooleanConstructor;
    readonly autocomplete: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
    readonly showWordLimit: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly resize: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly autosize: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => TextareaAutoSize & {}) | (() => TextareaAutoSize) | ((new (...args: any[]) => TextareaAutoSize & {}) | (() => TextareaAutoSize))[], unknown, unknown, false, boolean>;
    readonly placeholder: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly form: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly readonly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly clearable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
    readonly formatter: {
        readonly type: import("vue").PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly parser: {
        readonly type: import("vue").PropType<Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly containerRole: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly label: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
    readonly tabindex: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
    readonly validateEvent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly textareaStyle: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => StyleValue & {}) | (() => StyleValue) | ((new (...args: any[]) => StyleValue & {}) | (() => StyleValue))[], unknown, unknown, () => import("@tu-view-plus/utils").Mutable<{}>, boolean>;
};
export declare const textareaEmits: {
    "update:modelValue": (value: string) => boolean;
    input: (value: string) => boolean;
    change: (value: string) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
    clear: () => boolean;
    mouseleave: (evt: MouseEvent) => boolean;
    mouseenter: (evt: MouseEvent) => boolean;
    keydown: (evt: KeyboardEvent | Event) => boolean;
    compositionstart: (evt: CompositionEvent) => boolean;
    compositionupdate: (evt: CompositionEvent) => boolean;
    compositionend: (evt: CompositionEvent) => boolean;
};
export declare type TextareaEmits = typeof textareaEmits;
export declare type TextareaProps = ExtractPropTypes<typeof textareaProps>;
export declare type TextareaInstance = InstanceType<typeof Textarea>;
