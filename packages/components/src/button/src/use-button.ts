import { computed, SetupContext } from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { ButtonEmits, ButtonProps } from './button';

export default function useButton(
  props: ButtonProps,
  emit: SetupContext<ButtonEmits>['emit']
) {
  const nsButton = useNamespace('button');

  const classes = computed(() => ({
    [nsButton.b()]: true,
    [nsButton.m(props.type)]: true
  }));

  const handleClick = (evt: MouseEvent) => {
    emit('click', evt);
  };

  return { classes, handleClick };
}
