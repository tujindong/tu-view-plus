<template>
  <div :class="[nsSpin.b(), nsSpin.e('dot')]" :style="dotStyle">
    <div
      v-for="dot in DOT_NUMBER"
      :key="dot"
      :class="nsSpin.e('dot-item')"
      :style="dotItemStyle"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { spinDotProps } from './spin-dot';
import { useNamespace } from '@tu-view-plus/hooks';
import { addUnit } from '@tu-view-plus/utils';
import '../style/spin.scss';

import type { CSSProperties } from 'vue';

const DOT_NUMBER = 3;

defineOptions({
  name: 'TuSpinDot'
});

const props = defineProps(spinDotProps);

const nsSpin = useNamespace('spin');

const dotStyle = computed<CSSProperties>(() => {
  return {
    width: addUnit(props.size * (DOT_NUMBER + 1)),
    height: addUnit(props.size)
  };
});

const dotItemStyle = computed<CSSProperties>(() => {
  return {
    width: addUnit(props.size),
    height: addUnit(props.size)
  };
});
</script>