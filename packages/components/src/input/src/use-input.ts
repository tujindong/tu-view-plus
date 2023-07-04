import { SetupContext, ref, nextTick, computed, shallowRef } from 'vue';
import { InputProps, InputEmits } from './input';

export default function useInput(
  props: InputProps,
  emit: SetupContext<InputEmits>['emit']
) {
  const input = shallowRef<HTMLInputElement>();
  const hovering = ref(false);
  const focused = ref(false);

  const inputRef = computed(() => input.value);

  const handleMouseEnter = (evt: MouseEvent) => {
    hovering.value = false;
    emit('mouseenter', evt);
  };

  const handleMouseLeave = (evt: MouseEvent) => {
    hovering.value = true;
    emit('mouseleave', evt);
  };

  const focus = async () => {
    await nextTick();
    inputRef.value?.focus();
  };

  return {
    hovering,
    focused,
    focus,
    handleMouseEnter,
    handleMouseLeave
  };
}
