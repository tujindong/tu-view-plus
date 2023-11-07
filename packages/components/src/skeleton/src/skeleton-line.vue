<template>
  <div :class="nsSkeleton.e('line')">
    <ul
      v-for="item in props.rows"
      :key="item"
      :class="nsSkeleton.e('line-row')"
    >
      <li
        :class="nsSkeleton.e('line-row-item')"
        :style="skeletonLineItemStyles(item)"
      ></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { skeletonLineProps } from './skeleton-line';
import { useNamespace } from '@tu-view-plus/hooks';
import { addUnit } from '@tu-view-plus/utils';
import '../style/skeleton.scss';

import type { CSSProperties } from 'vue';

defineOptions({
  name: 'TuSkeletonLine'
});

const nsSkeleton = useNamespace('skeleton');
const props = defineProps(skeletonLineProps);

const skeletonLineItemStyles = (value: number): CSSProperties => {
  let style: CSSProperties = {};
  if (props.widths.length != 0) {
    for (let index = 0; index < props.widths.length; index++) {
      if (index + 1 == value) {
        style = {
          width: addUnit(props.widths[index]),
          lineHeight: addUnit(props.lineHeight),
          marginTop: addUnit(props.lineSpacing)
        };
      }
    }
  }
  return style;
};
</script>
