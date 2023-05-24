<template>
  <i :class="classes" :style="style" v-bind="$attrs"><slot /></i>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { CSSProperties } from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { addUnit, isUndefined } from '@tu-view-plus/utils';
import { iconProps } from './icon';

defineOptions({
  name: 'TuIcon',
  inheritAttrs: false
});

const props = defineProps(iconProps);

const ns = useNamespace('icon');

const classes = computed(() => [ns.b()]);

const style = computed<CSSProperties>(() => {
  const { size, color } = props;
  if (!size && !color) return {};
  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    '--color': color
  };
});
</script>
