<template>
  <div
    v-show="type !== 'hidden'"
    v-bind="inputAttrs"
    :class="inputClasses"
    :style="inputStyles"
    :role="containerRole"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div v-if="$slots.prepend" :class="nsInputGroup.e('prepend')">
      <slot name="prepend" />
    </div>

    <div :class="[nsInput.e('wrapper'), { [nsInput.is('focus')]: focused }]">
      <!-- prefix -->
      <span v-if="$slots.prefix || prefixIcon" :class="nsInput.e('prefix')">
        <span :class="nsInput.e('prefix-inner')" @click="focus">
          <slot name="prefix" />
          <tu-icon v-if="prefixIcon" :class="nsInput.e('icon')">
            <component :is="prefixIcon" />
          </tu-icon>
        </span>
      </span>

      <input ref="input" v-bind="attrs" :id="inputId" />

      <!-- suffix -->
      <span v-if="showSuffixVisible" :class="nsInput.e('suffix')"> </span>
    </div>

    <div v-if="$slots.append" :class="nsInputGroup.e('append')">
      <slot name="append" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useAttrs, useSlots } from 'vue';
// @ts-ignore
import { isNil } from 'lodash-unified';
import { inputProps, inputEmits } from './input';
import { TuIcon } from '../../icon';
import { useComponentAttrs, useNamespace } from '@tu-view-plus/hooks';
import useInput from './use-input';
import {
  useFormDisabled,
  useFormSize,
  useFormItemInputId,
  useFormItem
} from '../../form';
import '../style/input.scss';

import type { StyleValue } from 'vue';

defineOptions({
  name: 'TuInput'
});

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
const { hovering, focused, focus, handleMouseEnter, handleMouseLeave } =
  useInput(props, emit);

const nativeInputValue = computed(() =>
  !isNil(props.modelValue) ? String(props.modelValue) : ''
);
const showClearVisible = computed(
  () =>
    props.clearable &&
    !inputDisabled.value &&
    !props.readonly &&
    nativeInputValue.value &&
    (focused.value || hovering.value)
);
const showWordLimitVisible = computed(() => props.showWordLimit);
//显示后缀图标
const showSuffixVisible = computed(
  () =>
    slots.suffix ||
    props.suffixIcon ||
    showClearVisible.value ||
    props.showPassword
);

const inputClasses = computed(() => ({
  [nsInput.b()]: true,
  [nsInput.m(inputSize.value)]: inputSize.value,
  [nsInput.is('disabled')]: inputDisabled.value
}));

const inputStyles = computed<StyleValue>(() => []);

const inputAttrs = computed(() => {
  const comboBoxAttrs: Record<string, unknown> = {};
  if (props.containerRole === 'combobox') {
    comboBoxAttrs['aria-haspopup'] = useAttrs()['aria-haspopup'];
    comboBoxAttrs['aria-owns'] = useAttrs()['aria-owns'];
    comboBoxAttrs['aria-expanded'] = useAttrs()['aria-expanded'];
  }
  return comboBoxAttrs;
});
</script>
