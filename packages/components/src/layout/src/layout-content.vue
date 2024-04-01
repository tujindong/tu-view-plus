<template>
  <div>
    layoutContent
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { layoutContentProps } from './layout-content';
import '../style/layout.scss';

defineOptions({
  name: 'TuLayoutContent'
});

const props = defineProps(layoutContentProps);
</script>
