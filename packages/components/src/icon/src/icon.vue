<template>
  <i :class="classes" :style="style" v-bind="$attrs">
    <span v-if="$slots.prefix" :class="nsIcon.e('prefix')">
      <slot name="prefix" />
    </span>

    <slot />
    <span v-if="$slots.suffix" :class="nsIcon.e('suffix')">
      <slot name="suffix"
    /></span>
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { CSSProperties } from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { addUnit, isUndefined } from '@tu-view-plus/utils';
import { iconProps } from './icon';
import '../style/icon.scss';

defineOptions({
  name: 'TuIcon',
  inheritAttrs: false
});

const props = defineProps(iconProps);

const nsIcon = useNamespace('icon');

const classes = computed(() => [nsIcon.b()]);

const style = computed<CSSProperties>(() => {
  const { size, color } = props;
  if (!size && !color) return {};
  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    '--color': color
  };
});
</script>
