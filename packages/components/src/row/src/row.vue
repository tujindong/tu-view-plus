<template>
  <component :is="tag" :class="classes" :style="style">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, provide } from 'vue';
import type { CSSProperties } from 'vue';
import { rowProps } from './row';
import { rowContextKey } from './constants';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/row.scss';

defineOptions({
  name: 'TuRow'
});

const gutter = computed(() => props.gutter);

provide(rowContextKey, { gutter });

const props = defineProps(rowProps);

const nsRow = useNamespace('row');

const classes = computed(() => ({
  [nsRow.b()]: true,
  [nsRow.is(`justify-${props.justify}`)]: props.justify !== 'start',
  [nsRow.is(`align-${props.align}`)]: props.align !== 'top'
}));

const style = computed(() => {
  const styles: CSSProperties = {};
  if (!props.gutter) return styles;
  styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`;
  return styles;
});
</script>
