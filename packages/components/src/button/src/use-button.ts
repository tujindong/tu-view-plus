import { computed, SetupContext, ref, inject } from 'vue';
import { ButtonEmits, ButtonProps } from './button';
import { buttonGroupInjectionKey } from './constants';

export default function useButton(
  props: ButtonProps,
  emit: SetupContext<ButtonEmits>['emit']
) {
  const buttonRef = ref<HTMLButtonElement>();

  const buttonGroupInjection = inject(buttonGroupInjectionKey, undefined);

  const buttonAttrs = computed(() => {
    return {
      ariaDisabled: props.disabled || props.loading,
      disabled: props.disabled || props.loading,
      autofocus: props.autofocus,
      type: props.nativeType
    };
  });

  const handleClick = (evt: MouseEvent) => {
    emit('click', evt);
  };

  return {
    buttonRef,
    buttonGroupInjection,
    buttonAttrs,
    handleClick
  };
}
