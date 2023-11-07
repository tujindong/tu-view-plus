<template>
  <div :class="classes">
    <div :class="nsSkeleton.e('shape')" :style="skeletonLineItemStyles"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { skeletonShapeProps } from './skeleton-shape';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/skeleton.scss';

import type { CSSProperties } from 'vue';

defineOptions({
  name: 'TuSkeletonShape'
});

const props = defineProps(skeletonShapeProps);
const nsSkeleton = useNamespace('skeleton');

const classes = computed(() => ({
  [nsSkeleton.b()]: true,
  [nsSkeleton.m(props.size)]: props.size
}));

const skeletonLineItemStyles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {};
  if (props.shape == 'circle') {
    styles.borderRadius = '50%';
  }
  return styles;
});
</script>
