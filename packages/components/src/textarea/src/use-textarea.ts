import { SetupContext, computed, ref, nextTick, shallowRef } from 'vue';
import { TextareaProps, TextareaEmits } from './textarea';
import { UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';
import { useFormItem } from '../../form';
import { debugWarn, isClient, isObject } from '@tu-view-plus/utils';
import { calcTextareaHeight } from './utils';
// @ts-ignore
import { isNil } from 'lodash-unified';

import type { ShallowRef } from 'vue';

export default function useTextarea(
  props: TextareaProps,
  emit: SetupContext<TextareaEmits>['emit'],
  textarea: ShallowRef<HTMLTextAreaElement | undefined>
) {
  const isHovering = ref(false);
  const isFocused = ref(false);
  const isComposing = ref(false);

  const textareaCalcStyle = shallowRef(props.textareaStyle);

  const textareaRef = computed(() => textarea.value);
  const nativeTextareaValue = computed(() =>
    !isNil(props.modelValue) ? String(props.modelValue) : ''
  );

  const textLength = computed(() => nativeTextareaValue.value.length);

  const { formItem } = useFormItem();

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
    let { value } = evt.target as HTMLTextAreaElement;
    if (props.formatter) {
      value = props.parser ? props.parser(value) : value;
    }
    if (isComposing.value) return;
    if (value === nativeTextareaValue.value) {
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
    emit('change', (evt.target as HTMLTextAreaElement).value);
  };

  const handleKeydown = (evt: KeyboardEvent) => {
    emit('keydown', evt);
  };

  const setNativeInputValue = () => {
    const textarea = textareaRef.value;
    const formatterValue = props.formatter
      ? props.formatter(nativeTextareaValue.value)
      : nativeTextareaValue.value;
    if (!textarea || textarea.value === formatterValue) return;
    textarea.value = formatterValue;
  };

  const resizeTextarea = () => {
    const { autosize } = props;
    if (!isClient || !textarea.value) return;
    if (autosize) {
      const minRows = isObject(autosize) ? autosize.minRows : undefined;
      const maxRows = isObject(autosize) ? autosize.maxRows : undefined;
      const textareaStyle = calcTextareaHeight(
        textarea.value,
        minRows,
        maxRows
      );
      console.log('textareaStyle', textareaStyle);
    }
  };

  return {
    isHovering,
    isFocused,
    textareaCalcStyle,
    textLength,
    nativeTextareaValue,
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
    setNativeInputValue,
    resizeTextarea
  };
}
