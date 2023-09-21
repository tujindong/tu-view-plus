<template>
  <div>
    tabNavIndicate
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { tabNavIndicateProps } from './tab-nav-indicate';
import '../style/tabs.scss';

defineOptions({
  name: 'TuTabNavIndicate'
});

const props = defineProps(tabNavIndicateProps);
</script>
s
