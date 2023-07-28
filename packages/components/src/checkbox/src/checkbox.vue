<template>
  <label :class="classes" :aria-controls="controls">
    <span
      :class="inputContainClasses"
      :tabindex="indeterminate ? 0 : undefined"
      :role="indeterminate ? 'checkbox' : undefined"
      :aria-checked="indeterminate ? 'mixed' : undefined"
    >
      <input
        v-if="trueLabel || falseLabel"
        :id="inputId"
        v-model="model"
        :class="nsCheckbox.e('original')"
        type="checkbox"
        :aria-hidden="!!indeterminate"
        :name="name"
        :tabindex="tabindex"
        :disabled="checkboxDisabled"
        :true-value="trueLabel"
        :false-value="falseLabel"
        @change="handleChange"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <input
        v-else
        :id="inputId"
        v-model="model"
        :class="nsCheckbox.e('original')"
        type="checkbox"
        :aria-hidden="!!indeterminate"
        :disabled="checkboxDisabled"
        :value="label"
        :name="name"
        :tabindex="tabindex"
        @change="handleChange"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <span :class="nsCheckbox.e('inner')" />
    </span>
    <span :class="nsCheckbox.e('label')" :style="activeStyle" @keydown.stop>
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue';
import { checkboxProps, checkboxEmits } from './checkbox';
import { useNamespace } from '@tu-view-plus/hooks';
import { useCheckbox } from './use-checkbox';
import '../style/checkbox.scss';

defineOptions({
  name: 'TuCheckbox'
});

const props = defineProps(checkboxProps);
const emit = defineEmits(checkboxEmits);

const {
  checkboxGroup,
  inputId,
  model,
  checkboxDisabled,
  checkboxSize,
  checkboxType,
  isChecked,
  isFocused,
  handleChange,
  addToStore
} = useCheckbox(props, emit);

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

const activeStyle = computed<CSSProperties>(() => {
  return {
    color: checkboxGroup?.textColor?.value || ''
  };
});

props.checked && addToStore();
</script>
