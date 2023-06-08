import { SetupContext } from '@vue/runtime-core';
import { ref, computed, inject } from 'vue';
import { RadioEmits, RadioProps } from './radio';
import { radioGroupKey } from './constants';

export const useRadio = (
  props: { label: RadioProps['label']; modelValue?: RadioProps['modelValue'] },
  emit?: SetupContext<RadioEmits>['emit']
) => {
  const radioRef = ref<HTMLInputElement>();
  const radioGroup = inject(radioGroupKey, undefined);
  const isGroup = computed(() => !!radioGroup);

  const modelValue = computed<RadioProps['modelValue']>({
    get() {
      return isGroup.value ? radioGroup!.modelValue : props.modelValue!;
    },
    set(val) {
      if (isGroup.value) {
        radioGroup!.changeEvent(val);
      } else {
        emit && emit('update:modelValue', val);
      }
      radioRef.value!.checked = props.modelValue === props.label;
    }
  });

  //TODO 使用useForm包装
  const size = radioGroup?.size;
  //TODO
  const disabled = radioGroup?.disabled;
  const focus = ref(false);
  const tabIndex = computed(() =>
    disabled || (isGroup.value && modelValue.value !== props.label) ? -1 : 0
  );

  return {
    radioRef,
    radioGroup,
    isGroup,
    modelValue,
    size,
    disabled,
    focus,
    tabIndex
  };
};
