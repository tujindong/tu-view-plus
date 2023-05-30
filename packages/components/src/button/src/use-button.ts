import { computed, SetupContext, ref } from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { ButtonEmits, ButtonProps } from './button';

export default function useButton(
  props: ButtonProps,
  emit: SetupContext<ButtonEmits>['emit']
) {
  const buttonRef = ref<HTMLButtonElement>();

  const nsButton = useNamespace('button');

  const classes = computed(() => ({
    [nsButton.b()]: true,
    [nsButton.m(props.type)]: true,
    [nsButton.is('disabled')]: props.disabled,
    [nsButton.is('round')]: props.round,
    [nsButton.is('circle')]: props.circle
  }));

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

  return { buttonRef, buttonAttrs, classes, handleClick };
}
