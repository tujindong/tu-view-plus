<template>
  <footer :class="nsLayout.e('footer')">
    <slot />
  </footer>
</template>

<script lang="ts" setup>
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/layout.scss';

defineOptions({
  name: 'TuLayoutFooter'
});

const nsLayout = useNamespace('layout');
</script>
