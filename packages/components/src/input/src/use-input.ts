import { ref, nextTick, computed, watch } from 'vue';
import { InputProps, InputEmits } from './input';
import { useFormItem } from '../../form';
import { debugWarn } from '@tu-view-plus/utils';
import { UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';
// @ts-ignore
import { isNil } from 'lodash-unified';

import type { ShallowRef, SetupContext } from 'vue';

export default function useInput(
  props: InputProps,
  emit: SetupContext<InputEmits>['emit'],
  input: ShallowRef<HTMLInputElement | undefined>
) {
  const isHovering = ref(false);
  const isFocused = ref(false);
  const isComposing = ref(false);
  const isPasswordVisible = ref(false);

  const inputRef = computed(() => input.value);
  const nativeInputValue = computed(() =>
    !isNil(props.modelValue) ? String(props.modelValue) : ''
  );
  const textLength = computed(() => nativeInputValue.value.length);

  const { formItem } = useFormItem();

  const focus = async () => {
    await nextTick();
    inputRef.value?.focus();
  };

  const blur = () => inputRef.value?.blur();

  const select = () => inputRef.value?.select();

  const clear = () => {
    emit(UPDATE_MODEL_EVENT, '');
    emit('change', '');
    emit('clear');
    emit('input', '');
  };

  const handleMouseEnter = (evt: MouseEvent) => {
    isHovering.value = true;
    emit('mouseenter', evt);
  };

  const handleMouseLeave = (evt: MouseEvent) => {
    isHovering.value = false;
    emit('mouseleave', evt);
  };

  const handleCompositionStart = (evt: CompositionEvent) => {
    emit('compositionstart', evt);
    isComposing.value = true;
  };

  const handleCompositionUpdate = (evt: CompositionEvent) => {
    emit('compositionupdate', evt);
  };

  const handleCompositionEnd = (evt: CompositionEvent) => {
    emit('compositionend', evt);
    if (isComposing.value) {
      isComposing.value = false;
      handleInput(evt);
    }
  };

  const handleInput = async (evt: Event) => {
    let { value } = evt.target as HTMLInputElement;
    if (props.formatter) {
      value = props.parser ? props.parser(value) : value;
    }
    if (isComposing.value) return;
    if (value === nativeInputValue.value) {
      setNativeInputValue();
      return;
    }
    emit(UPDATE_MODEL_EVENT, value);
    emit('input', value);

    await nextTick();
    setNativeInputValue();
  };

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

  const handleChange = (evt: Event) => {
    emit('change', (evt.target as HTMLInputElement).value);
  };

  const handleKeydown = (evt: KeyboardEvent) => {
    emit('keydown', evt);
  };

  const handlePasswordVisible = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
    focus();
  };

  const setNativeInputValue = () => {
    const input = inputRef.value;
    const formatterValue = props.formatter
      ? props.formatter(nativeInputValue.value)
      : nativeInputValue.value;
    if (!input || input.value === formatterValue) return;
    input.value = formatterValue;
  };

  watch(nativeInputValue, () => setNativeInputValue());

  return {
    inputRef,
    isHovering,
    isFocused,
    isPasswordVisible,
    nativeInputValue,
    textLength,
    focus,
    blur,
    select,
    clear,
    handleMouseEnter,
    handleMouseLeave,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
    handleInput,
    handleFocus,
    handleBlur,
    handleChange,
    handleKeydown,
    handlePasswordVisible,
    setNativeInputValue
  };
}
