import { computed, reactive, onMounted, onUpdated, watch } from 'vue';
import { InputNumberProps, InputNumberEmits } from './input-number';
import { isNumber, debugWarn, throwError } from '@tu-view-plus/utils';
import { useFormDisabled, useFormSize, useFormItem } from '../../form';
import { isNil, isUndefined, isString } from 'lodash-unified';
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT
} from '@tu-view-plus/constants';

import type { SetupContext, ShallowRef } from 'vue';

export default function useInputNumber(
  props: InputNumberProps,
  emit: SetupContext<InputNumberEmits>['emit'],
  input: ShallowRef
) {
  interface Data {
    currentValue: number | null | undefined;
    userInput: null | number | string;
  }

  const data = reactive<Data>({
    currentValue: props.modelValue,
    userInput: null
  });

  const inputNumberSize = useFormSize();

  const inputNumberDisabled = useFormDisabled();

  const { formItem } = useFormItem();

  const minDisabled = computed(
    () =>
      (isNumber(props.modelValue) && props.modelValue <= props.min) ||
      inputNumberDisabled.value
  );

  const maxDisabled = computed(
    () =>
      (isNumber(props.modelValue) && props.modelValue >= props.max) ||
      inputNumberDisabled.value
  );

  const displayValue = computed(() => {
    if (data.userInput !== null) return data.userInput;
    let currentValue: number | string | undefined | null = data.currentValue;
    if (isNil(currentValue)) return '';
    if (isNumber(currentValue)) {
      if (Number.isNaN(currentValue)) return '';
      if (!isUndefined(props.precision))
        currentValue = currentValue.toFixed(props.precision);
    }
    return currentValue;
  });

  const getPrecision = (value: number | null | undefined) => {
    if (isNil(value)) return 0;
    const valueString = value.toString();
    const dotPosition = valueString.indexOf('.');
    let precision = 0;
    if (dotPosition !== -1) {
      precision = valueString.length - dotPosition - 1;
    }
    return precision;
  };

  const numPrecision = computed(() => {
    const stepPrecision = getPrecision(props.step);
    if (!isUndefined(props.precision)) {
      if (stepPrecision > props.precision) {
        debugWarn(
          'InputNumber',
          'precision should not be less than the decimal places of step'
        );
      }
      return props.precision;
    } else {
      return Math.max(getPrecision(props.modelValue), stepPrecision);
    }
  });

  const toPrecision = (num: number, pre?: number) => {
    if (isUndefined(pre)) pre = numPrecision.value;
    if (pre === 0) return Math.round(num);
    let snum = String(num);
    const pointPos = snum.indexOf('.');
    if (pointPos === -1) return num;
    const nums = snum.replace('.', '').split('');
    const datum = nums[pointPos + pre];
    if (!datum) return num;
    const length = snum.length;
    if (snum.charAt(length - 1) === '5') {
      snum = `${snum.slice(0, Math.max(0, length - 1))}6`;
    }
    return Number.parseFloat(Number(snum).toFixed(pre));
  };

  const ensurePrecision = (val: number, coefficient: 1 | -1 = 1) => {
    if (!isNumber(val)) return data.currentValue;
    return toPrecision(val + props.step * coefficient);
  };

  const verifyValue = (
    value: number | string | null | undefined,
    update?: boolean
  ): number | null | undefined => {
    const { max, min, step, precision, stepStrictly, valueOnClear } = props;
    if (max < min) {
      throwError('InputNumber', 'min should not be greater than max.');
    }
    let newVal = Number(value);
    if (isNil(value) || Number.isNaN(newVal)) {
      return null;
    }
    if (value === '') {
      if (valueOnClear === null) {
        return null;
      }
      newVal = isString(valueOnClear)
        ? { min, max }[valueOnClear]
        : valueOnClear;
    }
    if (stepStrictly) {
      newVal = toPrecision(Math.round(newVal / step) * step, precision);
    }
    if (!isUndefined(precision)) {
      newVal = toPrecision(newVal, precision);
    }
    if (newVal > max || newVal < min) {
      newVal = newVal > max ? max : min;
      update && emit(UPDATE_MODEL_EVENT, newVal);
    }
    return newVal;
  };

  const setCurrentValue = (
    value: number | string | null | undefined,
    emitChange = true
  ) => {
    const oldVal = data.currentValue;
    const newVal = verifyValue(value);
    if (!emitChange) {
      emit(UPDATE_MODEL_EVENT, newVal!);
      return;
    }
    if (oldVal === newVal) return;
    data.userInput = null;
    emit(UPDATE_MODEL_EVENT, newVal!);
    emit(CHANGE_EVENT, newVal!, oldVal!);
    if (props.validateEvent) {
      formItem?.validate?.('change').catch((err) => debugWarn(err));
    }
    data.currentValue = newVal;
  };

  const handleIncrease = () => {
    if (props.readonly || inputNumberDisabled.value || maxDisabled.value)
      return;
    const value = Number(displayValue.value) || 0;
    const newVal = ensurePrecision(value);
    setCurrentValue(newVal);
    emit(INPUT_EVENT, data.currentValue);
  };

  const handleDecrease = () => {
    if (props.readonly || inputNumberDisabled.value || minDisabled.value)
      return;
    const value = Number(displayValue.value) || 0;
    const newVal = ensurePrecision(value, -1);
    setCurrentValue(newVal);
    emit(INPUT_EVENT, data.currentValue);
  };

  const focus = () => {
    input.value?.focus?.();
  };

  const blur = () => {
    input.value?.blur?.();
  };

  const handleFocus = (event: MouseEvent | FocusEvent) => {
    emit('focus', event);
  };

  const handleBlur = (event: MouseEvent | FocusEvent) => {
    emit('blur', event);
    if (props.validateEvent) {
      formItem?.validate?.('blur').catch((err) => debugWarn(err));
    }
  };

  const handleInput = (value: string) => {
    data.userInput = value;
    const newVal = value === '' ? null : Number(value);
    emit(INPUT_EVENT, newVal);
    setCurrentValue(newVal, false);
  };

  const handleChange = (value: string) => {
    const newVal = value !== '' ? Number(value) : '';
    if ((isNumber(newVal) && !Number.isNaN(newVal)) || value === '') {
      setCurrentValue(newVal);
    }
    data.userInput = null;
  };

  watch(
    () => props.modelValue,
    (value) => {
      const userInput = verifyValue(data.userInput);
      const newValue = verifyValue(value, true);
      if (!isNumber(userInput) && (!userInput || userInput !== newValue)) {
        data.currentValue = newValue;
        data.userInput = null;
      }
    },
    { immediate: true }
  );

  onMounted(() => {
    const { min, max, modelValue } = props;
    const innerInput = input.value?.input as HTMLInputElement;
    innerInput.setAttribute('role', 'spinbutton');
    if (Number.isFinite(max)) {
      innerInput.setAttribute('aria-valuemax', String(max));
    } else {
      innerInput.removeAttribute('aria-valuemax');
    }
    if (Number.isFinite(min)) {
      innerInput.setAttribute('aria-valuemin', String(min));
    } else {
      innerInput.removeAttribute('aria-valuemin');
    }
    innerInput.setAttribute('aria-valuenow', String(data.currentValue));
    innerInput.setAttribute('aria-disabled', String(inputNumberDisabled.value));
    if (!isNumber(modelValue) && modelValue != null) {
      let val: number | null = Number(modelValue);
      if (Number.isNaN(val)) {
        val = null;
      }
      emit(UPDATE_MODEL_EVENT, val!);
    }
  });

  onUpdated(() => {
    const innerInput = input.value?.input;
    innerInput?.setAttribute('aria-valuenow', `${data.currentValue}`);
  });

  return {
    inputNumberSize,
    inputNumberDisabled,
    minDisabled,
    maxDisabled,
    displayValue,
    handleIncrease,
    handleDecrease,
    handleFocus,
    handleBlur,
    handleInput,
    handleChange,
    focus,
    blur
  };
}
