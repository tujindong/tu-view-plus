<template>
  <div>TuTabPane<slot /></div>
</template>

<script lang="ts" setup>
import { tabPaneProps } from './tab-pane';
import '../style/tabs.scss';

defineOptions({
  name: 'TuTabPane'
});

const props = defineProps(tabPaneProps);
</script>