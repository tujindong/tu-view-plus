import { computed, nextTick, watch } from 'vue';
import { isPromise } from '@vue/shared';
import { SwitchProps, SwitchEmits } from './switch';
import { debugWarn, isBoolean, throwError } from '@tu-view-plus/utils';
import {
  useFormDisabled,
  useFormSize,
  useFormItemInputId,
  useFormItem
} from '../../form';
import {
  UPDATE_MODEL_EVENT,
  CHANGE_EVENT,
  INPUT_EVENT
} from '@tu-view-plus/constants';

import type { SetupContext, ShallowRef } from 'vue';

export default function useSwitch(
  props: SwitchProps,
  emit: SetupContext<SwitchEmits>['emit'],
  input: ShallowRef<HTMLInputElement | undefined>
) {
  const switchSize = useFormSize();
  const switchDisabled = useFormDisabled();

  const { formItem } = useFormItem();

  const { inputId } = useFormItemInputId(props, {
    formItemContext: formItem
  });

  const checked = computed(() => props.modelValue === props.activeValue);

  const handleValueSwitch = () => {
    const { beforeChange } = props;

    if (switchDisabled.value) return;
    if (!beforeChange) {
      handleChange();
      return;
    }

    const shouldChange = beforeChange();
    const isPromiseOrBoolean = [
      isPromise(shouldChange),
      isBoolean(shouldChange)
    ].includes(true);

    if (!isPromiseOrBoolean) {
      throwError(
        'TuSwitch',
        'beforeChange must return type `Promise<boolean>` or `boolean`'
      );
    }

    if (isPromise(shouldChange)) {
      shouldChange
        .then((result) => {
          if (result) handleChange();
        })
        .catch((e) => {
          debugWarn('TuSwitch', `some error occurred: ${e}`);
        });
    } else if (shouldChange) {
      handleChange();
    }
  };

  const handleChange = () => {
    const value = checked.value ? props.inactiveValue : props.activeValue;
    emit(UPDATE_MODEL_EVENT, value);
    emit(CHANGE_EVENT, value);
    emit(INPUT_EVENT, value);
    nextTick(() => (input.value!.checked = checked.value));
  };

  const focus = (): void => {
    input.value?.focus?.();
  };

  watch(checked, (val) => {
    input.value!.checked = val;

    if (props.validateEvent) {
      formItem?.validate?.('change').catch((err) => debugWarn(err));
    }
  });

  return {
    inputId,
    switchSize,
    switchDisabled,
    checked,
    focus,
    handleValueSwitch,
    handleChange
  };
}
