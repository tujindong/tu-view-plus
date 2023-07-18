<template>
  <div
    v-show="type !== 'hidden'"
    v-bind="textareaAttrs"
    :class="classes"
    :style="styles"
    :role="containerRole"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <textarea
      ref="textarea"
      v-bind="attrs"
      :id="inputId"
      :class="[nsTextarea.e('inner'), { [nsTextarea.is('focus')]: isFocused }]"
      :tabindex="tabindex"
      :disabled="textareaDisabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :style="textareaStyleComputed"
      :aria-label="label"
      :placeholder="placeholder"
      :form="form"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      @keydown="handleKeydown"
    />
    <span
      v-if="showSuffixVisible"
      :class="nsTextarea.e('suffix')"
      :style="textareaSuffixStyle"
    >
      <tu-icon
        v-if="showClearVisible"
        :class="[nsTextarea.e('icon'), nsTextarea.em('icon', 'clear')]"
        @mousedown.prevent
        @click="clear"
      >
        <Close />
      </tu-icon>
      <span v-if="showWordLimitVisible" :class="nsTextarea.e('count')">
        {{ textLength }} / {{ attrs.maxlength }}
      </span>
    </span>
  </div>
</template>

<script lang="ts" setup>
import {
  shallowRef,
  computed,
  useAttrs,
  ref,
  onMounted,
  nextTick,
  watch,
  toRef
} from 'vue';
import { useResizeObserver } from '@vueuse/core';
import { textareaProps, textareaEmits } from './textarea';
import { useComponentAttrs, useNamespace } from '@tu-view-plus/hooks';
import { TuIcon } from '../../icon';
import useTextarea from './use-textarea';
import { debugWarn } from '@tu-view-plus/utils';
import { Close } from '@tu-view-plus/icons-vue';
import {
  useFormDisabled,
  useFormSize,
  useFormItemInputId,
  useFormItem
} from '../../form';
import '../style/textarea.scss';

import type { StyleValue } from 'vue';

defineOptions({
  name: 'TuTextarea',
  inheritAttrs: false
});

const textarea = shallowRef<HTMLTextAreaElement>();

const props = defineProps(textareaProps);
const emit = defineEmits(textareaEmits);

const nsTextarea = useNamespace('textarea');

const textareaSize = useFormSize();
const textareaDisabled = useFormDisabled();

const attrs = useComponentAttrs({
  excludeKeys: computed<string[]>(() => {
    return Object.keys(textareaAttrs.value);
  })
});

const textareaSuffixStyle = ref<StyleValue>();

const { form, formItem } = useFormItem();

const { inputId } = useFormItemInputId(props, {
  formItemContext: formItem
});

const {
  textareaRef,
  isHovering,
  isFocused,
  textareaCalcStyle,
  textLength,
  nativeTextareaValue,
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
  setNativeTextareaValue,
  resizeTextarea,
  onceInitSizeTextarea
} = useTextarea(props, emit, textarea);

const showSuffixVisible = computed(
  () => showClearVisible.value || showWordLimitVisible.value
);

const showClearVisible = computed(
  () =>
    props.clearable &&
    !textareaDisabled.value &&
    !props.readonly &&
    !!nativeTextareaValue.value &&
    (isFocused.value || isHovering.value)
);

const showWordLimitVisible = computed(
  () =>
    props.showWordLimit &&
    !!attrs.value.maxlength &&
    !textareaDisabled.value &&
    !props.readonly
);

const textareaExceed = computed(
  () =>
    !!showWordLimitVisible.value &&
    textLength.value > Number(attrs.value.maxlength)
);

const classes = computed(() => ({
  [nsTextarea.b()]: true,
  [nsTextarea.m(textareaSize.value)]: textareaSize.value,
  [nsTextarea.is('disabled')]: textareaDisabled.value,
  [nsTextarea.is('exceed')]: textareaExceed.value,
  [useAttrs().class as string]: useAttrs().class
}));

const styles = computed<StyleValue>(() => [
  useAttrs().style as StyleValue,
  props.textareaStyle
]);

const textareaAttrs = computed(() => {
  const comboBoxAttrs: Record<string, unknown> = {};
  if (props.containerRole === 'combobox') {
    comboBoxAttrs['aria-haspopup'] = useAttrs()['aria-haspopup'];
    comboBoxAttrs['aria-owns'] = useAttrs()['aria-owns'];
    comboBoxAttrs['aria-expanded'] = useAttrs()['aria-expanded'];
  }
  return comboBoxAttrs;
});

const textareaStyleComputed = computed<StyleValue>(() => [
  props.textareaStyle,
  textareaCalcStyle.value,
  { resize: props.resize }
]);

useResizeObserver(textarea, (entries) => {
  onceInitSizeTextarea();
  if (!showWordLimitVisible.value || props.resize !== 'both') return;
  const entry = entries[0];
  const { width } = entry.contentRect;
  textareaSuffixStyle.value = {
    right: `calc(100% - ${width + 16}px)`
  };
});

watch(nativeTextareaValue, () => setNativeTextareaValue());

watch(
  () => props.modelValue,
  () => {
    nextTick(() => resizeTextarea());
    if (props.validateEvent) {
      formItem?.validate?.('change').catch((err) => debugWarn(err));
    }
  }
);

onMounted(() => {
  if (!props.formatter && props.parser) {
    debugWarn(
      'TuTextarea',
      'If you set the parser, you also need to set the formatter.'
    );
  }
  setNativeTextareaValue();
  nextTick(resizeTextarea);
});

defineExpose({
  textarea,
  ref: textareaRef,
  textareaStyle: textareaStyleComputed,
  autosize: toRef(props, 'autosize'),
  focus,
  blur,
  select,
  clear,
  resizeTextarea
});
</script>
