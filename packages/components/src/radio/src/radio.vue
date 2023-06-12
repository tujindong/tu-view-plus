<template>
  <label :class="classes">
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
    <span :class="nsRadio.e('label')" @keydown.stop>
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, nextTick } from 'vue';
import { radioEmits, radioProps } from './radio';
import { useNamespace } from '@tu-view-plus/hooks';
import { useRadio } from './use-radio';
import '../style/radio.scss';

defineOptions({
  name: 'TuRadio'
});

const props = defineProps(radioProps);
const emit = defineEmits(radioEmits);

const { radioRef, radioGroup, focus, size, disabled, modelValue } = useRadio(
  props,
  emit
);

const nsRadio = useNamespace('radio');

const classes = computed(() => ({
  [nsRadio.b()]: true,
  [nsRadio.m(size.value)]: true,
  [nsRadio.is('disabled')]: disabled.value,
  [nsRadio.is('focus')]: focus,
  [nsRadio.is('bordered')]: props.border,
  [nsRadio.is('checked')]: modelValue.value === props.label
}));

const classesInput = computed(() => ({
  [nsRadio.e('input')]: true
}));

function handleChange() {
  nextTick(() => emit('change', modelValue.value));
}
</script>
