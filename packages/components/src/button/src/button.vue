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
import { computed } from 'vue';
import { TuIcon } from '../../icon';
import { buttonEmits, buttonProps } from './button';
import { useNamespace } from '@tu-view-plus/hooks';
import useButton from './use-button';
import '../style/button.scss';

defineOptions({
  name: 'TuButton'
});

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);

const { buttonRef, buttonSize, buttonType, handleClick } = useButton(
  props,
  emit
);

const nsButton = useNamespace('button');

const classes = computed(() => ({
  [nsButton.b()]: true,
  [nsButton.m(buttonSize.value)]: true,
  [nsButton.m(buttonType.value)]: true,
  [nsButton.is('disabled')]: props.disabled,
  [nsButton.is('loading')]: props.loading,
  [nsButton.is('round')]: props.round,
  [nsButton.is('circle')]: props.circle
}));

const buttonAttrs = computed(() => {
  return {
    ariaDisabled: props.disabled || props.loading,
    disabled: props.disabled || props.loading,
    autofocus: props.autofocus,
    type: props.nativeType
  };
});

defineExpose({
  ref: buttonRef,
  size: buttonSize,
  type: buttonType,
  disabled: props.disabled
});
</script>
