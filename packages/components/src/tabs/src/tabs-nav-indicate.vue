<template>
  <div>
    tabNavIndicate
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { tabsNavIndicateProps } from './tabs-nav-indicate';
import '../style/tabs.scss';

defineOptions({
  name: 'TuTabsNavIndicate'
});

const props = defineProps(tabsNavIndicateProps);
</script>
s
