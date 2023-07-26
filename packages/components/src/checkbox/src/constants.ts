import type { InjectionKey, ToRefs, WritableComputedRef } from 'vue';
import type { CheckboxGroupProps } from './checkbox-group';

export const checkboxTypes = ['', 'border', 'button'] as const;

export type CheckboxGroupContext = {
  modelValue?: WritableComputedRef<any>;
  changeEvent?: (...args: any) => any;
} & ToRefs<
  Pick<
    CheckboxGroupProps,
    'size' | 'type' | 'min' | 'max' | 'disabled' | 'validateEvent' | 'textColor'
  >
>;

export type CheckboxValueType = string | number | boolean;

export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[];

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroupContextKey');
