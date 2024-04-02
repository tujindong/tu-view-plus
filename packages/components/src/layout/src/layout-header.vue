<template>
  <header :class="nsLayout.e('header')">
    <slot />
  </header>
</template>

<script lang="ts" setup>
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/layout.scss';

defineOptions({
  name: 'TuLayoutHeader'
});

const nsLayout = useNamespace('layout');
</script>
