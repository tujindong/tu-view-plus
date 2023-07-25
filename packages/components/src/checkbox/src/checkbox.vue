<template>
  <label :class="classes" :aria-controls="controls">
    <!-- <div>checkboxType: {{ checkboxType }}</div>
    <div>checkboxSize: {{ checkboxSize }}</div> -->
    <span :class="inputContainClasses">
      <input
        v-model="model"
        type="checkbox"
        :id="inputId"
        :class="nsCheckbox.e('original')"
        :aria-hidden="!!indeterminate"
        :disabled="checkboxDisabled"
        :value="label"
        :name="name"
        :tabindex="tabindex"
        @change="handleChange"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
    </span>
    <span :class="nsCheckbox.e('label')">
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import { checkboxProps, checkboxEmits } from './checkbox';
import { useNamespace } from '@tu-view-plus/hooks';
import { useCheckbox } from './use-checkbox';
import '../style/checkbox.scss';

defineOptions({
  name: 'TuCheckbox'
});

const props = defineProps(checkboxProps);
const emit = defineEmits(checkboxEmits);
const slots = useSlots();

const {
  inputId,
  model,
  checkboxDisabled,
  checkboxSize,
  checkboxType,
  isChecked,
  isFocused,
  handleChange
} = useCheckbox(props, emit, slots);

const nsCheckbox = useNamespace('checkbox');

const classes = computed(() => ({
  [nsCheckbox.b()]: true,
  [nsCheckbox.m(checkboxSize.value)]: checkboxSize.value,
  [nsCheckbox.m(checkboxType.value)]: checkboxType.value,
  [nsCheckbox.is('disabled')]: checkboxDisabled.value,
  [nsCheckbox.is('checked')]: isChecked.value
}));

const inputContainClasses = computed(() => ({
  [nsCheckbox.e('input')]: true,
  [nsCheckbox.is('disabled')]: checkboxDisabled.value,
  [nsCheckbox.is('checked')]: isChecked.value,
  [nsCheckbox.is('indeterminate')]: props.indeterminate,
  [nsCheckbox.is('focus')]: isFocused.value
}));
</script>
