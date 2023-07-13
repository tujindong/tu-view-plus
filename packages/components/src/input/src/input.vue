<template>
  <div
    v-show="type !== 'hidden'"
    v-bind="inputAttrs"
    :class="classes"
    :style="styles"
    :role="containerRole"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div v-if="$slots.prepend" :class="nsInputGroup.e('prepend')">
      <slot name="prepend" />
    </div>

    <div :class="[nsInput.e('wrapper'), { [nsInput.is('focus')]: isFocused }]">
      <!-- prefix -->
      <span v-if="$slots.prefix || prefixIcon" :class="nsInput.e('prefix')">
        <span :class="nsInput.e('prefix-inner')" @click="focus">
          <slot name="prefix" />
          <tu-icon v-if="prefixIcon" :class="nsInput.e('icon')">
            <component :is="prefixIcon" />
          </tu-icon>
        </span>
      </span>

      <input
        ref="input"
        v-bind="attrs"
        :id="inputId"
        :class="nsInput.e('inner')"
        :type="showPassword ? (isPasswordVisible ? 'text' : 'password') : type"
        :disabled="inputDisabled"
        :formatter="formatter"
        :parser="parser"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :tabindex="tabindex"
        :aria-label="label"
        :placeholder="placeholder"
        :style="inputStyle"
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

      <!-- suffix -->
      <span v-if="showSuffixVisible" :class="nsInput.e('suffix')">
        <span :class="nsInput.e('suffix-inner')" @click="focus">
          <template
            v-if="
              !showClearVisible || !showPasswordVisible || !showWordLimitVisible
            "
          >
            <slot name="suffix"></slot>
            <tu-icon v-if="suffixIcon" :class="nsInput.e('icon')">
              <component :is="suffixIcon" />
            </tu-icon>
          </template>

          <tu-icon
            v-if="showClearVisible"
            :class="[nsInput.e('icon'), nsInput.em('icon', 'clear')]"
            @mousedown.prevent
            @click="clear"
          >
            <Close />
          </tu-icon>

          <tu-icon
            v-if="showPasswordVisible"
            :class="[nsInput.e('icon'), nsInput.em('icon', 'password')]"
            @click="handlePasswordVisible"
          >
            <View v-if="isPasswordVisible" />
            <Hide v-else />
          </tu-icon>

          <span v-if="showWordLimitVisible" :class="nsInput.e('count')">
            <span :class="nsInput.e('count-inner')">
              {{ textLength }} / {{ attrs.maxlength }}
            </span>
          </span>

          <tu-icon
            v-if="validateState && validateIcon && needStatusIcon"
            :class="[
              nsInput.e('icon'),
              nsInput.e('validateIcon'),
              nsInput.is('loading', validateState === 'validating')
            ]"
          >
            <component :is="validateIcon" />
          </tu-icon>
        </span>
      </span>
    </div>

    <div v-if="$slots.append" :class="nsInputGroup.e('append')">
      <slot name="append" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useAttrs, useSlots, shallowRef, onMounted } from 'vue';
import { inputProps, inputEmits } from './input';
import { TuIcon } from '../../icon';
import { useComponentAttrs, useNamespace } from '@tu-view-plus/hooks';
import { ValidateComponentsMap, debugWarn } from '@tu-view-plus/utils';
import { Close, View, Hide } from '@tu-view-plus/icons-vue';
import {
  useFormDisabled,
  useFormSize,
  useFormItemInputId,
  useFormItem
} from '../../form';
import useInput from './use-input';
import '../style/input.scss';

import type { StyleValue } from 'vue';

defineOptions({
  name: 'TuInput',
  inheritAttrs: false
});

const input = shallowRef<HTMLInputElement>();

const props = defineProps(inputProps);
const emit = defineEmits(inputEmits);

const slots = useSlots();

const nsInput = useNamespace('input');
const nsInputGroup = useNamespace('input-group');

const inputSize = useFormSize();
const inputDisabled = useFormDisabled();

const attrs = useComponentAttrs({
  excludeKeys: computed<string[]>(() => {
    return Object.keys(inputAttrs.value);
  })
});

const { form, formItem } = useFormItem();

const { inputId } = useFormItemInputId(props, {
  formItemContext: formItem
});

const {
  inputRef,
  isHovering,
  isFocused,
  isPasswordVisible,
  textLength,
  nativeInputValue,
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
} = useInput(props, emit, input);

const validateState = computed(() => formItem?.validateState || '');

const needStatusIcon = computed(() => form?.statusIcon ?? false);

const validateIcon = computed(
  () => validateState.value && ValidateComponentsMap[validateState.value]
);

const inputExceed = computed(
  () =>
    !!showWordLimitVisible.value &&
    textLength.value > Number(attrs.value.maxlength)
);

const showClearVisible = computed(
  () =>
    props.clearable &&
    !inputDisabled.value &&
    !props.readonly &&
    !!nativeInputValue.value &&
    (isFocused.value || isHovering.value)
);

const showPasswordVisible = computed(
  () =>
    props.showPassword &&
    !inputDisabled.value &&
    !props.readonly &&
    !!nativeInputValue.value &&
    (!!nativeInputValue.value || isFocused.value)
);

const showWordLimitVisible = computed(
  () =>
    props.showWordLimit &&
    !!attrs.value.maxlength &&
    props.type === 'text' &&
    !inputDisabled.value &&
    !props.readonly &&
    !props.showPassword
);

//显示后缀图标
const showSuffixVisible = computed(
  () =>
    !!slots.suffix ||
    !!props.suffixIcon ||
    showClearVisible.value ||
    props.showPassword ||
    showWordLimitVisible.value ||
    (!!validateState.value && needStatusIcon.value)
);

const classes = computed(() => ({
  [nsInput.b()]: true,
  [nsInput.m(inputSize.value)]: inputSize.value,
  [nsInput.is('disabled')]: inputDisabled.value,
  [nsInput.is('exceed')]: inputExceed.value,
  [nsInputGroup.b()]: slots.prepend || slots.append,
  [nsInputGroup.m('prepend')]: slots.prepend,
  [nsInputGroup.m('append')]: slots.append,
  [useAttrs().class as string]: useAttrs().class
}));

const styles = computed<StyleValue>(() => [
  useAttrs().style as StyleValue,
  props.inputStyle
]);

const inputAttrs = computed(() => {
  const comboBoxAttrs: Record<string, unknown> = {};
  if (props.containerRole === 'combobox') {
    comboBoxAttrs['aria-haspopup'] = useAttrs()['aria-haspopup'];
    comboBoxAttrs['aria-owns'] = useAttrs()['aria-owns'];
    comboBoxAttrs['aria-expanded'] = useAttrs()['aria-expanded'];
  }
  return comboBoxAttrs;
});

onMounted(() => {
  if (!props.formatter && props.parser) {
    debugWarn(
      'TuInput',
      'If you set the parser, you also need to set the formatter.'
    );
  }
  setNativeInputValue();
});

defineExpose({
  input,
  ref: inputRef,
  focus,
  blur,
  select,
  clear
});
</script>
