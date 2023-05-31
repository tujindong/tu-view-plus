import { computed, SetupContext, ref } from 'vue';
import { ButtonEmits, ButtonProps } from './button';

export default function useButton(
  props: ButtonProps,
  emit: SetupContext<ButtonEmits>['emit']
) {
  const buttonRef = ref<HTMLButtonElement>();

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

  return { buttonRef, buttonAttrs, handleClick };
}
