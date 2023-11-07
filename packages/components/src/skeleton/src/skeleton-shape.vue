<template>
  <div :class="classes">
    <div :class="shapeClasses" :style="skeletonLineItemStyles"></div>
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
const nsSnsSkeleton = useNamespace('skeleton');

const classes = computed(() => ({
  [nsSnsSkeleton.b()]: true,
  [nsSnsSkeleton.m(props.size)]: props.size
}));

const shapeClasses = computed(() => ({
  [nsSnsSkeleton.e('shape')]: true,
  [nsSnsSkeleton.e('shape-bg')]: true,
  [nsSnsSkeleton.e('shape-animation')]: true
}));

const skeletonLineItemStyles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {};
  if (props.shape == 'circle') {
    styles.borderRadius = '50%';
  }
  return styles;
});
</script>
