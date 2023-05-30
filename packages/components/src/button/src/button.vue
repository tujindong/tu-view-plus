<template>
  <button
    ref="buttonRef"
    v-bind="buttonAttrs"
    :class="classes"
    @click="handleClick"
  >
    <tu-icon v-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon" />
    </tu-icon>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
import { TuIcon } from '../../icon';
import { buttonEmits, buttonProps } from './button';
import useButton from './use-button';
import '../style/index.scss';

defineOptions({
  name: 'TuButton',
  inheritAttrs: false
});

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);

const { buttonRef, buttonAttrs, classes, handleClick } = useButton(props, emit);

defineExpose({
  // button 元素
  ref: buttonRef
});
</script>

