import { SetupContext, ref, inject, computed } from 'vue';
import { ButtonEmits, ButtonProps } from './button';
import { buttonGroupInjectionKey } from './constants';
import { useNamespace } from '@tu-view-plus/hooks';

export function useButtonRender(props: ButtonProps) {
  const nsButton = useNamespace('button');
  const buttonRef = ref<HTMLButtonElement>();

  const buttonGroupInjection = inject(buttonGroupInjectionKey, undefined);

  const buttonSize = computed(() => buttonGroupInjection?.size || props.size);
  const buttonType = computed(() => buttonGroupInjection?.type || props.type);

  const classes = computed(() => ({
    [nsButton.b()]: true,
    [nsButton.m(buttonSize.value)]: true,
    [nsButton.m(buttonType.value)]: true,
    [nsButton.is('disabled')]: props.disabled,
    [nsButton.is('loading')]: props.loading,
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

  return { buttonRef, nsButton, buttonSize, buttonType, classes, buttonAttrs };
}

export function useButtonEvent(emit: SetupContext<ButtonEmits>['emit']) {
  const handleClick = (evt: MouseEvent) => {
    emit('click', evt);
  };

  return {
    handleClick
  };
}
