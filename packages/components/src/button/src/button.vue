<template>
  <button
    ref="buttonRef"
    v-bind="buttonAttrs"
    :class="classes"
    @click="handleClick"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading" />
      <tu-icon v-else :class="nsButton.is('loading')">
        <component :is="loadingIcon" />
      </tu-icon>
    </template>
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
import { useButtonEvent, useButtonRender } from './use-button';
import '../style/button.scss';

defineOptions({
  name: 'TuButton'
});

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);

const { buttonRef, nsButton, buttonSize, buttonType, classes, buttonAttrs } =
  useButtonRender(props);

const { handleClick } = useButtonEvent(emit);

defineExpose({
  ref: buttonRef,
  size: buttonSize,
  type: buttonType,
  disabled: props.disabled
});
</script>
