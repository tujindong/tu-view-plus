<template>
  <div>
    header
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { layoutHeaderProps } from './layout-header';
import '../style/layout.scss';

defineOptions({
  name: 'TuLayoutHeader'
});

const props = defineProps(layoutHeaderProps);
</script>
