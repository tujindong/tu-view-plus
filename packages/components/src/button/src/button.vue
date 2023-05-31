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
import '../style/index.scss';

defineOptions({
  name: 'TuButton',
  inheritAttrs: false
});

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);

const nsButton = useNamespace('button');

const classes = computed(() => ({
  [nsButton.b()]: true,
  [nsButton.m(props.type)]: props.type,
  [nsButton.m(props.size)]: props.size,
  [nsButton.is('disabled')]: props.disabled,
  [nsButton.is('loading')]: props.loading,
  [nsButton.is('round')]: props.round,
  [nsButton.is('circle')]: props.circle
}));

const { buttonRef, buttonAttrs, handleClick } = useButton(props, emit);

defineExpose({
  ref: buttonRef
});
</script>

