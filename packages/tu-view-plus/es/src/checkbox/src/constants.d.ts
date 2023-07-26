import type { InjectionKey, ToRefs, WritableComputedRef } from 'vue';
import type { CheckboxGroupProps } from './checkbox-group';
export declare const checkboxTypes: readonly ["", "border", "button"];
export declare type CheckboxGroupContext = {
    modelValue?: WritableComputedRef<any>;
    changeEvent?: (...args: any) => any;
} & ToRefs<Pick<CheckboxGroupProps, 'size' | 'type' | 'min' | 'max' | 'disabled' | 'validateEvent' | 'textColor'>>;
export declare type CheckboxValueType = string | number | boolean;
export declare type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[];
export declare const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext>;
