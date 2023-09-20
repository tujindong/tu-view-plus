<template>
  <div>tab-bar<slot /></div>
</template>

<script lang="ts" setup>
import { tabBarProps } from './tab-bar';
import '../style/tabs.scss';

defineOptions({
  name: 'TuTabBar'
});

const props = defineProps(tabBarProps);
</script>