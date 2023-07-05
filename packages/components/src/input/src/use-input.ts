import { SetupContext, ref, nextTick, computed, shallowRef } from 'vue';
import { InputProps, InputEmits } from './input';
import { useFormItem } from '../../form';

export default function useInput(
  props: InputProps,
  emit: SetupContext<InputEmits>['emit']
) {
  const input = shallowRef<HTMLInputElement>();
  const isHovering = ref(false);
  const isFocused = ref(false);
  const isComposing = ref(false);
  const isPasswordVisible = ref(false);

  const inputRef = computed(() => input.value);

  const { form, formItem } = useFormItem();

  const focus = async () => {
    await nextTick();
    inputRef.value?.focus();
  };

  const handleMouseEnter = (evt: MouseEvent) => {
    isHovering.value = false;
    emit('mouseenter', evt);
  };

  const handleMouseLeave = (evt: MouseEvent) => {
    isHovering.value = true;
    emit('mouseleave', evt);
  };

  const handleCompositionStart = () => {};

  const handleCompositionUpdate = () => {};

  const handleCompositionEnd = () => {};

  const handleInput = () => {};

  const handleFocus = (evt: FocusEvent) => {
    isFocused.value = true;
    emit('focus', evt);
  };

  const handleBlur = (evt: FocusEvent) => {
    isFocused.value = false;
    emit('blur', evt);
    if (props.validateEvent) {
      formItem?.validate?.('blur').catch((err) => debugWarn(err));
    }
  };

  const handleChange = () => {};

  const handleKeydown = () => {};

  return {
    isHovering,
    isFocused,
    isPasswordVisible,
    focus,
    handleMouseEnter,
    handleMouseLeave,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
    handleInput,
    handleFocus,
    handleBlur,
    handleChange,
    handleKeydown
  };
}
