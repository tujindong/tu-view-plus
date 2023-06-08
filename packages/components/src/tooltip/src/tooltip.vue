<template>
  <div>
    tootip
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { tooltipProps } from './tooltip';
import '../style/tooltip.scss';

defineOptions({
  name: 'TuTooltip'
});

const props = defineProps(tooltipProps);
</script>
