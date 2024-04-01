<template>
  <div>
    layout-footer
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { layoutFooterProps } from './layout-footer';
import '../style/layout.scss';

defineOptions({
  name: 'TuLayoutFooter'
});

const props = defineProps(layoutFooterProps);
</script>
