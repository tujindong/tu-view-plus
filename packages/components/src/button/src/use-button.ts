import { SetupContext, ref, inject, computed } from 'vue';
import { ButtonEmits, ButtonProps } from './button';
import { buttonGroupInjectionKey } from './constants';

export default function useButton(
  props: ButtonProps,
  emit: SetupContext<ButtonEmits>['emit']
) {
  const buttonRef = ref<HTMLButtonElement>();

  const buttonGroupInjection = inject(buttonGroupInjectionKey, undefined);

  const buttonSize = computed(() => buttonGroupInjection?.size || props.size);
  const buttonType = computed(() => buttonGroupInjection?.type || props.type);

  const handleClick = (evt: MouseEvent) => {
    emit('click', evt);
  };

  return {
    buttonRef,
    buttonSize,
    buttonType,
    buttonGroupInjection,
    handleClick
  };
}
