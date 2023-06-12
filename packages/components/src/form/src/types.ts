import type { SetupContext, UnwrapRef } from 'vue';
import type {
  RuleItem,
  ValidateError,
  ValidateFieldsError
} from 'async-validator';
import type { Size } from '@tu-view-plus/constants';
import type { Arrayable } from '@tu-view-plus/utils';
import type { MaybeRef } from '@vueuse/core';
import type {
  FormItemProp,
  FormItemProps,
  FormItemValidateState
} from './form-item';
import type { FormEmits, FormProps } from './form';
import type { useFormLabelWidth } from './utils';

export type FormLabelWidthContext = ReturnType<typeof useFormLabelWidth>;
export interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>;
}

type Primitive = null | undefined | string | number | boolean | symbol | bigint;

/**
 * @zh 检查是否为元组
 * @en Check whether it is tuple
 * @example
 * IsTuple<[1, 2, 3]> => true
 * IsTuple<Array[number]> => false
 */
type IsTuple<T extends ReadonlyArray<any>> = number extends T['length']
  ? false
  : true;

/**
 *@zh 数组方法键
 *@en Array method key
 */
type ArrayMethodKey = keyof any[];

/**
 * @zh 元组下标键
 * @es Tuple index key
 * @example
 * TupleKey<[1, 2, 3]> => '0' | '1' | '2'
 */
type TupleKey<T extends ReadonlyArray<any>> = Exclude<keyof T, ArrayMethodKey>;

/**
 * @zh 数组下标键
 * @es Array index key
 */
type ArrayKey = number;

/**
 * @zh 用于通过一个类型递归构建路径的辅助类型
 * @es  Helper type for recursively constructing paths through a type
 */
type PathImpl<K extends string | number, V> = V extends Primitive
  ? `${K}`
  : `${K}` | `${K}.${Path<V>}`;

/**
 * @zh 通过一个类型收集所有路径的类型
 * @es Type which collects all paths through a type
 * @see {@link FieldPath}
 */
type Path<T> = T extends ReadonlyArray<infer V>
  ? IsTuple<T> extends true
    ? {
        [K in TupleKey<T>]-?: PathImpl<Exclude<K, symbol>, T[K]>;
      }[TupleKey<T>] // tuple
    : PathImpl<ArrayKey, V> // array
  : {
      [K in keyof T]-?: PathImpl<Exclude<K, symbol>, T[K]>;
    }[keyof T]; // object

/**
 * @zh 通过一个类型收集所有路径的类型
 * @es Type which collects all paths through a type
 * @example
 * FieldPath<{ 1: number; a: number; b: string; c: { d: number; e: string }; f: [{ value: string }]; g: { value: string }[] }> => '1' | 'a' | 'b' | 'c' | 'f' | 'g' | 'c.d' | 'c.e' | 'f.0' | 'f.0.value' | 'g.number' | 'g.number.value'
 */
type FieldPath<T> = T extends object ? Path<T> : never;

export type FormRules<
  T extends MaybeRef<Record<string, any> | string> = string
> = Partial<
  Record<
    UnwrapRef<T> extends string ? UnwrapRef<T> : FieldPath<UnwrapRef<T>>,
    Arrayable<FormItemRule>
  >
>;

export type FormValidationResult = Promise<boolean>;

export type FormValidateCallback = (
  isValid: boolean,
  invalidFields?: ValidateFieldsError
) => void;
export interface FormValidateFailure {
  errors: ValidateError[] | null;
  fields: ValidateFieldsError;
}

export type FormContext = FormProps &
  UnwrapRef<FormLabelWidthContext> & {
    emit: SetupContext<FormEmits>['emit'];
    // expose
    addField: (field: FormItemContext) => void;
    removeField: (field: FormItemContext) => void;
    resetFields: (props?: Arrayable<FormItemProp>) => void;
    clearValidate: (props?: Arrayable<FormItemProp>) => void;
    validateField: (
      props?: Arrayable<FormItemProp>,
      callback?: FormValidateCallback
    ) => FormValidationResult;
  };

export interface FormItemContext extends FormItemProps {
  $el: HTMLDivElement | undefined;
  size: Size;
  validateState: FormItemValidateState;
  isGroup: boolean;
  labelId: string;
  inputIds: string[];
  hasLabel: boolean;
  addInputId: (id: string) => void;
  removeInputId: (id: string) => void;
  validate: (
    trigger: string,
    callback?: FormValidateCallback
  ) => FormValidationResult;
  resetField(): void;
  clearValidate(): void;
}
