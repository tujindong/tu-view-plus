import { SelectViewValue } from '../../select-view/src/interface';
import type { ExtractPropTypes, PropType } from 'vue';
import type InputLabel from './input-label.vue';
export declare const inputLabelProps: {
    readonly modelValue: {
        readonly type: PropType<SelectViewValue>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly inputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly enabledInput: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly formatLabel: {
        readonly type: PropType<(data?: SelectViewValue) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly placeholder: StringConstructor;
    readonly retainInputValue: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly size: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly baseClass: StringConstructor;
    readonly focused: BooleanConstructor;
    readonly uninjectFormItemContext: BooleanConstructor;
};
export declare const inputLabelEmits: {
    'update:modelValue': (value: string) => boolean;
    'update:inputValue': (inputValue: string) => boolean;
    input: (value: string, evt: Event) => boolean;
    change: (value: string, evt: Event) => boolean;
    inputValueChange: (value: string, evt: Event) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
    compositionstart: (evt: CompositionEvent) => boolean;
    compositionupdate: (evt: CompositionEvent) => boolean;
    compositionend: (evt: CompositionEvent) => boolean;
};
export type InputLabelProps = ExtractPropTypes<typeof inputLabelProps>;
export type InputLabelInstance = InstanceType<typeof InputLabel>;
export type InputLabelEmits = typeof inputLabelEmits;
