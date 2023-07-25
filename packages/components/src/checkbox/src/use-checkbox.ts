import { computed, inject, ref } from 'vue';
import { isArray, isBoolean, isUndefined } from '@tu-view-plus/utils';
import { UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';
import { SetupContext } from '@vue/runtime-core';
import { checkboxGroupKey, CheckboxValueType } from './constants';
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
  emit: SetupContext<CheckboxEmits>['emit'],
  slots: ComponentInternalInstance['slots']
) => {
  const isFocused = ref(false);
  const isLimitExceeded = ref(false);
  const selfModel = ref<CheckboxValueType>(false);

  const { formItem: tuFormItem } = useFormItem();

  const checkboxGroup = inject(checkboxGroupKey, undefined);
  const isGroup = computed(() => !isUndefined(checkboxGroup));

  const isLimitDisabled = computed(() => false);

  const checkboxSize = useFormSize(computed(() => checkboxGroup?.size));
  const checkboxType = computed(() => checkboxGroup?.type || props.type);
  const checkboxDisabled = useFormDisabled(
    computed(() => checkboxGroup?.disabled || isLimitDisabled.value)
  );

  const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: tuFormItem,
    disableIdManagement: isGroup
  });

  console.log('checkboxGroup++==', checkboxGroup);

  const model = computed({
    get() {
      return isGroup.value
        ? checkboxGroup!.modelValue
        : props.modelValue! ?? selfModel.value;
    },

    set(val: CheckboxValueType) {
      if (isGroup.value && isArray(val)) {
        return '';
      } else {
        emit(UPDATE_MODEL_EVENT, val);
        selfModel.value = val;
      }
    }
  });

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

  const getLabeledValue = (value: string | number | boolean) =>
    value === props.trueLabel || value === true
      ? props.trueLabel ?? true
      : props.falseLabel ?? false;

  const handleChange = (evt: Event) => {
    if (isLimitExceeded.value) return;
    const checked = (evt.target as HTMLInputElement)?.checked;
    emit('change', getLabeledValue(checked));
  };

  return {
    inputId,
    model,
    checkboxDisabled,
    checkboxSize,
    checkboxType,
    isChecked,
    isFocused,
    handleChange
  };
};
