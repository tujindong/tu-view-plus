<template>
  <div :class="[nsSpin.b(), nsSpin.e('loading')]" :style="wrapStyle">
    <div
      v-for="dot in DOT_NUMBER"
      :key="dot"
      :class="nsSpin.e('loading-item')"
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

const DOT_NUMBER = 4;

defineOptions({
  name: 'TuSpinLoading'
});

const props = defineProps(spinDotProps);

const nsSpin = useNamespace('spin');

const wrapStyle = computed<CSSProperties>(() => {
  return {
    width: addUnit(props.size * ((DOT_NUMBER + 1) / 2)),
    height: addUnit(props.size * ((DOT_NUMBER + 1) / 2))
  };
});

const dotItemStyle = computed<CSSProperties>(() => {
  return {
    width: addUnit(props.size),
    height: addUnit(props.size)
  };
});
</script>