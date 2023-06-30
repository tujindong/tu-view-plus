<template>
  <label
    :class="classes"
    :aria-checked="modelValue === label"
    :aria-disabled="disabled"
    :tabindex="tabIndex"
  >
    <span :class="classesInput">
      <input
        ref="radioRef"
        type="radio"
        v-model="modelValue"
        :class="nsRadio.e('original')"
        :value="label"
        :name="name || radioGroup?.name"
        :disabled="disabled"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
      />
      <span :class="nsRadio.e('inner')"></span>
    </span>
    <span
      :class="nsRadio.e('label')"
      :style="modelValue === label ? activeStyle : {}"
      @keydown.stop
    >
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue';
import { radioEmits, radioProps } from './radio';
import { useNamespace } from '@tu-view-plus/hooks';
import { useRadio } from './use-radio';
import '../style/radio.scss';

defineOptions({
  name: 'TuRadio'
});

const props = defineProps(radioProps);
const emit = defineEmits(radioEmits);

const {
  radioRef,
  radioGroup,
  focus,
  radioSize,
  radioType,
  disabled,
  modelValue,
  tabIndex,
  handleChange
} = useRadio(props, emit);

const nsRadio = useNamespace('radio');

const classes = computed(() => ({
  [nsRadio.b()]: true,
  [nsRadio.m(radioSize.value)]: true,
  [nsRadio.m(radioType.value)]: !!radioType.value,
  [nsRadio.is('disabled')]: disabled.value,
  [nsRadio.is('focus')]: focus.value,
  [nsRadio.is('bordered')]: props.border,
  [nsRadio.is('checked')]: modelValue.value === props.label
}));

const classesInput = computed(() => ({
  [nsRadio.e('input')]: true,
  [nsRadio.is('checked')]: modelValue.value === props.label
}));

const activeStyle = computed<CSSProperties>(() => {
  return {
    color: radioGroup?.textColor || ''
  };
});
</script>
