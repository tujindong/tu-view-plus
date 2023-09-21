<template>
  <div>
    tabButton
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { tabButtonProps } from './tab-button';
import '../style/tabs.scss';

defineOptions({
  name: 'TuTabButton'
});

const props = defineProps(tabButtonProps);
</script>
s
