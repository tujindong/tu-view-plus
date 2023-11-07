<template>
  <div :class="nsSnsSkeleton.e('line')">
    <ul
      v-for="item in props.rows"
      :key="item"
      :class="nsSnsSkeleton.e('line-row')"
    >
      <li :class="classes" :style="skeletonLineItemStyles(item)"></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { skeletonLineProps } from './skeleton-line';
import { skeletonProps } from './skeleton';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/skeleton.scss';
import type { CSSProperties } from 'vue';
defineOptions({
  name: 'TuSkeletonLine'
});
const nsSnsSkeleton = useNamespace('skeleton');
const props = defineProps(skeletonLineProps);

const classes = computed(() => ({
  [nsSnsSkeleton.e('line-row-item')]: true,
  [nsSnsSkeleton.e('line-row-item-bg')]: true,
  [nsSnsSkeleton.e('line-row-item-animation')]: true
}));

const skeletonLineItemStyles = (value: number) => {
  let style = null;
  if (props.widths.length != 0) {
    for (let index = 0; index < props.widths.length; index++) {
      if (index + 1 == value) {
        style = {
          width: props.widths[index] + 'px',
          lineHeight: props.lineHeight + 'px',
          marginTop: props.lineSpacing + 'px'
        };
      }
    }
  }
  return style;
};
</script>
