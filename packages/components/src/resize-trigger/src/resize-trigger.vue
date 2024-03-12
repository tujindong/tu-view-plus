<template>
  <TuResizeObserver>
    resize-trigger
    <slot />
  </TuResizeObserver>
</template>

<script lang="ts" setup>
import { resizeTriggerProps } from './resize-trigger';
import TuResizeObserver from '../../resize-observer';
import '../style/resize-trigger.scss';

defineOptions({
  name: 'TuResizeTrigger'
});

const props = defineProps(resizeTriggerProps);
</script>
