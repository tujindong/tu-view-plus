<template>
  <tu-popper ref="popperRef">
    <slot />
  </tu-popper>
</template>

<script lang="ts" setup>
import { tooltipProps } from './tooltip';
import { TuPopper } from '@tu-view-plus/components/src/popper';
import '../style/tooltip.scss';

defineOptions({
  name: 'TuTooltip'
});

const props = defineProps(tooltipProps);
</script>
