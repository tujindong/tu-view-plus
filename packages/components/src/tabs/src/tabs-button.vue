<template>
  <div>
    tabButton
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { tabsButtonProps } from './tabs-button';
import '../style/tabs.scss';

defineOptions({
  name: 'TuTabsButton'
});

const props = defineProps(tabsButtonProps);
</script>
s
