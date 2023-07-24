import { computed, inject, ref } from 'vue';
import { isArray, isUndefined } from '@tu-view-plus/utils';
import { SetupContext } from '@vue/runtime-core';
import { checkboxGroupKey } from './constants';
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
  emit?: SetupContext<CheckboxEmits>['emit'],
  slots?: ComponentInternalInstance['slots']
) => {
  const isFocused = ref(false);
  const selfModel = ref<unknown>(false);

  const { formItem: tuFormItem } = useFormItem();

  const checkboxGroup = inject(checkboxGroupKey, undefined);
  const isGroup = computed(() => isUndefined(checkboxGroup) === false);

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

  const model = computed({
    get() {
      return isGroup.value
        ? checkboxGroup?.modelValue?.value
        : props.modelValue ?? selfModel.value;
    },

    set(val: unknown) {
      if (isGroup.value && isArray(val)) {
      }
    }
  });

  const isChecked = computed<Boolean>(() => false);

  const onClickRoot = () => {};

  const handleChange = () => {};

  return {
    inputId,
    model,
    checkboxDisabled,
    checkboxSize,
    checkboxType,
    isChecked,
    isFocused,
    onClickRoot,
    handleChange
  };
};
