<template>
  <div
    v-show="type !== 'hidden'"
    v-bind="textareaAttrs"
    :class="textareaClasses"
    :style="textareaStyles"
    :role="containerRole"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      :class="[
        nsTextarea.e('wrapper'),
        { [nsTextarea.is('focus')]: isFocused }
      ]"
    >
      <textarea
        ref="textarea"
        v-bind="attrs"
        :id="inputId"
        :class="nsTextarea.e('inner')"
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
      <span v-if="showClearVisible">1233</span>
      <span
        v-if="showWordLimitVisible"
        :style="textareaCountStyle"
        :class="nsTextarea.e('count')"
      >
        {{ textLength }} / {{ attrs.max }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { shallowRef, computed, useAttrs, ref, onMounted, nextTick } from 'vue';
import { textareaProps, textareaEmits } from './textarea';
import { useComponentAttrs, useNamespace } from '@tu-view-plus/hooks';
import useTextarea from './use-textarea';
import { debugWarn } from '@tu-view-plus/utils';
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

const textareaCountStyle = ref<StyleValue>();

const { form, formItem } = useFormItem();

const { inputId } = useFormItemInputId(props, {
  formItemContext: formItem
});

const {
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
} = useTextarea(props, emit, textarea);

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

const textareaClasses = computed(() => ({
  [nsTextarea.b()]: true,
  [nsTextarea.m(textareaSize.value)]: textareaSize.value,
  [nsTextarea.is('disabled')]: textareaDisabled.value,
  [nsTextarea.is('exceed')]: textareaExceed.value,
  [nsTextarea.is('focus')]: isFocused.value,
  [useAttrs().class as string]: useAttrs().class
}));

const textareaStyles = computed<StyleValue>(() => [
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

onMounted(() => {
  if (!props.formatter && props.parser) {
    debugWarn(
      'TuTextarea',
      'If you set the parser, you also need to set the formatter.'
    );
  }
  setNativeInputValue();
  nextTick(resizeTextarea);
});
</script>
