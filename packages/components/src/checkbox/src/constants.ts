import type { InjectionKey } from 'vue';
import type { CheckboxGroupProps } from './checkbox-group';

export const checkboxTypes = ['', 'border', 'button'] as const;

export type CheckboxValueType = string | number | boolean;

export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[];

export const checkboxGroupKey: InjectionKey<CheckboxGroupProps> =
  Symbol('checkboxGroupKey');
