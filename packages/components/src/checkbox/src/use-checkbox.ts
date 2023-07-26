import { computed, inject, ref, watch, getCurrentInstance } from 'vue';
import {
  isArray,
  isBoolean,
  isUndefined,
  debugWarn
} from '@tu-view-plus/utils';
import { UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';
import { SetupContext } from '@vue/runtime-core';
import { checkboxGroupContextKey, CheckboxValueType } from './constants';
import {
  useFormDisabled,
  useFormSize,
  useFormItemInputId,
  useFormItem
} from '../../form';

import type { ComponentInternalInstance } from 'vue';
import type { CheckboxProps, CheckboxEmits } from './checkbox';

export const useCheckbox = (
  props: CheckboxProps,
  emit: SetupContext<CheckboxEmits>['emit']
) => {
  const { emit: originEmit } = getCurrentInstance()!;

  const isFocused = ref(false);
  const isLimitExceeded = ref(false);
  const selfModel = ref<unknown>(false);

  const isGroup = computed(() => !isUndefined(checkboxGroup));

  const { formItem: tuFormItem } = useFormItem();

  const { inputId } = useFormItemInputId(props, {
    formItemContext: tuFormItem,
    disableIdManagement: isGroup
  });

  const checkboxGroup = inject(checkboxGroupContextKey, undefined);

  const model = computed({
    get() {
      return isGroup.value
        ? checkboxGroup?.modelValue?.value
        : props.modelValue ?? selfModel.value;
    },

    set(val: unknown) {
      if (isGroup.value && isArray(val)) {
        isLimitExceeded.value =
          checkboxGroup?.max?.value !== undefined &&
          val.length > checkboxGroup?.max.value;
        isLimitExceeded.value === false && checkboxGroup?.changeEvent?.(val);
      } else {
        originEmit(UPDATE_MODEL_EVENT, val);
        selfModel.value = val;
      }
    }
  });

  const isLimitDisabled = computed(() => {
    const max = checkboxGroup?.max?.value;
    const min = checkboxGroup?.min?.value;
    return (
      (!isUndefined(max) && model.value.length >= max && !isChecked.value) ||
      (!isUndefined(min) && model.value.length <= min && isChecked.value)
    );
  });

  const checkboxSize = useFormSize(computed(() => checkboxGroup?.size?.value));

  const checkboxType = computed(() => checkboxGroup?.type?.value || props.type);

  const checkboxDisabled = useFormDisabled(
    computed(() => checkboxGroup?.disabled?.value || !!isLimitDisabled.value)
  );

  const isChecked = computed<Boolean>(() => {
    const value = model.value;
    if (isBoolean(value)) {
      return value;
    } else if (isArray(value)) {
      return value.indexOf(props.label) > -1;
    } else if (value !== null && value !== undefined) {
      return value === props.trueLabel;
    } else {
      return !!value;
    }
  });

  const validateEvent = computed(
    () => checkboxGroup?.validateEvent || props.validateEvent
  );

  const addToStore = () => {
    if (isArray(model.value) && !model.value.includes(props.label)) {
      model.value.push(props.label);
    } else {
      model.value = props.trueLabel || true;
    }
  };

  const getLabeledValue = (value: CheckboxValueType) =>
    value === props.trueLabel || value === true
      ? props.trueLabel ?? true
      : props.falseLabel ?? false;

  const handleChange = (evt: Event) => {
    if (isLimitExceeded.value) return;
    const checked = (evt.target as HTMLInputElement)?.checked;
    emit('change', getLabeledValue(checked));
  };

  watch(
    () => props.modelValue,
    () => {
      if (validateEvent.value) {
        tuFormItem?.validate('change').catch((err) => debugWarn(err));
      }
    }
  );

  return {
    inputId,
    model,
    checkboxDisabled,
    checkboxSize,
    checkboxType,
    isChecked,
    isFocused,
    handleChange,
    addToStore
  };
};
